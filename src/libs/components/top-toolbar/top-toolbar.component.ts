import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.scss']
})
export class TopToolbarComponent implements OnInit {
  teamName = "Alpha Quasher Cricket Club"
  scoreCard = [
    {
      leagues: 'JCL - Div 1',
      schedule: 'Starts 10:00, 9 June 2022 JST',
      homelogo: 'aqcc.jpeg',
      awaylogo: 'tigers.jpeg',
      hometeam: 'AQCC',
      awayteam: 'Tigers',
      homescore: '206/5',
      awayscore: '(12/40 ov, target 207) 104/2'
    },
    {
      leagues: 'JCL - Div 2',
      schedule: 'Starts 10:00, 10 June 2022 JST',
      homelogo: 'aqcc.jpeg',
      awaylogo: 'falcons.jpeg',
      hometeam: 'AQCC',
      awayteam: 'Falcons',
      homescore: '206/5',
      awayscore: '(12/40 ov, target 207) 104/2'
    },
    {
      leagues: 'Japan Cup - South Kanto - Div 2',
      schedule: 'Starts 14:00, 19 June 2022 JST',
      homelogo: 'chiba.jpeg',
      awaylogo: 'aqcc.jpeg',
      hometeam: 'Chiba Sharks',
      awayteam: 'AQCC',
      homescore: '206/5',
      awayscore: '(12/40 ov, target 207) 104/2'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  getName() {
    return this.teamName
  }
}
