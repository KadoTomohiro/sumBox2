import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatorComponent } from './candidator.component';

describe('CandidatorComponent', () => {
  let component: CandidatorComponent;
  let fixture: ComponentFixture<CandidatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatorComponent]
    });
    fixture = TestBed.createComponent(CandidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
