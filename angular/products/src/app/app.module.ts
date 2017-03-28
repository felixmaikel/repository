import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { routing } from './app.routing';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ListMasterComponent } from './master-details/list-master.component';
import { ProductListService } from './services/product-list.service';
import { MessageBoxComponent } from './dialogs/messagebox/message-box.component';
import { ConfirmModalComponent } from './dialogs/confirmmodal/confirm-modal.component';
import { ListModalComponent } from './dialogs/productmodal/product-modal.component';
import { DetailProductComponent } from './detailproduct/details-product.component';

//Testing
import { HttpServiceMock } from './services/mocks/HttpServiceMock';

@NgModule({
  declarations: [
    AppComponent,
    ListMasterComponent,
    MessageBoxComponent,
    ConfirmModalComponent,
    ListModalComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModalModule.forRoot()
  ],
  providers: [ProductListService,{provide: Http, useClass: HttpServiceMock}],
  bootstrap: [AppComponent]
})
export class AppModule { }
