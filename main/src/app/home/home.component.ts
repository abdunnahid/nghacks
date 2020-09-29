import { Component, OnInit } from '@angular/core';
import { HomeCardListData } from './home-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = HomeCardListData;

  constructor() { }

  ngOnInit(): void {
  }

}
