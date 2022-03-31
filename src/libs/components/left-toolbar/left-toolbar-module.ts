import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { AqccMatButtonModule } from 'src/libs/core/mat-button/mat-button.module';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './sub-components/teams/teams.component';
import { RegistrationComponent } from './sub-components/registration/registration.component';
import { LeaguesComponent } from './sub-components/leagues/leagues.component';
import { PlayersInfoComponent } from './sub-components/players-info/players-info.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [TeamsComponent, PlayersInfoComponent, RegistrationComponent, LeaguesComponent],
  imports: [
    BrowserModule,
    CommonModule,
    MatDividerModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatButtonModule,
    AqccMatButtonModule,

  ],
  providers: [],
  bootstrap: []
})
export class LeftToolbarModule { }
