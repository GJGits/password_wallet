/**
 * Pensato come punto comodo per oggetti di estensione. Inserire qui solamente
 * classi ed interfacce pensate come estensione al framework e quindi non 
 * specifiche per l'applicazione
 */

 import {
    AbstractControl,
    AbstractControlOptions,
    AsyncValidatorFn,
    FormArray,
    FormBuilder,
    ValidatorFn
  } from "@angular/forms";
  
  export class DynamicFormArrayControl extends FormArray {
  
    constructor(controls: AbstractControl[], private fb: FormBuilder, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
      super(controls, validatorOrOpts, asyncValidator);
    }
  
    resize(value: any[]) {
      value.forEach((newValue, index) => {
        if (typeof newValue === 'object'){
          this.push(this.fb.group(newValue));
        } else if (Array.isArray(newValue)) {
          this.push(new DynamicFormArrayControl([], this.fb));
        } else {
          this.push(this.fb.control({}));
        }
      });
    }
    setValue(value: any[], options?: { onlySelf?: boolean; emitEvent?: boolean }) {
      this.resize(value);
      super.setValue(value, options);
    }
  }

