import {FormControl} from '@angular/forms';

export type FormType<T extends { [key: string]: any }> = {
  [key in keyof T]: FormControl<T[key]>
}
