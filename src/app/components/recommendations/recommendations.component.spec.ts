import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationsComponent } from './recommendations.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { voteReducer } from '../../reducers/vote.reducer';

describe('RecommendationsComponent', () => {
  let component: RecommendationsComponent;
  let fixture: ComponentFixture<RecommendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationsComponent ],
      imports: [ HttpClientModule, StoreModule.forRoot({ vote: voteReducer }) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as text: "recommendations page"', () => {
    expect(component.text).toEqual('recommendations page');
  });
});
