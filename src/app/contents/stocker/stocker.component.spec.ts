import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockerComponent } from './stocker.component';

describe('StockerComponent', () => {
  let component: StockerComponent;
  let fixture: ComponentFixture<StockerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockerComponent]
    });
    fixture = TestBed.createComponent(StockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
