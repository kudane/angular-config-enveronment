import { Component, } from '@angular/core';
import { AppSettingService } from './app-setting-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(public config: AppSettingService) {
    console.log(config.read());
  }
}
