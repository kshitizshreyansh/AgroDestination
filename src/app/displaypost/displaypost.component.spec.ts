import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DisplaypostComponent } from './displaypost.component';

describe('DisplaypostComponent', () => {
  let component: DisplaypostComponent;
  let fixture: ComponentFixture<DisplaypostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaypostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaypostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
