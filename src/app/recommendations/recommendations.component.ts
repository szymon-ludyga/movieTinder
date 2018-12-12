import { Component, OnInit } from '@angular/core';
import { RecommendationsService } from '../recommendations.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  recommendations: any = [];
  acceptCount = 0;
  rejectCount = 0;

  constructor(private recommendationsService: RecommendationsService) { }

  ngOnInit() {

    this.recommendationsService.getAllRecommendations().subscribe((recommendations) => {
      this.recommendations = recommendations;
    });

  }

  onAccept() {
    this.acceptCount++;
    console.log(this.acceptCount);
  }

  onReject() {
    this.rejectCount++;
    console.log(this.rejectCount);
  }

}
