import { NgModule } from '@angular/core';

import { RequestStatusPipe } from './request-status.pipe';

@NgModule({
  declarations: [RequestStatusPipe],
  exports: [RequestStatusPipe]
})
export class RequestStatusPipeModule { }