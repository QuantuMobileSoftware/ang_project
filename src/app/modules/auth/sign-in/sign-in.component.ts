import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user = {
    username: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {

  }
}
