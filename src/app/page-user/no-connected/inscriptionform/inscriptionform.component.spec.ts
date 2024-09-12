import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionformComponent } from './inscriptionform.component';

describe('InscriptionformComponent', () => {
  let component: InscriptionformComponent;
  let fixture: ComponentFixture<InscriptionformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
