import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';

import { Solicitation } from '../../domain/models/solicitation';
import { RequesterPresenter } from '../../domain/boundaries/requester.presenter';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'flux-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit, OnDestroy {

  requests: Solicitation[];
  destroyed = new Subject<void>();
  msg = 'Não há solicitações até o momento!';

  constructor(private presenter: RequesterPresenter) { }

  ngOnInit() {
    this.presenter.getRequests()
      .pipe(takeUntil(this.destroyed))
      .subscribe(requests => this.requests = requests);
  }

  ngOnDestroy() {
    this.destroyed.complete();
    this.destroyed.next();
  }

}