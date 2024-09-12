import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCguComponent } from './page-cgu.component';

describe('PageCguComponent', () => {
  let component: PageCguComponent;
  let fixture: ComponentFixture<PageCguComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCguComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
