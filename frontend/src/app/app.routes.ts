import { Routes } from '@angular/router';
import { HelloPageComponent } from './hello-page/hello-page';
import { Login } from './login/login';
export const routes: Routes = [
     { path: 'hello', component: HelloPageComponent },
     { path: 'login', component: Login },
];
