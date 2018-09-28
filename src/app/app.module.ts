import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BloodDataComponent } from './blood-data/blood-data.component';
import { FormsModule } from '@angular/forms';
import { ReceiverComponent } from './blood-data/receiver/receiver.component';
@NgModule({
  declarations: [
    AppComponent,
    BloodDataComponent,
    ReceiverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
