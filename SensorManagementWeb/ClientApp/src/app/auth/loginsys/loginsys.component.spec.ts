import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsysComponent } from './loginsys.component';

describe('LoginsysComponent', () => {
  let component: LoginsysComponent;
  let fixture: ComponentFixture<LoginsysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginsysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
