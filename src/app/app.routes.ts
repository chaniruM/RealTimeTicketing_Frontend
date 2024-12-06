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
    path: 'login',
    loadComponent: () => {
      return import("./components/login/login.component").then(m => m.LoginComponent);
    },
  },
  {
    path: 'configurationForm',
    loadComponent: () => {
      return import("./components/configuration-form/configuration-form.component").then(m => m.ConfigurationFormComponent);
    }

  },
  {
    path: 'customerVendorConfig',
    loadComponent: () => {
      return import("./components/customer-vendor-config/customer-vendor-config.component").then(m => m.CustomerVendorConfigComponent);
    },
  },
  {
    path: 'ticketCounter',
    loadComponent: () => {
      return import("./components/ticket-counter/ticket-counter.component").then(m => m.TicketCounterComponent);
    }
  },
  {
    path: 'register',
    loadComponent: () => {
      return import("./components/register/register.component").then(m => m.RegisterComponent);
    }
  },
  {
    path: 'purchaseTicket',
    loadComponent: () => {
      return import("./components/purchase-ticket/purchase-ticket.component").then(m => m.PurchaseTicketComponent);
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
