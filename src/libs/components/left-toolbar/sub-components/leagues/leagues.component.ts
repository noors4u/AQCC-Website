import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {

 @Input() parentName: string = '';
 enterName: string = '';
  constructor() { }
  ngOnInit(): void {

  }

}
