import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { WarehouseRepository } from './warehouse.repository';
import { WarehouseGateway } from '../domain/boundaries/warehouse.gateway';
import { DefaultWarehouseGateway } from './default-warehouse.gateway';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    WarehouseRepository,
    {
      provide: WarehouseGateway,
      useClass: DefaultWarehouseGateway
    }
  ]
})
export class WarehouseDataModule { }