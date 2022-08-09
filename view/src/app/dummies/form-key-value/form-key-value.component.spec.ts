import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ServicesModule } from 'src/app/services/services.module';
import { DummiesModule } from '../dummies.module';

import { FormKeyValueComponent } from './form-key-value.component';

describe('FormKeyValueComponent', () => {
  let component: FormKeyValueComponent;
  let fixture: ComponentFixture<FormKeyValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesModule, RouterTestingModule, DummiesModule],
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
