import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  cards = [{
    img : 'Noor.jpg'
  },{
    img : 'Team_Pic.jpg'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
