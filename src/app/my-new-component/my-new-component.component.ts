import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  };

  myArr = ['him', 'hers', 'yours'];
  showArr = true;

  boldClass = 'boldClass';

  titleClasses = {
    'boldClass': true,
    'redClass': true
  };

  constructor() { }

  ngOnInit() {
  }

}
