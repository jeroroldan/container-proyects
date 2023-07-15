import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueAccesorComponent } from './value-accesor.component';

describe('ValueAccesorComponent', () => {
  let component: ValueAccesorComponent;
  let fixture: ComponentFixture<ValueAccesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValueAccesorComponent]
    });
    fixture = TestBed.createComponent(ValueAccesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
