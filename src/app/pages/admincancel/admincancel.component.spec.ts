import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincancelComponent } from './admincancel.component';

describe('AdmincancelComponent', () => {
  let component: AdmincancelComponent;
  let fixture: ComponentFixture<AdmincancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincancelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
