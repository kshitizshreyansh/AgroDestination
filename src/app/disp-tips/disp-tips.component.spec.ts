import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispTipsComponent } from './disp-tips.component';

describe('DispTipsComponent', () => {
  let component: DispTipsComponent;
  let fixture: ComponentFixture<DispTipsComponent>;

  beforeEach(async(() => {
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
