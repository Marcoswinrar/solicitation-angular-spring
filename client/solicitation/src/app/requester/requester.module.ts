import { NgModule } from '@angular/core';

import { RequesterDataModule } from './data/requester-data.module';
import { RequesterDomainModule } from './domain/requester-domain.module';
import { RequesterPresentationModule } from './presentation/requester-presentation.module';
import { AppRoutingModule } from '../app-routing.module';

/**
 * Clean architecture model.
 */
@NgModule({
  imports: [
    RequesterDataModule,
    RequesterDomainModule,
    RequesterPresentationModule
  ]
})
export class RequesterModule { }