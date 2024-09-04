import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinplayerComponent } from './skinplayer.component';

describe('SkinplayerComponent', () => {
  let component: SkinplayerComponent;
  let fixture: ComponentFixture<SkinplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkinplayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkinplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
