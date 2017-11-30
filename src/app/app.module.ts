import { module } from 'angular';

import { CatalogModule } from './catalog/catalog.module';

import { AppComponent } from './app.component';

export const AppModule = module('app', [
  CatalogModule.name,
])
  .component('app', AppComponent)
;
