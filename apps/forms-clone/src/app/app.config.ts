import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { API_URL } from '@unispace/http';
import { environment } from '../environments/environment';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { icons } from '@unispace/ui';
import { APPLICATION_NAME, CustomPreloadingStrategy } from '@unispace/utils';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { authInterceptor, AuthService, CookieJwtService, initAuthFactory } from '@unispace/auth/data-access';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([authInterceptor])),
    {
      provide: API_URL,
      useValue: environment.api_url
    },
    provideNzIcons(icons),
    {
      provide: APPLICATION_NAME,
      useValue: environment.app_name
    },
    {
      provide: CustomPreloadingStrategy,
      useClass: CustomPreloadingStrategy
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initAuthFactory,
      deps: [AuthService, CookieJwtService],
      multi: true
    },
    provideAnimationsAsync()
  ],
};
