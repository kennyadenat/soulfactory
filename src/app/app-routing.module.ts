import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { TalkshowsComponent } from './talkshows/talkshows.component';
import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Seed Samples' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'Seed Samples' }
  },
  {
    path: 'events',
    component: EventsComponent,
    data: { title: 'Seed Samples' }
  },
  {
    path: 'album',
    component: AlbumComponent,
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
