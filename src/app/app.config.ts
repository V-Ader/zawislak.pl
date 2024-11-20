import { ApplicationConfig } from '@angular/core';
import { provideRouter, Route } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ContactComponent } from './contact/contact.component';

const routes: Route[] = [
  { path: '', component: MainMenuComponent },
  { path: 'contact', component: ContactComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
