import { Directive, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Directive({
  selector: '[appSignWithGoogle]',
})
export class SignWithGoogleDirective {
  @HostListener('click', ['$event'])
  clickHandle(e: MouseEvent) {
    e.preventDefault();

    this.authService.loginGoogle();
  }
  constructor(private authService: AuthService) {}
}
