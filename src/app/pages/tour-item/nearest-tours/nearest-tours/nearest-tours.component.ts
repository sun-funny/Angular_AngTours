import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ITour } from '../../../../models/tours';

@Component({
  selector: 'app-nearest-tours',
  imports: [],
  templateUrl: './nearest-tours.component.html',
  styleUrl: './nearest-tours.component.scss'
})
export class NearestToursComponent implements OnInit, OnChanges {
  @Input()
  tourNearest: ITour = null;

  ngOnInit(): void {
    console.log('tourNearest', this.tourNearest);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changs', changes);

  }
}
