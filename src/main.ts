import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Amplify from 'aws-amplify';
// import amplify from './aws-exports';
import { awsConfig } from './config_cognito';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';

Amplify.configure(awsConfig);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
