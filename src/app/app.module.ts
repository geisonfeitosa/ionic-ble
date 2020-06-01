import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OpenService } from './services/open.service';
import { HttpClientModule } from '@angular/common/http';
import { BLE } from '@ionic-native/ble/ngx';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    BLE,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    OpenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}