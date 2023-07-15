import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionesFormuldariosComponent } from './validaciones-formuldarios.component';

describe('ValidacionesFormuldariosComponent', () => {
  let component: ValidacionesFormuldariosComponent;
  let fixture: ComponentFixture<ValidacionesFormuldariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidacionesFormuldariosComponent]
    });
    fixture = TestBed.createComponent(ValidacionesFormuldariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
