import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKeyValueComponent } from './form-key-value.component';

describe('FormKeyValueComponent', () => {
  let component: FormKeyValueComponent;
  let fixture: ComponentFixture<FormKeyValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormKeyValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormKeyValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
