import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontPageComponent } from './front-page/front-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    ToolbarComponent,
    FrontPageComponent
  ],
  exports: [
    ToolbarComponent,
    FrontPageComponent
  ]
})
export class SharedModule { }