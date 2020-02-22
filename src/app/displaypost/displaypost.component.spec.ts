import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaypostComponent } from './displaypost.component';

describe('DisplaypostComponent', () => {
  let component: DisplaypostComponent;
  let fixture: ComponentFixture<DisplaypostComponent>;

  beforeEach(async(() => {
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
