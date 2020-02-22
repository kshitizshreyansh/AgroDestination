import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaserolComponent } from './caserol.component';

describe('CaserolComponent', () => {
  let component: CaserolComponent;
  let fixture: ComponentFixture<CaserolComponent>;

  beforeEach(async(() => {
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
