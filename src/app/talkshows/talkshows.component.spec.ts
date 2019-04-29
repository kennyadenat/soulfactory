import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkshowsComponent } from './talkshows.component';

describe('TalkshowsComponent', () => {
  let component: TalkshowsComponent;
  let fixture: ComponentFixture<TalkshowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkshowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
