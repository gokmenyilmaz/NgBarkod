import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeScannerLivestreamModule } from "ngx-barcode-scanner";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ZXingScannerModule,
    BarcodeScannerLivestreamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
