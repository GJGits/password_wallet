import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesModule } from 'src/app/services/services.module';

import { SecretComponent } from './secret.component';

describe('SecretComponent', () => {
  let component: SecretComponent;
  let fixture: ComponentFixture<SecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesModule],
      declarations: [ SecretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
