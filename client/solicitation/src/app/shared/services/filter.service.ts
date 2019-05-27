import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {

  /**
   * Need best logic...
   * @param arr arr to be filtered
   * @param filters object of filters..
   */
  filter(arr: any, filters: Object): any {

    const filterKeys = Object.keys(filters);
    return arr.filter(eachObj => {
      return filterKeys.every(eachKey => {
        if (!filters[eachKey].length) {
          return true;
        }
        return filters[eachKey].includes(eachObj[eachKey]);
      });
    });

  }

}