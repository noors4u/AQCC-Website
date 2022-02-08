import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersInfoComponent } from 'src/libs/components/left-toolbar/sub-components/players-info/players-info.component';
import { TeamsComponent } from 'src/libs/components/left-toolbar/sub-components/teams/teams.component';
// const routes: Routes = [];

const routes: Routes = [
  { path: 'team', component: TeamsComponent },
  { path: 'player-info', component: PlayersInfoComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
