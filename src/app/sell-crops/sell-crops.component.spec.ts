import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SellCropsComponent } from './sell-crops.component';

describe('SellCropsComponent', () => {
  let component: SellCropsComponent;
  let fixture: ComponentFixture<SellCropsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SellCropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellCropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
