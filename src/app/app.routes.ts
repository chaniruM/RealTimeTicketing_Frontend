import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import("./home/home.component").then(m => m.HomeComponent);
    },
  },

  {
    path: 'configurationForm',
    loadComponent: () => {
      return import("./components/configuration-form/configuration-form.component").then(m => m.ConfigurationFormComponent);
    }
  },

  {
    path: 'ticketCounter',
    loadComponent: () => {
      return import("./components/ticket-counter/ticket-counter.component").then(m => m.TicketCounterComponent);
    }
  },

  {
    path: 'customerDetails',
    loadComponent: ( )=>{
      return import("./components/customer-details/customer-details.component").then(m => m.CustomerDetailsComponent);
    }
  },

  {
    path: 'vendorDetails',
    loadComponent: ( )=>{
      return import("./components/vendor-details/vendor-details.component").then(m => m.VendorDetailsComponent);
    }
  }
];
