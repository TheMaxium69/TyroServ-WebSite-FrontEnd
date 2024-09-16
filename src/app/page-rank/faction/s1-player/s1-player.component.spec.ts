import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S1PlayerComponent } from './s1-player.component';

describe('S1PlayerComponent', () => {
  let component: S1PlayerComponent;
  let fixture: ComponentFixture<S1PlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S1PlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S1PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
