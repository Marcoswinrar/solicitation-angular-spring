import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialUIModule } from 'src/app/core/material/material-ui.module';
import { WarehouseRouting } from './warehouse-routing.module';
import { WarehouseComponent } from './initial-page/warehouse.component';
import { WarehousePresenter } from '../domain/boundaries/warehouse.presenter';
import { DefaultWarehousePresenter } from './presenter/default-warehouse.presenter';
import { WarehouseListComponent } from './list/warehouse-list.component';
import { WarehouseFormComponent } from './form/warehouse-form.component';
import { FluxErrorComponent } from 'src/app/shared/components/error.component';
import { FluxErrorModule } from 'src/app/shared/components/flux-error.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialUIModule,
    WarehouseRouting,
    ReactiveFormsModule,
    FluxErrorModule
  ],
  declarations: [
    WarehouseComponent,
    WarehouseListComponent,
    WarehouseFormComponent,
  ],
  providers: [
    {
      provide: WarehousePresenter,
      useClass: DefaultWarehousePresenter
    }
  ]
})
export class WarehousePresentationModule { }