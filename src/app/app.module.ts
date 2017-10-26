import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Tabset } from './tabset.component';
import { Menu } from './menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    Menu,
    Tabset
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, NgbModule.forRoot(),  AngularFontAwesomeModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent, Tabset]
})

export class AppModule { }
