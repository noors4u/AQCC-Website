import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { AqccMatButtonModule } from 'src/libs/core/mat-button/mat-button.module';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './sub-components/teams/teams.component';
import { RegistrationComponent } from './sub-components/registration/registration.component';


@NgModule({
  declarations: [TeamsComponent, RegistrationComponent],
  imports: [
    BrowserModule,
    CommonModule,
    MatDividerModule,
    FlexLayoutModule,
    MatButtonModule,
    AqccMatButtonModule,

  ],
  providers: [],
  bootstrap: []
})
export class LeftToolbarModule { }
