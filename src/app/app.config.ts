
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app.routes';
import { apiKeyInterceptor } from './core/interceptors/api-key.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient( 
      withInterceptors([
        apiKeyInterceptor
      ]
    )
  ),
    provideTranslateService({
      loader:provideTranslateHttpLoader({
        prefix: 'assets/i18n/',
        suffix: '.json'
      }),
      fallbackLang: 'en',
      lang: 'es',
    })
  ]
};
