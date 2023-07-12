import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppSettingService, appInitializerCallback } from './app-setting-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AppSettingService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerCallback,
      multi: true,
      deps: [AppSettingService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
