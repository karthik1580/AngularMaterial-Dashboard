import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sideBarToggle: boolean = true;
  constructor() { }

  ngOnInit(): void {}

  sideBarToggleEvent($event:any) {
    this.sideBarToggle = !this.sideBarToggle
  }

}
