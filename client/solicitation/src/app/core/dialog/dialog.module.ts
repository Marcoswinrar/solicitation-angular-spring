import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DefaultDialogComponent } from './default-dialog/default-dialog.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogService } from './dialog.service';
import { DefaultDialogService } from './default-dialog.service';
import { MaterialUIModule } from '../material/material-ui.module';

@NgModule({
  imports: [
    MaterialUIModule,
    BrowserAnimationsModule
  ],
  declarations: [
    DefaultDialogComponent,
    InfoDialogComponent,
    ErrorDialogComponent,
    SuccessDialogComponent,
    ConfirmDialogComponent
  ],
  entryComponents: [
    DefaultDialogComponent,
    InfoDialogComponent,
    ErrorDialogComponent,
    SuccessDialogComponent,
    ConfirmDialogComponent
  ],
  providers: [
    {
      provide: DialogService,
      useClass: DefaultDialogService
    }
  ]
})
export class DialogModule { }
