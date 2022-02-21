import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-players-info',
  templateUrl: './players-info.component.html',
  styleUrls: ['./players-info.component.scss'],
})
export class PlayersInfoComponent implements OnInit {
  title = 'Teams'
  allPlayerHover = false;
  playerList = [
    {
      role: 'Career',
      format: 'Overall T20 Career',
      matches: 'Matches',
      count: 32,
      img: 'Noor.jpg',
    },
    {
      role: 'Batsman',
      format: 'Overall T20 Career',
      matches: 'Matches',
      run: 'Runs',
      score: 250,
      avg: 'Average',
      average: 43.54,
      hundred: '100s',
      century: 12,
      fifty: '50s',
      halfcentury: 10,
      stats: [
        {
          hs: 'Highest  Score',
          highscore: 120,
          sr: 'Strike Rate',
          strikerate: 54.86,
          bf: 'Balls Faced',
          ballfaced: '16,772',
          inn: 'Innings',
          innings: 201,
          no: 'Not Out',
          notout: 15,
        },
      ],
    },
    {
      role: 'Bowler',
      format: 'Overall T20 Career',
      matches: 'Matches',
      wicket: 'Wickets',
      totalwickets: 25,
      avg: 'Average',
      average: 30.54,
      bbi: 'BBM',
      bestbowling: '4/12',
      bowlstats: [
        {
          bb: 'Balls Bowled',
          ballsbowled: 2770,
          rc: 'Run Conceded',
          runscondeded: 2570,
          eco: 'Economy',
          economy: '5.50',
          inn: 'Innings',
          innings: 12,
          sr: 'Strike Rate',
          strikerate: 16.05,
        },
      ],
    },
  ];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {}

  hoverPlayer() {
  this.allPlayerHover = !this.allPlayerHover;
  }

  viewAllPlayers() {
    this.router.navigate(['../teams'], {
      relativeTo: this.route,
    }
    );
  }
}
