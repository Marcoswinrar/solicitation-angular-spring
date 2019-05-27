import { NgModule } from '@angular/core';

import { FluxErrorComponent } from './error.component';
import { MaterialUIModule } from 'src/app/core/material/material-ui.module';

@NgModule({
  imports: [ MaterialUIModule ],
  declarations: [FluxErrorComponent],
  exports: [FluxErrorComponent]
})
export class FluxErrorModule { }