import { AbstractControl, ValidatorFn } from '@angular/forms';

export default class Validation {
  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);
      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }
      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }

  static dobCheck(controlName: string){
      return (controls: AbstractControl) => {
        const control = controls.get(controlName);

        var timeDiff = Math.abs(Date.now() - new Date(control?.value).getTime()) ;
        
        if (control?.errors && !control.errors['dobChecking']) {
            return null;
        }

        if(timeDiff < 1000*18*365*24*3600){
            controls.get(controlName)?.setErrors({ dobChecking: true});
            return {dobChecking: true}

            
        } else{
            return null ;
        }
      };
  }
}