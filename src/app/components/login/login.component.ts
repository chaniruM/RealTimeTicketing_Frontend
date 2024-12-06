import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
    userType: '' // Vendor or Customer
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    if (this.user.email && this.user.password && this.user.userType) {
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
