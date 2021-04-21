import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SahredModule } from './shared/sahred/sahred.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SahredModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
