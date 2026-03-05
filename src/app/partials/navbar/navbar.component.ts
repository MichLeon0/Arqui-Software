import { Component,  Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
   @Output() toggleSidebar = new EventEmitter<void>();

  title = '';
  subtitle?: string;
  action?: string;

  constructor
  (
    private router: Router, private route: ActivatedRoute,
    private modalService: ModalService
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        let current = this.route.firstChild;
        while (current?.firstChild) {
          current = current.firstChild;
        }

        this.title = current?.snapshot.data['title'] || '';
        this.subtitle = current?.snapshot.data['subtitle'];
        this.action = current?.snapshot.data['action'];
      });
  }

  onToggle() {
    this.toggleSidebar.emit();
  }

  onAction() {
    this.router.navigate(['/agregar-proyecto']);
  }

  abrirAgregarProyecto() {
    this.modalService.openAgregar();
  }

}
