import { AbstractControl, ValidationErrors } from "@angular/forms";

export function phoneNumberValidator(reg: RegExp) {

  return (control: AbstractControl): ValidationErrors | null => {

    const forbidden = reg.test(control.value);

    return forbidden ? null : { senegalPhone: { value: control.value } };
  };
}