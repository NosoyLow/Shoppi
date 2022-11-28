import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  createProduct = ["user/createProduct"]
  hide = true;
  imagen = []
  archivos = []

  Response: any
  isDisabled = false
  

  categories = [
    {value: 'Comida'},
    {value: 'Electrónica'},
    {value: 'Anime'},
    {value: 'Ropa'},
    {value: 'Calzado'},
    {value: 'Postres'},
    {value: 'Videojuegos'},
    {value: 'Servicios'},
    {value: 'Asesorías'},
    {value: 'Pines'},
    {value: 'Stickers'},
    {value: 'Trueque'},
    {value: 'Variado'},
  ];

  constructor(private router: Router, private formBuilder: FormBuilder, public dialog: MatDialog, private userService: UserService) {}

  categoriesControl = new FormControl<CategoriesProducts | null>(null, Validators.required);

  createProductForm = this.formBuilder.group({
    title:[
      '', 
      [
        Validators.required
      ] 
    ],
    description:[
      '', 
      [
        Validators.required
      ] 
    ]
  })

  noTitleValid(){ return this.createProductForm.controls.title.errors && this.createProductForm.controls.title.touched }
  
  noDescriptionValid(){ return this.createProductForm.controls.description.errors && this.createProductForm.controls.description.touched }

  capturarFile(event: any){
    const archivoCapturado = event.target.files[0]
    this.imagen = archivoCapturado
  }

  saveForm(){
    if ( this.createProductForm.invalid || this.categoriesControl.invalid){
      this.createProductForm.markAllAsTouched()
      this.categoriesControl.markAllAsTouched()
      return;
    }
    this.isDisabled = true
    const formularioDeDatos = new FormData();
    formularioDeDatos.append("title", this.createProductForm.controls.title.value!.toString())
    formularioDeDatos.append("description", this.createProductForm.controls.description.value!.toString())
    formularioDeDatos.append("category", this.categoriesControl.value!.value.toString())
    
    this.userService.createProduct(formularioDeDatos, this.imagen).subscribe(
      res => {  this.Response = res;
                if (this.Response.body.success == false){
                  this.dialog.open(createProductDialog, { data: this.Response.body.msg});
                }
                else{ this.reloadCurrentPage() }

      },
      err => { this.dialog.open(createProductDialog, { data: "Error del servidor, inténtalo más tarde"}); },
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
  constructor(@Inject(MAT_DIALOG_DATA) public data: CreateProductComponent) {}
}

export interface CategoriesProducts {
  value:  string;
}