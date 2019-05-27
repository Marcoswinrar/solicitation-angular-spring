import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialUIModule } from 'src/app/core/material/material-ui.module';
import { RequesterComponent } from './initial-page/requester.component';
import { RequesterRouting } from './requester-routing.module';
import { RequesterPresenter } from '../domain/boundaries/requester.presenter';
import { DefaultRequesterPresenter } from './presenter/default-requester.presenter';
import { RequestsComponent } from './requests/requests.component';
import { RequestsNewComponent } from './new/requests-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestsCardComponent } from './requests/card/requests-card.component';
import { FluxErrorModule } from 'src/app/shared/components/flux-error.module';
import { RequestStatusPipeModule } from 'src/app/shared/pipes/request-status-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialUIModule,
    RequesterRouting,
    ReactiveFormsModule,
    FluxErrorModule,
    RequestStatusPipeModule
  ],
  declarations: [
    RequesterComponent,
    RequestsComponent,
    RequestsNewComponent,
    RequestsCardComponent
  ],
  providers: [
    {
      provide: RequesterPresenter,
      useClass: DefaultRequesterPresenter
    }
  ]
})
export class RequesterPresentationModule { }