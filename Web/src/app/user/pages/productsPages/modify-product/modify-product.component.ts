import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from '../../../../services/user.service';
import { categories } from 'src/environments/environment';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent {

  data: any
  Response: any
  imagen = []
  isDisabled = false
  valImage = false
  categories = categories

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, public dialog: MatDialog, private userService: UserService) {
    this.userService.getUserProduct(this.route.snapshot.paramMap.get('id')!).subscribe(
      res => {this.data = res.data},
      err => {console.log(err)},
      () => { 
        this.createProductForm.get("title")!.setValue(this.data.title);
        this.createProductForm.get("description")!.setValue(this.data.description);
        console.log(this.data)
      }
    )
  }

  categoriesControl = new FormControl<CategoriesProducts | null>(null, Validators.required);
  
  createProductForm = this.formBuilder.group({
    title:['', [ Validators.required]],
    description:['', [ Validators.required]]
  })

  noTitleValid(){ return this.createProductForm.controls.title.errors && this.createProductForm.controls.title.touched }
  noDescriptionValid(){ return this.createProductForm.controls.description.errors && this.createProductForm.controls.description.touched }

  capturarFile(event: any){
    const archivoCapturado = event.target.files[0]
    this.imagen = archivoCapturado
    this.valImage = true
  }

  saveForm(){
    if ( this.createProductForm.invalid || this.categoriesControl.invalid){
      this.createProductForm.markAllAsTouched()
      this.categoriesControl.markAllAsTouched()
      return;
    }
    this.isDisabled = false
    const formularioDeDatos = new FormData();
    formularioDeDatos.append("post_id", this.data.id)
    formularioDeDatos.append("title", this.createProductForm.controls.title.value!.toString())
    formularioDeDatos.append("description", this.createProductForm.controls.description.value!.toString())
    formularioDeDatos.append("category", this.categoriesControl.value!.value.toString())

    // if (this.valImage){
    //   this.userService.modifyUserProduct(formularioDeDatos, this.imagen, 0)
    // }
    // else{
    //   this.userService.modifyUserProduct(formularioDeDatos, this.imagen, 1)
    // }

      this.userService.modifyUserProduct(formularioDeDatos, this.imagen, 1).subscribe(
      res => {  console.log(res);
                this.Response = res;
                if (this.Response.body.success == false){
                  this.dialog.open(createProductDialog, { data: this.Response.body.msg});
                }
                else{ }//this.reloadCurrentPage() }

      },
      err => { console.log(err);this.dialog.open(createProductDialog, { data: "Error del servidor, inténtalo más tarde"}); },
      () => { this.isDisabled = false }
    );
  }
  
  reloadCurrentPage() {
    window.location.reload();
  }
}

@Component({
  selector: 'create-product-dialog',
  template: `<h1 mat-dialog-title>Error al crear el producto</h1>
              <div mat-dialog-content>{{data}}</div>`,
})
export class createProductDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ModifyProductComponent) {}
}

export interface CategoriesProducts {
  value:  string;
}