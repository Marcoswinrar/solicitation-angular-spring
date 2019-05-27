import { Input, Component } from '@angular/core';

@Component({
  selector: 'flux-erro-component',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class FluxErrorComponent { 

  @Input() msg: string;

}