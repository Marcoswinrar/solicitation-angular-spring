import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'requestStatus'
})
export class RequestStatusPipe implements PipeTransform {

  transform(status: boolean) {
    
    let transformedStatus = 'Aguardando aprovação';

    if(status === true) {
      transformedStatus = 'Aprovado';
    } else if (status === false) {
      transformedStatus = 'Reprovado';
    }
    return transformedStatus;
  }
}