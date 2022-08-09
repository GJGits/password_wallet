import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormKeyValueComponent } from './form-key-value/form-key-value.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';


@NgModule({
  declarations: [
    FormKeyValueComponent,
    PasswordGeneratorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FormKeyValueComponent, PasswordGeneratorComponent]
})
export class DummiesModule { }
