
import { BarcodeFormat } from '@zxing/library';


import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { BarcodeScannerLivestreamComponent } from "ngx-barcode-scanner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner: BarcodeScannerLivestreamComponent;
  barkodDeger="";

  ngAfterViewInit() {
    this.barcodeScanner.start();
  }
 
  onValueChanges(result) {
    this.barkodDeger=result.codeResult.code;
   
  }
 

}