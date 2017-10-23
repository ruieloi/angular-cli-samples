import { Component, OnInit } from '@angular/core';
import {NoConflictStyleCompatibilityMode} from '@angular/material';

@Component({
  selector: 're-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

 title1 = 'Button';
title4 = 'Warn';
  isDisabled = true;

  googleUrl = 'http://google.com';

  constructor() {


   }

  ngOnInit() {
  }

}
