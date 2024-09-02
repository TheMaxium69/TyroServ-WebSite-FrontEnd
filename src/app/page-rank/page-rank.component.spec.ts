import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRankComponent } from './page-rank.component';

describe('PageRankComponent', () => {
  let component: PageRankComponent;
  let fixture: ComponentFixture<PageRankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageRankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
