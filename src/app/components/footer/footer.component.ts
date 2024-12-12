import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    MatIconModule,
    RouterLink
  ],
  templateUrl: './footer.component.html'
})
export class FooterComponent {

}
