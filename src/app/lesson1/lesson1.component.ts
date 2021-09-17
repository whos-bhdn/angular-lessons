import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {


  public name = 'Ivan'
  public age = 23;
  public isOnline = true;
  public users: Array<string> = ['Iryna', 'Olga', 'Karina'];
  public car = {mark: 'BMW', model: 'X5M'};

  public urlName = 'google';
  public urlPath = 'https://www.google.com';

  constructor() { }

  ngOnInit(): void {
  }

  sayHello(){
    return `Hello Angular`
  }

}
