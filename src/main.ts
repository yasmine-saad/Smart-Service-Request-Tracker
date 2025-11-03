


  // src/main.ts
  import { bootstrapApplication } from '@angular/platform-browser';
  import { AppComponent } from './app/app.component';
  import { provideRouter } from '@angular/router';
  import { appRoutes } from './app/app.routes';
  import * as L from 'leaflet';

  // Fix Leaflet default icon path issue
  delete (L.Icon.Default.prototype as any)._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'assets/marker-icon-2x.png',
    iconUrl: 'assets/marker-icon.png',
    shadowUrl: 'assets/marker-shadow.png'
  });

  bootstrapApplication(AppComponent, {
    providers: [provideRouter(appRoutes)]
  }).catch(err => console.error(err));

