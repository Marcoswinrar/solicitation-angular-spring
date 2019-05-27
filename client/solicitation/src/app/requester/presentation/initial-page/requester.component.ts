import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Menu } from 'src/app/shared/models/menu';
import { RequesterPresenter } from '../../domain/boundaries/requester.presenter';

@Component({
  selector: 'flux-requester',
  templateUrl: './requester.component.html'
})
export class RequesterComponent implements OnInit {

  menus$: Observable<Menu[]>;

  constructor(private presenter: RequesterPresenter) { }

  ngOnInit() {
    this.menus$ = this.presenter.getMenus();
  }

}