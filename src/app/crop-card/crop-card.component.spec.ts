import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CropCardComponent } from './crop-card.component';

describe('CropCardComponent', () => {
  let component: CropCardComponent;
  let fixture: ComponentFixture<CropCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CropCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
