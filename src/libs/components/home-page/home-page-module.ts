import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from 'src/libs/components/home-page/home-page.component';
import {MatDividerModule} from '@angular/material/divider';
import { CoreModule, FlexLayoutModule } from '@angular/flex-layout';
import { AqccMatButtonComponent } from 'src/libs/core/mat-button/mat-button.component';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';





@NgModule({
  imports: [BrowserModule,
    CommonModule,
    MatCheckboxModule,
    MatDividerModule,
    FlexLayoutModule],
  declarations: [
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class HomePageModule { }
