import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from '../pages/home/home.component';
import { AuthGuard } from '../guards/auth.guard';

const appRoutes: Routes = [
    { path: '', component: HomePageComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);