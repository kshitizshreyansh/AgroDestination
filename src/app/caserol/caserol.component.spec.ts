import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CaserolComponent } from './caserol.component';

describe('CaserolComponent', () => {
  let component: CaserolComponent;
  let fixture: ComponentFixture<CaserolComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CaserolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaserolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
