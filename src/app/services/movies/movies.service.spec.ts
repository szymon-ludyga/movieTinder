import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';
import { HttpClientModule } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';

describe('MoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [
    HttpClientModule, RouterTestingModule 
]}));

  it('should be created', () => {
    const service: MoviesService = TestBed.get(MoviesService);
    expect(service).toBeTruthy();
  });
});
