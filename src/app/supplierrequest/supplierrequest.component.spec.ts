import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SupplierrequestComponent } from './supplierrequest.component';

describe('SupplierrequestComponent', () => {
  let component: SupplierrequestComponent;
  let fixture: ComponentFixture<SupplierrequestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
