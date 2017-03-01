import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroListComponent } from './herolist/hero-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

const appRouter = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'heroes', component: HeroListComponent},
    {path: 'heroes/:id', component: HeroDetailsComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRouter);