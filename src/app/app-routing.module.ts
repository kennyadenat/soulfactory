import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { TalkshowsComponent } from './talkshows/talkshows.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Seed Samples' }
  },
  {
    path: 'events',
    component: EventsComponent,
    data: { title: 'Seed Samples' }
  },
  {
    path: 'talkshow',
    component: TalkshowsComponent,
    data: { title: 'Seed Samples' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
