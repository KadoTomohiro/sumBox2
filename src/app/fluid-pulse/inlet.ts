import {Observable, Observer, Subscription} from "rxjs";

export class Inlet<T> {
  private static  noop = () => {};

  private subscriptions: { [key: symbol]: Subscription } = {};

  constructor(private target: Observer<T>) {}

  connect(
    source: Observable<T>,
    connectOption: {[key in keyof Observer<T>]: boolean} = {next: true, error: false, complete: false},
    handler: Partial<Observer<T>> = {}
  ): symbol {
    const observer: Partial<Observer<T>> = {
      next: connectOption.next ? this.target.next : handler.next ? handler.next : Inlet.noop,
      error: connectOption.error ? this.target.error : handler.error ? handler.error : Inlet.noop,
      complete: connectOption.complete ? this.target.complete : handler.complete ? handler.complete : Inlet.noop
    }
    const inletObserver = Object.assign({}, this.target, handler)
    const subscription = source.subscribe(inletObserver);
    const subscriptionId = Symbol('subscription');
    this.subscriptions[subscriptionId] = subscription;
    return subscriptionId;
  }

  reject(subscriptionId: symbol) {
    this.subscriptions[subscriptionId].unsubscribe();
    delete this.subscriptions[subscriptionId];
  }

}
