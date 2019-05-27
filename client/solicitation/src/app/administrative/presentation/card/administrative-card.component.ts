import { Component, Input } from '@angular/core';

import { Solicitation } from 'src/app/requester/domain/models/solicitation';

@Component({
  selector: 'flux-administrative-card',
  templateUrl: './administrative-card.component.html'
})
export class AdministrativeCardComponent { 

  @Input() request: Solicitation;

}