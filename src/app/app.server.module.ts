import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    BrowserModule.withServerTransition({ appId: 'angular-inspiration' }),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
