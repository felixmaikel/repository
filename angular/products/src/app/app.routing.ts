import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListMasterComponent } from './master-details/list-master.component';

const appRouters = [
    {path: 'products', component: ListMasterComponent},
    {path: '', redirectTo: 'products', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRouters);