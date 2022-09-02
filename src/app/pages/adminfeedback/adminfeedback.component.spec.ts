import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfeedbackComponent } from './adminfeedback.component';

describe('AdminfeedbackComponent', () => {
  let component: AdminfeedbackComponent;
  let fixture: ComponentFixture<AdminfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
