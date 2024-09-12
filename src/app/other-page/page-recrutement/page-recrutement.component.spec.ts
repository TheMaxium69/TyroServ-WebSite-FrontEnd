import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRecrutementComponent } from './page-recrutement.component';

describe('PageRecrutementComponent', () => {
  let component: PageRecrutementComponent;
  let fixture: ComponentFixture<PageRecrutementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageRecrutementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRecrutementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
