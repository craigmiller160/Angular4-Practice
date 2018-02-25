import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  // angularLogo = 'https://angular.io/resources/images/logos/angular2/angular.png';
  angularLogo = 'assets/angular-2.png';
  buttonStatus = false;

  constructor() { }

  ngOnInit() {
  }

}
