import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulchTenkeyComponent } from './mulch-tenkey.component';

describe('MulchTenkeyComponent', () => {
  let component: MulchTenkeyComponent;
  let fixture: ComponentFixture<MulchTenkeyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MulchTenkeyComponent]
    });
    fixture = TestBed.createComponent(MulchTenkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
