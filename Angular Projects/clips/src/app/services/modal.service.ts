import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  visible = false;

  constructor() { }

  isModalOpen() {
    return this.visible
  }

  toggelModal() {
    this.visible = !this.visible
  }

}
