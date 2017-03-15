import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ListMasterComponent } from './master-details/list-master.component';
import { ProductListService } from './services/product-list.service';
import { MessageBoxComponent } from './dialogs/messagebox/message-box.component';
import { MessageBoxDirective } from './dialogs/messagebox/message-box.directive';

//Testing
import { HttpServiceMock } from './services/mocks/HttpServiceMock';

@NgModule({
  declarations: [
    AppComponent,
    ListMasterComponent,
    MessageBoxComponent,
    MessageBoxDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ProductListService,{provide: Http, useClass: HttpServiceMock}],
  bootstrap: [AppComponent]
})
export class AppModule { }
