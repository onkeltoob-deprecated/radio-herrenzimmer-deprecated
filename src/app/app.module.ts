import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ConfigurationService } from './service/configuration.service';
import { MessageService } from './service/message.service';
import { GenreService } from './service/genre.service';
import { MixService } from './service/mix.service';
import { PlatformService } from './service/platform.service';
import { DateTimeService } from './service/date-time.service';
import { PlatformsComponent } from './component/platforms/platforms.component';
import { TitleService } from './service/title.service';
import { TitleComponent } from './component/title/title.component';
import { ImprintComponent } from './component/imprint/imprint.component';
import { IntroComponent } from './component/intro/intro.component';
import { GenreFilterComponent } from './component/genre-filter/genre-filter.component';
import { MixListComponent } from './component/mix-list/mix-list.component';
import { MixComponent } from './component/mix/mix.component';
import { TracklistComponent } from './component/tracklist/tracklist.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HomeComponent } from './component/home/home.component';
import { AudioPlayerComponent } from './component/audio-player/audio-player.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatformsComponent,
    TitleComponent,
    ImprintComponent,
    IntroComponent,
    GenreFilterComponent,
    MixListComponent,
    MixComponent,
    TracklistComponent,
    NotFoundComponent,
    HomeComponent,
    AudioPlayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ConfigurationService,
    MessageService,
    GenreService,
    PlatformService,
    TitleService,
    MixService,
    DateTimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
