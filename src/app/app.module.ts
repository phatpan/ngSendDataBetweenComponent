import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalComponent } from './cal/cal.component';
import { FormsModule }   from '@angular/forms';
import { ActionCalComponent } from './action-cal/action-cal.component';

@NgModule({
  declarations: [
    AppComponent,
    CalComponent,
    ActionCalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
