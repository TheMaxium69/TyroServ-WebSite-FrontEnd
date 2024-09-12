import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCgvComponent } from './page-cgv.component';

describe('PageCgvComponent', () => {
  let component: PageCgvComponent;
  let fixture: ComponentFixture<PageCgvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCgvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCgvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
