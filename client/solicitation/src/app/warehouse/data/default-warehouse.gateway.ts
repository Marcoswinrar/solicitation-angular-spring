import { Injectable } from '@angular/core';

import { WarehouseGateway } from '../domain/boundaries/warehouse.gateway';
import { WarehouseRepository } from './warehouse.repository';
import { Solicitation } from 'src/app/requester/domain/models/solicitation';

@Injectable()
export class DefaultWarehouseGateway implements WarehouseGateway {

  constructor(private repository: WarehouseRepository) { }

  getRequests() {
    return this.repository.getRequests();
  }

  aprovesRequest(id: number, request: Solicitation) {
    return this.repository.aprovesRequest(id, request);
  }

}