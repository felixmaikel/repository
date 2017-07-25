import { Router, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FailsComponent } from './components/fails/fails.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';

const appRouter = [
    {path: 'login', component: LoginComponent},
    {path: 'fails/:page', component: FailsComponent},
    {path: 'controlPanel', component: ControlPanelComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRouter);