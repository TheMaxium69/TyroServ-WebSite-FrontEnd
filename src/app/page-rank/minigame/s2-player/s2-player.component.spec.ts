import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S2PlayerComponent } from './s2-player.component';

describe('S2PlayerComponent', () => {
  let component: S2PlayerComponent;
  let fixture: ComponentFixture<S2PlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S2PlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S2PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
