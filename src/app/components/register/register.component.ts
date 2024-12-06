import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user = {
    fullName: '',
    email: '',
    phoneNum: '',
    password: '',
    userType: '' // Vendor or Customer
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    if (this.user.fullName && this.user.email && this.user.phoneNum && this.user.password && this.user.userType) {
      console.log('Form Submitted', this.user);

      // Redirect based on userType
      if (this.user.userType === 'Vendor') {
        console.log('Redirecting to Vendor Dashboard...');
      } else if (this.user.userType === 'Customer') {
        console.log('Redirecting to Customer Dashboard...');
      }
    } else {
      console.log('Please fill in all fields.');
    }
  }
}
