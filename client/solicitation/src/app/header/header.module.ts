import { NgModule } from '@angular/core';

import { HeaderPresentationModule } from './presentation/header-presentation.module';
import { HeaderDataModule } from './data/header-data.module';
import { HeaderDomainModule } from './domain/header-domain.module';

/**
 * Clean architecture model. 
 */
@NgModule({
  exports: [
    HeaderDataModule,
    HeaderDomainModule,
    HeaderPresentationModule
  ]
})
export class HeaderModule { }
