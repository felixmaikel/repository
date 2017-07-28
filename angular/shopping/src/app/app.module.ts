import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateService } from './services/translate.service';
import { TranslatePipe } from './languages/translator.pipe';
import { TRANSLATION_PROVIDERS } from './languages/languages';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, TranslatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TranslateService, TRANSLATION_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
