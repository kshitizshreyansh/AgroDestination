import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FarmingTipsComponent } from './farming-tips.component';

describe('FarmingTipsComponent', () => {
  let component: FarmingTipsComponent;
  let fixture: ComponentFixture<FarmingTipsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmingTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmingTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
