import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesModule } from 'src/app/services/services.module';

import { CredentialCardComponent } from './credential-card.component';

describe('CredentialCardComponent', () => {
  let component: CredentialCardComponent;
  let fixture: ComponentFixture<CredentialCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesModule],
      declarations: [ CredentialCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
