import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventwidgetComponent } from './eventwidget.component';

describe('EventwidgetComponent', () => {
  let component: EventwidgetComponent;
  let fixture: ComponentFixture<EventwidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventwidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
