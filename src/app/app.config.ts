import { ApplicationConfig } from '@angular/core';
import { provideRouter, Route } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MainPageComponent } from './main-page/main-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PlaygroundComponent } from './playground/playground.component';

const routes: Route[] = [
  { path: '', component: MainPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'playground', component: PlaygroundComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideAnimationsAsync()
  ]
};
