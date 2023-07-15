import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarMenuComponent } from './toolbar-menu.component';

describe('ToolbarMenuComponent', () => {
  let component: ToolbarMenuComponent;
  let fixture: ComponentFixture<ToolbarMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarMenuComponent]
    });
    fixture = TestBed.createComponent(ToolbarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
