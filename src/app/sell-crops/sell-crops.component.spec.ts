import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCropsComponent } from './sell-crops.component';

describe('SellCropsComponent', () => {
  let component: SellCropsComponent;
  let fixture: ComponentFixture<SellCropsComponent>;

  beforeEach(async(() => {
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
