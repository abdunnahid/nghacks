import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {

  showNotice: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
