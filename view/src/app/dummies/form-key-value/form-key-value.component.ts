import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-key-value',
  templateUrl: './form-key-value.component.html',
  styleUrls: ['./form-key-value.component.scss']
})
export class FormKeyValueComponent implements OnInit {

  @Input() item: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.item = this.fb.group({
      name: [''],
      value: ['']
    });
  }

  ngOnInit(): void {
  }

}
