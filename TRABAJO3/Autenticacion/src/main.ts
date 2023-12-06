import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//firebase
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {provideFirebaseApp, initializeApp} from '@angular/fire/app';
import {getStorage, provideStorage} from '@angular/fire/storage';

import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  EmailAuthProvider,
  getAuth,
  provideAuth
} from '@angular/fire/auth';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
