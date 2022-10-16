import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, } from '@angular/forms';

@Component({
  selector: 'app-form-key-value',
  templateUrl: './form-key-value.component.html',
  styleUrls: ['./form-key-value.component.scss']
})
export class FormKeyValueComponent {

  @Input() item: any;
  @Input() showAdd = false;
  @Output() addClicked = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) { 
    this.item = this.fb.group({
      name: [''],
      value: ['']
    });
  }

  isGroupDirty() {
    return this.item.get('name')?.value && this.item.get('value')?.value;
  }

  onAddClicked() {
    this.addClicked.emit(true);
  }

}
