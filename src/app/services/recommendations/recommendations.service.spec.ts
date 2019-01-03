import { TestBed } from '@angular/core/testing';

import { RecommendationsService } from './recommendations.service';
import { HttpClientModule } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

describe('RecommendationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [
    HttpClientModule, RouterTestingModule, StoreModule
]}));

  it('should be created', () => {
    const service: RecommendationsService = TestBed.get(RecommendationsService);
    expect(service).toBeTruthy();
  });
});
