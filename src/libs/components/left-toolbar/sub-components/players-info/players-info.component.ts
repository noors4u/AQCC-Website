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
      run: 'Run',
      score: 250,
      count: 32,
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
