import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const appInitializerCallback = (service: AppSettingService) => {
  return () => {
    return service.load();
  };
};

@Injectable()
export class AppSettingService {

  private configuration: any;

  constructor(
    private httpClient: HttpClient
  ) { }

  load(): Promise<any> {
    return this.httpClient
      .get<any>('./config/app-setting.json')
      .toPromise()
      .then(config => this.configuration = config);
  }

  read(): any {
    return this.configuration;
  }
}
