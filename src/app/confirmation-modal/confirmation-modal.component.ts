import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  modalInstance: NgbModalRef;  //added ngmodalref
  constructor() { }

  ngOnInit() {
  }
  yes(){
    this.modalInstance.close("yes");
 }

}
