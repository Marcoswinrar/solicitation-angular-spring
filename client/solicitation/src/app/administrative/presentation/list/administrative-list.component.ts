import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Solicitation } from 'src/app/requester/domain/models/solicitation';
import { AdministrativePresenter } from '../../domain/boundaries/administrative.presenter';
import { FilterService } from 'src/app/shared/services/filter.service';

@Component({
  selector: 'flux-administrative-list',
  templateUrl: './administrative-list.component.html'
})
export class AdministrativeListComponent implements OnInit, OnDestroy {

  requests: Solicitation[];
  destroyed$ = new Subject<void>();

  constructor(
    private presenter: AdministrativePresenter,
    private filter: FilterService
  ) { }

  ngOnInit() {
    this.presenter.getRequests()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(requests => this.requests = requests);
  }


  filterList(filters) {
    this.requests = this.filter.filter(this.requests, filters);
  }

  ngOnDestroy() {
    this.destroyed$.complete();
    this.destroyed$.next();
  }
}