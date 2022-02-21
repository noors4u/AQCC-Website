import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  name: string = '';
  title = 'Matches'
  constructor() { }

  ngOnInit(): void {
  }

}
