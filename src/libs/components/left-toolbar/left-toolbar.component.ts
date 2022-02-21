import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-left-toolbar',
  templateUrl: './left-toolbar.component.html',
  styleUrls: ['./left-toolbar.component.scss']
})
export class LeftToolbarComponent implements OnInit {
  allPlayerHover = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  hoverPlayer() {
    this.allPlayerHover = !this.allPlayerHover;
    }
}
