import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as Mat from '@angular/material';

@NgModule({
  exports: [ 
    FlexLayoutModule, Mat.MatToolbarModule, Mat.MatTabsModule,
    Mat.MatInputModule, Mat.MatFormFieldModule, Mat.MatCardModule,
    Mat.MatButtonModule, Mat.MatDialogModule, Mat.MatIconModule, Mat.MatChipsModule,
    Mat.MatOptionModule, Mat.MatSelectModule
  ]
})
export class MaterialUIModule { }
