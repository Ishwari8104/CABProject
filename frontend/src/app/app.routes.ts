import { Routes } from '@angular/router';
import { HelloPageComponent } from './hello-page/hello-page';
export const routes: Routes = [
     { path: 'hello', component: HelloPageComponent },
  { path: '', redirectTo: 'hello', pathMatch: 'full' } // default route
];
