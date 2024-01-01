import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AuthenComponent } from './pages/authen/authen.component'

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'authen', component: AuthenComponent },
];
