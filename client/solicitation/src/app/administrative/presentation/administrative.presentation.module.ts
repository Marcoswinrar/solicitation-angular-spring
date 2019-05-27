import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialUIModule } from 'src/app/core/material/material-ui.module';
import { AdministrativeRouting } from './administrative-routing.module';
import { AdministrativeComponent } from './initial-page/administrative.component';
import { AdministrativeListComponent } from './list/administrative-list.component';
import { AdministrativePresenter } from '../domain/boundaries/administrative.presenter';
import { DefaultAdministrativePresenter } from './presenter/default-administrative.presenter';
import { FilterService } from 'src/app/shared/services/filter.service';
import { AdministrativeFilterComponent } from './filter/administrative-filter.component';
import { AdministrativeCardComponent } from './card/administrative-card.component';
import { RequestStatusPipeModule } from 'src/app/shared/pipes/request-status-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialUIModule,
    AdministrativeRouting,
    ReactiveFormsModule,
    RequestStatusPipeModule
  ],
  declarations: [
    AdministrativeComponent,
    AdministrativeListComponent,
    AdministrativeFilterComponent,
    AdministrativeCardComponent
  ],
  providers: [
    FilterService,
    {
      provide: AdministrativePresenter,
      useClass: DefaultAdministrativePresenter
    }
  ]
})
export class AdministrativePresentationModule { }