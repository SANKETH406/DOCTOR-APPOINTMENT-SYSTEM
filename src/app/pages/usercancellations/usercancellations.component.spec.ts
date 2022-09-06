import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercancellationsComponent } from './usercancellations.component';

describe('UsercancellationsComponent', () => {
  let component: UsercancellationsComponent;
  let fixture: ComponentFixture<UsercancellationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercancellationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercancellationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
