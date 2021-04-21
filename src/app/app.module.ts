import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LoginComponent } from './login/login.component';


registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [	
    AppComponent,
    LoginComponent
   ],
  imports: [    
    BrowserModule,   
    BrowserAnimationsModule, 
    AppRoutingModule,
    SharedModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
