import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { EventsComponent } from './events/events.component';
import { SliderComponent } from './layout/slider/slider.component';
import { AboutComponent } from './about/about.component';
import { SongwidgetComponent } from './songwidget/songwidget.component';
import { TalkshowsComponent } from './talkshows/talkshows.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    EventsComponent,
    SliderComponent,
    AboutComponent,
    SongwidgetComponent,
    TalkshowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
