import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatplayerComponent } from './statplayer.component';

describe('StatplayerComponent', () => {
  let component: StatplayerComponent;
  let fixture: ComponentFixture<StatplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatplayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
