import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosTodoComponent } from './formularios-todo.component';

describe('FormulariosTodoComponent', () => {
  let component: FormulariosTodoComponent;
  let fixture: ComponentFixture<FormulariosTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulariosTodoComponent]
    });
    fixture = TestBed.createComponent(FormulariosTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
