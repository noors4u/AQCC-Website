import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-info',
  templateUrl: './players-info.component.html',
  styleUrls: ['./players-info.component.scss']
})
export class PlayersInfoComponent implements OnInit {

  playerList = [
    {
      role: "Career",
      format: "Overall T20 Career",
      matches: "Matches",
      count: 32,
      img: 'Noor.jpg',
    },
    {
      role: "Batsman",
      format: "Overall T20 Career",
      matches: "Matches",
      run: 'Runs',
      score: 250,
      avg: 'Average',
      average: 43.54,
      hundred: '100s',
      century: 12,
      fifty: '50s',
      halfcentury: 10,
    },
    {
      role: "Bowler",
      format: "Overall T20 Career",
      matches: "Matches",
      count: 32,
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
