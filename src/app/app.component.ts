import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalContent} from './modal-component/modal.component';

@Component({
   selector: 'app-root',
    moduleId: `${module.id}`,
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'Super Spice Traders';
  constructor ( 
      private modalService: NgbModal
  ) {}
  ngOnInit(): void {
  }
  openModal(): void {
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.name = 'World';
  }
}
