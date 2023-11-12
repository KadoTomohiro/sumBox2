import { Injectable } from '@angular/core';
import {Pulsar} from "../fluid-pulse/pulsar";
import {Stock} from "../controls/stock/stock";
import {SumBoxQueryParameter} from "../sum-box/sum-box-query-parameter";

@Injectable({
  providedIn: 'root'
})
export class PulseControllerService {

  constructor() {
    const query = new Pulsar<SumBoxQueryParameter, {}>({}, {});
    const stock = new Pulsar<Stock[], {}>([], {});

  }
}
