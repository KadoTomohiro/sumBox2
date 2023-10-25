import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericButtonComponent } from './numeric-button.component';

describe('NumericButtonComponent', () => {
  let component: NumericButtonComponent;
  let fixture: ComponentFixture<NumericButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumericButtonComponent]
    });
    fixture = TestBed.createComponent(NumericButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
