import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AparteComponent } from './aparte.component';

describe('AparteComponent', () => {
  let component: AparteComponent;
  let fixture: ComponentFixture<AparteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AparteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AparteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
