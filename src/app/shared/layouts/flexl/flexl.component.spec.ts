import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexlComponent } from './flexl.component';

describe('FlexlComponent', () => {
  let component: FlexlComponent;
  let fixture: ComponentFixture<FlexlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
