import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {ConfigurationComponent} from './configuration/configuration.component';
import {TestComponent} from './test/test.component';
import {ConfigurationFormComponent} from './components/configuration-form/configuration-form.component';
import {CustomerVendorConfigComponent} from './components/customer-vendor-config/customer-vendor-config.component';
import {HttpClientModule} from '@angular/common/http';
import {CustomerDetailsComponent} from './components/customer-details/customer-details.component';
import {LogDisplayComponent} from './components/log-display/log-display.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MatIconModule, ConfigurationComponent, TestComponent, ConfigurationFormComponent, CustomerVendorConfigComponent, HttpClientModule , CustomerDetailsComponent, LogDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ticketingApp';
}
