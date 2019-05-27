import { NgModule } from '@angular/core';

import { AdministrativeDataModule } from './data/administrative-data.module';
import { AdministrativeDomainModule } from './domain/administrative-domain.module';
import { AdministrativePresentationModule } from './presentation/administrative.presentation.module';

/**
 * Clean architecture model.
 */
@NgModule({
  imports: [ 
    AdministrativeDataModule,
    AdministrativeDomainModule,
    AdministrativePresentationModule
  ]
})
export class AdministrativeModule { }