import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { throwError, Subject } from 'rxjs';
import { tap, catchError, exhaustMap, takeUntil } from 'rxjs/operators';

import { RequesterPresenter } from '../../domain/boundaries/requester.presenter';
import { ActionService } from 'src/app/core/action/action.service';

@Component({
  templateUrl: './requests-new.component.html',
  styleUrls: ['./requests-new.component.scss']
})
export class RequestsNewComponent implements OnInit, OnDestroy {

  requestForm: FormGroup;
  destroyed = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private presenter: RequesterPresenter,
    private action: ActionService,
    private router: Router
  ) { }

  ngOnInit() {

    this.requestForm = this.formBuilder.group({

      requesterName: ['', Validators.required],
      price: ['', Validators.required],
      itemDescription: ['', Validators.required]

    });
  }

  request() {

    const request = this.requestForm.value;

    const waitConfirm$ = this.action
      .beforeDoing('Deseja mesmo solicitar este item?', 'Solicitação')
      .componentInstance.onOkClick;

    const createRequest$ = this.presenter.createRequest(request)
      .pipe(
        tap(() => {
          this.action.onSuccess('Solicitação realizada com sucesso!');
          this.router.navigate(['solicitante']);
        }),
        catchError(err => {
          this.action.onError(err);
          return throwError(err);
        })
      );

    return waitConfirm$
      .pipe(exhaustMap(() => createRequest$))
      .pipe(takeUntil(this.destroyed)).subscribe();
  }

  ngOnDestroy() {
    this.destroyed.complete();
    this.destroyed.next();
  }

}