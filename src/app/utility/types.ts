import {FormControl} from '@angular/forms';

export type FormType<T extends { [key: string]: unknown }> = {
  [key in keyof T]: FormControl<T[key]>
}

export type Keys<T extends {[key: string]: unknown}> = keyof T
