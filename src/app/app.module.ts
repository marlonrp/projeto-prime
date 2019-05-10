import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { SpinnerModule } from 'primeng/spinner';
import { CalendarModule } from 'primeng/calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormComponent } from './main/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TabViewModule,
    PanelModule,
    InputTextModule,
    SpinnerModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
