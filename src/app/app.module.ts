import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { ResuableButtonsComponent } from './components/resuable-buttons/resuable-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResuableButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
