import { module } from 'angular';

import { CatalogComponent } from './catalog.component';

export const CatalogModule = module('app.catalog', [])
  .component('catalog', CatalogComponent)
;
