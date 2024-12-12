import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MatIconModule, HttpClientModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ticketingApp';
}
