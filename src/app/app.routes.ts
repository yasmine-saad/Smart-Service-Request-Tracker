import { Routes } from '@angular/router';
import { RequestServiceComponent } from './components/request-service/request-service.component';
import { RequestFollowUpComponent } from './components/request-follow-up/request-follow-up.component';

export const appRoutes: Routes = [
  { path: '', component: RequestServiceComponent },
  { path: 'follow-up', component: RequestFollowUpComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

