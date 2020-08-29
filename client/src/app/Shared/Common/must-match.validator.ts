import { AbstractControl } from '@angular/forms';

export class PasswordValidation {
  static MatchPassword(abstractControl: AbstractControl): AbstractControl {
    const password = abstractControl.get('password').value;
    if (abstractControl.get('confirmPassword').touched || abstractControl.get('confirmPassword').dirty)
    {
      const verifyPassword = abstractControl.get('confirmPassword').value;

      if (password !== verifyPassword)
      {
        abstractControl.get('confirmPassword').setErrors({ MatchPassword: true });
      } else
      {
        return null;
      }
    }
  }
}
