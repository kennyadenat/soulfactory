import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongwidgetComponent } from './songwidget.component';

describe('SongwidgetComponent', () => {
  let component: SongwidgetComponent;
  let fixture: ComponentFixture<SongwidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongwidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
