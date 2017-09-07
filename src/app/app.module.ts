import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { GenreService } from './service/genre.service';
import { MixService } from './service/mix.service';
import { PlatformService } from './service/platform.service';
import { PlatformsComponent } from './component/platforms/platforms.component';
import { TitleService } from './service/title.service';
import { TitleComponent } from './component/title/title.component';
import { ImprintComponent } from './component/imprint/imprint.component';
import { IntroComponent } from './component/intro/intro.component';
import { GenreFilterComponent } from './component/genre-filter/genre-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatformsComponent,
    TitleComponent,
    ImprintComponent,
    IntroComponent,
    GenreFilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    GenreService,
    PlatformService,
    TitleService,
    MixService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
