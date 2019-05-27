import { Component, Input } from '@angular/core';
import { Solicitation } from 'src/app/requester/domain/models/solicitation';

@Component({
  selector: 'flux-requests-card',
  templateUrl: './requests-card.component.html',
  styleUrls: ['./requests-card.component.scss']
})
export class RequestsCardComponent {

  @Input() request: Solicitation;

}