import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontPageComponent } from './front-page/front-page.component';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    FrontPageComponent,
    ToolbarComponent
  ],
  exports: [
    FrontPageComponent,
    ToolbarComponent
  ]
})
export class SharedModule { }