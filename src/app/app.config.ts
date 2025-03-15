import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'
import { routes } from './app.routes'
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { provideHttpCache, withHttpCacheInterceptor } from '@ngneat/cashew'
import { DsfrButtonModule } from '@edugouvfr/ngx-dsfr'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    // see https://github.com/ngneat/cashew
    provideHttpClient(withInterceptors([withHttpCacheInterceptor()])),
    provideHttpCache({ ttl: 30000 }),
    // see https://foad.phm.education.gouv.fr/edugouvfr/ngx-dsfr/1-13-3/?path=/docs/introduction-readme--docs&globals=theme:light
    DsfrButtonModule,
  ],
}
