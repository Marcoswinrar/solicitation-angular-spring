import { NgModule } from '@angular/core';

import { WarehouseDataModule } from './data/warehouse-data.module';
import { WarehouseDomainModule } from './domain/warehouse-domain.module';
import { WarehousePresentationModule } from './presentation/warehouse-presentation.module';

/**
 * Clean architecuture model.
 */
@NgModule({
  imports: [
    WarehouseDataModule,
    WarehouseDomainModule,
    WarehousePresentationModule
  ]
})
export class WarehouseModule { }