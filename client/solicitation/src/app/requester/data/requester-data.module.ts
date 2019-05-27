import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RequesterGateway } from '../domain/boundaries/requester.gateway';
import { DefaultRequesterGateway } from './default-requester.gateway';
import { RequesterRepository } from './requester.repository';

@NgModule({
  imports: [ HttpClientModule ],
  providers: [
    RequesterRepository,
    {
      provide: RequesterGateway,
      useClass: DefaultRequesterGateway
    }
  ]
})
export class RequesterDataModule { }
