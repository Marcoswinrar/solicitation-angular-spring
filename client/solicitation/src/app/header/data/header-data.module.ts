import { NgModule } from '@angular/core';

import { HeaderRepository } from './header.repository';
import { HeaderGateway } from '../domain/boundaries/header.gateway';
import { DefaultHeaderGateway } from './default-header.gateway';

@NgModule({
  providers: [ 
    HeaderRepository,
    {
      provide: HeaderGateway,
      useClass: DefaultHeaderGateway
    }
  ]
})
export class HeaderDataModule { }