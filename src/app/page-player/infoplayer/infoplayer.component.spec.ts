import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoplayerComponent } from './infoplayer.component';

describe('InfoplayerComponent', () => {
  let component: InfoplayerComponent;
  let fixture: ComponentFixture<InfoplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoplayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
