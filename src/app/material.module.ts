import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
// import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    MatCardModule,
    MatListModule
    // MatTableModule
  ]
})
export class MaterialModule { }
