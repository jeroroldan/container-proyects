import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente01Component } from './componente01.component';

describe('Componente01Component', () => {
  let component: Componente01Component;
  let fixture: ComponentFixture<Componente01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Componente01Component]
    });
    fixture = TestBed.createComponent(Componente01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
