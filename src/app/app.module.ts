import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from 'src/libs/components/home-page/home-page.component';
import { LeftToolbarComponent } from 'src/libs/components/left-toolbar/left-toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { AqccMatButtonModule } from 'src/libs/core/mat-button/mat-button.module';
import {MatIconModule} from '@angular/material/icon';
import { TopToolbarComponent } from 'src/libs/components/top-toolbar/top-toolbar.component';
import { LeftToolbarModule } from 'src/libs/components/left-toolbar/left-toolbar-module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SponsersComponent } from 'src/libs/components/sponsers/sponsers.component';
import { CommonModule } from '@angular/common';
import { FilterPipe } from 'src/libs/components/sponsers/filter.pipe';
import { HomePageModule } from 'src/libs/components/home-page/home-page-module';
import { LeaguesComponent } from 'src/libs/components/left-toolbar/sub-components/leagues/leagues.component';
import { MatchesComponent } from 'src/libs/components/left-toolbar/sub-components/matches/matches.component';
import { GalleryComponent } from 'src/libs/components/left-toolbar/sub-components/gallery/gallery.component';
import { VideoComponent } from 'src/libs/components/left-toolbar/sub-components/video/video.component';
import { RegistrationComponent } from 'src/libs/components/left-toolbar/sub-components/registration/registration.component';
import { AboutUsComponent } from 'src/libs/components/left-toolbar/sub-components/about-us/about-us.component';
import { TeamsComponent } from 'src/libs/components/left-toolbar/sub-components/teams/teams.component';

const appRoutes: Routes = [
  { path: 'matches', component: MatchesComponent },
  { path: 'leagues', component: LeaguesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'video', component: VideoComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'about', component: AboutUsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SponsersComponent,
    TopToolbarComponent,
    FilterPipe,
    LeaguesComponent,
    LeftToolbarComponent,
    MatchesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeftToolbarModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatDividerModule,
    AqccMatButtonModule,
    MatIconModule,
    HomePageModule,
    CommonModule,
    FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
