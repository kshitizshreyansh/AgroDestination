import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DispTipsComponent } from './disp-tips.component';

describe('DispTipsComponent', () => {
  let component: DispTipsComponent;
  let fixture: ComponentFixture<DispTipsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DispTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
