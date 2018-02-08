import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  singInForm: FormGroup;
  phone: string;
  errorMsg: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.singInForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  signIn() {
    if (!this.singInForm.valid) {
      this.errorMsg = 'aaaaaaaaaaaaaaaaaaaaa';
      return;
    }

    this.errorMsg = null;

    return this.authService.signIn(this.singInForm.value.username, this.singInForm.value.password)
      .then(token => {
        if (token) {
          this.router.navigate(['/products']);
        }
      });
  }
}
