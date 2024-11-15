import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``,
})
export class LayoutPageComponent {
  sideBarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ];

  constructor(private AuthService: AuthService, private router: Router) {}

  get user(): User | undefined {
    return this.AuthService.currentUser;
  }

  onLogout(): void {
    this.AuthService.logout();
    this.router.navigate(['/auth/login']);
  }
}
