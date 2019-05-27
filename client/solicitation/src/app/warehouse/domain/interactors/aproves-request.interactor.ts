import { Injectable } from '@angular/core';

import { WarehouseGateway } from '../boundaries/warehouse.gateway';
import { Solicitation } from 'src/app/requester/domain/models/solicitation';

@Injectable()
export class AprovesRequestInteractor {

  constructor(private gateway: WarehouseGateway) { }

  aprovesRequest(id:number, request: Solicitation) {
    return this.gateway.aprovesRequest(id, request);
  }
}