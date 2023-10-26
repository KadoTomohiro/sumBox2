import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenkyLayoutComponent } from './tenky-layout.component';

describe('TenkyLayoutComponent', () => {
  let component: TenkyLayoutComponent;
  let fixture: ComponentFixture<TenkyLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenkyLayoutComponent]
    });
    fixture = TestBed.createComponent(TenkyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
