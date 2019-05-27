import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit, OnDestroy, Output, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { throwError, Subject } from 'rxjs';
import { tap, catchError, exhaustMap, takeUntil } from 'rxjs/operators';

import { Solicitation } from 'src/app/requester/domain/models/solicitation';
import { WarehousePresenter } from '../../domain/boundaries/warehouse.presenter';
import { ActionService } from 'src/app/core/action/action.service';

@Component({
  selector: 'flux-warehouse-form',
  templateUrl: './warehouse-form.component.html'
})
export class WarehouseFormComponent implements OnInit, OnDestroy, AfterViewChecked {

  @Input() request: Solicitation;
  @Output() itemDeleted = new EventEmitter();

  warehouseForm: FormGroup;
  destroyed$ = new Subject<void>();

  constructor(
    private presenter: WarehousePresenter,
    private formBuilder: FormBuilder,
    private action: ActionService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {

    this.warehouseForm = this.formBuilder.group({
      status: ['', Validators.required],
      observation: ['']
    });
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  finalize() {
    const request = this.warehouseForm.value;

    const waitConfirm$ = this.action
      .beforeDoing('Deseja finalizar essa solicitação ?', 'Finalizar')
      .componentInstance.onOkClick;

    const finalizeRequest$ = this.presenter.aprovesRequest(this.request.id, request)
      .pipe(tap(() => {
        this.action.onSuccess('Requisição finalizada com sucesso!');
        this.itemDeleted.emit(this.request);
      }),
        catchError(err => {
          return throwError(err);
        })
      );
    return waitConfirm$
    .pipe(exhaustMap(() => finalizeRequest$))
    .pipe(takeUntil(this.destroyed$)).subscribe();
  }

  ngOnDestroy() {
    this.destroyed$.complete();
    this.destroyed$.next();
  }
}