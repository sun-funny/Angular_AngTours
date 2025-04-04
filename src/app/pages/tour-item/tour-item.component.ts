import { Component, OnInit } from '@angular/core';
import { ToursService } from '../../services/tours.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule, NgIf } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ITour } from '../../models/tours';

@Component({
  selector: 'app-tour-item',
  imports: [ButtonModule, CommonModule, NgIf, CardModule, RouterLink],
  templateUrl: './tour-item.component.html',
  styleUrl: './tour-item.component.scss'
})
export class TourItemComponent implements OnInit {
  tourId: string = null;
  tour: ITour;
  constructor(private tourService: ToursService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tourId = this.route.snapshot.paramMap.get('id');
    console.log('tourId', this.tourId)

    this.route.queryParamMap.subscribe((par) => {
      console.log('***', par)
    })
  }
}
