import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormKeyValueComponent } from './form-key-value/form-key-value.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormKeyValueComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FormKeyValueComponent]
})
export class DummiesModule { }
