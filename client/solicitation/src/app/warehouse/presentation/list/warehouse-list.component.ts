import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil,  map } from 'rxjs/operators';

import { Solicitation } from 'src/app/requester/domain/models/solicitation';
import { WarehousePresenter } from '../../domain/boundaries/warehouse.presenter';

@Component({
  selector: 'flux-warehouse-list',
  templateUrl: './warehouse-list.component.html'
})
export class WarehouseListComponent implements OnInit, OnDestroy {
  
  requests: Solicitation[];
  destroyed$ = new Subject<void>();

  constructor(
    private presenter: WarehousePresenter) { }

  ngOnInit() {

    this.presenter.getRequests()
      .pipe(
        takeUntil(this.destroyed$),
        map((requests) => requests.filter(request => request.status === null))
      ).subscribe(requests => this.requests = requests);
  }

  ngOnDestroy() {
    this.destroyed$.complete();
    this.destroyed$.next();
  }

  update(request) {
    
    const index = this.requests.indexOf(request);

    if(index > -1) {
      this.requests.splice(index, 1);
    }
  }
}