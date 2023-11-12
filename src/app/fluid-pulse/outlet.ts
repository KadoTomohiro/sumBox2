import {
  Observable,
  take,
  tap,
} from "rxjs";

export class Outlet<T>{

  private _snapshotCash?: T;

  readonly stream: Observable<T>;

  get snapshot(): T {
    if (this._snapshotCash === undefined) {
      throw new Error('This stream do not yet fluid pulse')
    }
    return this._snapshotCash
  }

  get oneTimeStream(): Observable<T> {
    return this.stream.pipe(
      take(1)
    )
  }

  constructor(source: Observable<T>) {
    this.stream = source.pipe(
      tap(value => this._snapshotCash = value)
    );
  }
}
