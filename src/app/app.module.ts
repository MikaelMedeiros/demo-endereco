import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AppRoutingModule,
    SharedModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
