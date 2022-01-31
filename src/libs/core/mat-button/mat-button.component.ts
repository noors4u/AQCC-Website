import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aqcc-mat-button',
  templateUrl: './mat-button.component.html',
  styleUrls: ['./mat-button.component.scss']
})
export class AqccMatButtonComponent implements OnInit {
@Input() height = ''; // height of button
@Input() width = ''; // width of button
@Input() iconColor = ''; // color of the icon
@Input() iconSize = ''; // not in use
@Input() fontSize = ''; // size of the icon
@Input() fontSet = ''; // fontsets of the icon
@Input() value = ''; // value for the text displayed inside button.
@Input() tooltip = ''; //Toolip to be displayed on hover.
@Input() bgColor = ''; // not in use
@Input() color = ''
  constructor() { }

  ngOnInit(): void {
  }

}
