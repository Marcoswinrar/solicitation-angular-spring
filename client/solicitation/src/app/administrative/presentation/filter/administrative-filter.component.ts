import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'flux-administrative-filter',
  templateUrl: './administrative-filter.component.html'
})
export class AdministrativeFilterComponent implements OnInit {

  @Output() propsToFilter = new EventEmitter();
  filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.filterForm = this.formBuilder.group({
      requesterName: '',
      status: '',
      itemDescription: ''
    })
  }

  filter() {
    const filters = this.filterForm.value;
    this.propsToFilter.emit(filters);
  }

  clearFilters() {
    this.filterForm.reset();
  }
}