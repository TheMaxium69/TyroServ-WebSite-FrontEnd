import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiComponent } from './qui.component';

describe('QuiComponent', () => {
  let component: QuiComponent;
  let fixture: ComponentFixture<QuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
