import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DispSellCropComponent } from './disp-sell-crop.component';

describe('DispSellCropComponent', () => {
  let component: DispSellCropComponent;
  let fixture: ComponentFixture<DispSellCropComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DispSellCropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispSellCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
