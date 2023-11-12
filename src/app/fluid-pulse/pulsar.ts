import {BehaviorSubject, OperatorFunction} from "rxjs";
import {Outlet} from "./outlet";
import {Keys} from "../utility/types";
import {Inlet} from "./inlet";

type DefaultKey = 'default'

type OptionalOutletPatten = Omit<{[key: string]: unknown}, 'default'>

type OptionalOutletConverter<I, O extends OptionalOutletPatten> = {[key in keyof O]: OperatorFunction<I, O[key]>}

type OptionalOutlets<O extends OptionalOutletPatten> = {[key in keyof O]: Outlet<O[keyof O]>};
type DefaultOutlets<T> = {[key in DefaultKey]: Outlet<T>};
type Outlets<T,  O extends OptionalOutletPatten> = OptionalOutlets<O> & DefaultOutlets<T>

export class Pulsar<T, O extends OptionalOutletPatten> {
  private readonly stateSubject: BehaviorSubject<T>;


  readonly outlets: Outlets<T, OptionalOutletPatten>
  readonly inlet: Inlet<T>;

  constructor(initialState: T, optionalOutletConverter: OptionalOutletConverter<T, O>, ) {
    this.stateSubject = new BehaviorSubject<T>(initialState);
    this.outlets = this.generateOutlets(optionalOutletConverter);
    this.inlet = new Inlet(this.stateSubject);
  }

  private generateOutlets(optionalConverter: OptionalOutletConverter<T, O>): Outlets<T, OptionalOutletPatten> {
    const defaultOutlet: DefaultOutlets<T> = {default: new Outlet(this.stateSubject)}

    const optionalKeys: Keys<O>[] = Object.keys(optionalConverter);
    const optionalOutletEntries = optionalKeys.map(key => {
      return {[key]: this.stateSubject.pipe(optionalConverter[key])};
    })

    const optionalOutlets: OptionalOutlets<O> = Object.assign({}, ...optionalOutletEntries)

    return  Object.assign({}, optionalOutlets, defaultOutlet);
  }
}
