import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSetComponent } from './number-set.component';

describe('NumberSetComponent', () => {
  let component: NumberSetComponent;
  let fixture: ComponentFixture<NumberSetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberSetComponent]
    });
    fixture = TestBed.createComponent(NumberSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
