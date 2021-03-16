import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewcroprequestComponent } from './viewcroprequest.component';

describe('ViewcroprequestComponent', () => {
  let component: ViewcroprequestComponent;
  let fixture: ComponentFixture<ViewcroprequestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcroprequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcroprequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
