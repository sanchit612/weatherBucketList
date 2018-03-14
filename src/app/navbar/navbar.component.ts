import { Component, OnInit } from '@angular/core';
import { NAVIGATIONS } from '../navList';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = "Weather Bucket List";
  navListings = NAVIGATIONS;

  constructor() { }

  ngOnInit() {
  }

}
