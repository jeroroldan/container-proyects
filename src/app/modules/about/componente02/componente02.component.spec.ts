import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente02Component } from './componente02.component';

describe('Componente02Component', () => {
  let component: Componente02Component;
  let fixture: ComponentFixture<Componente02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Componente02Component]
    });
    fixture = TestBed.createComponent(Componente02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
