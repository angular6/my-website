import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'admin',
  templateUrl: './admin.html',
  styleUrls: ['./admin.scss'],
})


export class Admin implements OnInit {

  state: string = '';
  error: any;
  email: any
  password: any

  constructor(public af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/my_dashboard');
      }
    });
  }


  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      }, {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }).then(
        (success) => {
          console.log(success);
          this.router.navigate(['/my_dashboard']);
        }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        })
    }
  }

  ngOnInit() {}

}
