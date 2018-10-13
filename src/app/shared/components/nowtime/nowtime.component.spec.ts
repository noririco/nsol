import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowtimeComponent } from './nowtime.component';

describe('NowtimeComponent', () => {
  let component: NowtimeComponent;
  let fixture: ComponentFixture<NowtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
