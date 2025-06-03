import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appRouterProviders } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http'; // ✅ Importa esto

bootstrapApplication(AppComponent, {
  providers: [
    appRouterProviders,
    provideHttpClient() // ✅ Agrega esto
  ]
});