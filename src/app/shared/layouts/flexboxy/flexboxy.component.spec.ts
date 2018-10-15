import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxyComponent } from './flexboxy.component';

describe('FlexboxyComponent', () => {
  let component: FlexboxyComponent;
  let fixture: ComponentFixture<FlexboxyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexboxyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexboxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
