import { ModalComponent } from './modal/modal.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-searh-results',
  templateUrl: './searh-results.component.html',
  styleUrls: ['./searh-results.component.scss'],
})
export class SearhResultsComponent implements OnInit {
  dummyData = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openPopup = () => {
    this.modalService.open(ModalComponent, { centered: true, size: 'lg' });
  };
}
