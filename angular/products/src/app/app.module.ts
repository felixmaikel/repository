import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { routing } from './app.routing';
import { NgbModule, NgbModalModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ListMasterComponent } from './master-details/list-master.component';
import { ProductListService } from './services/product-list.service';
import { MessageBoxComponent } from './dialogs/messagebox/message-box.component';
import { ConfirmModalComponent } from './dialogs/confirmmodal/confirm-modal.component';
import { ListModalComponent } from './dialogs/productmodal/product-modal.component';
import { DetailProductComponent } from './detailproduct/details-product.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

//Testing
import { HttpServiceMock } from './services/mocks/HttpServiceMock';

@NgModule({
  declarations: [
    AppComponent,
    ListMasterComponent,
    MessageBoxComponent,
    ConfirmModalComponent,
    ListModalComponent,
    DetailProductComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
    NgbModalModule.forRoot()
  ],
  providers: [ProductListService, NgbModal,{provide: Http, useClass: HttpServiceMock}],
  entryComponents: [DetailProductComponent, MessageBoxComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
