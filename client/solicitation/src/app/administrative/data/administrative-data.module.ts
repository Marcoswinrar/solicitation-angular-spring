import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AdministrativeGateway } from '../domain/boundaries/administrative.gateway';
import { DefaultAdministrativeGateway } from './default-administrative.gateway';
import { AdministrativeRepository } from './administrative.repository';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    AdministrativeRepository,
    {
      provide: AdministrativeGateway,
      useClass: DefaultAdministrativeGateway
    }
  ]
})
export class AdministrativeDataModule { }