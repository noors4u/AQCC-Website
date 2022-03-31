import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {
 title = 'Series & Tournaments';

  constructor() { }

  leagueList = [ {
    img: 'wncl.png',
    format: 'ODI',
    tournamentName: 'Japan Cricket League'
  }, {
    img: 'wncl.png',
    format: 'T20',
    tournamentName: 'Japan Cup'
  }, {
    img: 'wncl.png',
    format: 'T20',
    tournamentName: 'Japan Premier League'
  }, {
    img: 'wncl.png',
    format: 'T20',
    tournamentName: 'Embassy Cup'
  }, {
    img: 'wncl.png',
    format: 'T20',
    tournamentName: 'Kanto Cricket League'
  },{
    img: 'wncl.png',
    format: 'Tennis Ball',
    tournamentName: 'TWCT'
  },{
    img: 'wncl.png',
    format: 'Tennis Ball',
    tournamentName: 'TWCT'
  }]
  ngOnInit(): void {

  }

}
