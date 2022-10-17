import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
    exports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule
  ],
})
export class MaterialModule { }
