import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  allPlayerHover = false;

  constructor() { }

  ngOnInit(): void {
  }

  hoverPlayer() {
    this.allPlayerHover = !this.allPlayerHover;
    }


}
