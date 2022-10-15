import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { ConvertToSpace } from './convert-to-space.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpace
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    ConvertToSpace,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
