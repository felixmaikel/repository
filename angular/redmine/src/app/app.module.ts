import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TranslateService } from './translate/translate.service';
import { TRANSLATIONS_PROVIDERS } from './translate/translations';
import { TranslatePipe } from './translate/translate.pipe';
import { MenuBarComponent } from './components/menu-bar/menuBar.component';
import { routing } from './app.routing';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { FailsComponent } from './components/fails/fails.component';
import { MenuService } from './services/menu.service';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { LoginObservable } from './observables/loginObservable';
import { PersonService } from './services/person.service';
import { UserInformationModal } from './components/modals/user-data/user-data.component';

@NgModule({
  declarations: [
    AppComponent, TranslatePipe, MenuBarComponent, LoginComponent, FailsComponent, ControlPanelComponent, UserInformationModal
  ],
  entryComponents:[UserInformationModal],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [TranslateService, TRANSLATIONS_PROVIDERS, AuthenticationService, MenuService, LoginObservable, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
