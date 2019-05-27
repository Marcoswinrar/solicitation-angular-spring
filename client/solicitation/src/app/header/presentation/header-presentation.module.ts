import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MaterialUIModule } from 'src/app/core/material/material-ui.module';
import { HeaderComponent } from './header/header.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderPresenter } from '../domain/boundaries/header.presenter';
import { DefaultHeaderPresenter } from './presenter/default-header.presenter';

@NgModule({
  imports: [
    CommonModule,
    MaterialUIModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    HeaderNavComponent
  ],
  exports: [HeaderComponent],
  providers: [
    {
      provide: HeaderPresenter,
      useClass: DefaultHeaderPresenter
    }
  ]
})
export class HeaderPresentationModule { }