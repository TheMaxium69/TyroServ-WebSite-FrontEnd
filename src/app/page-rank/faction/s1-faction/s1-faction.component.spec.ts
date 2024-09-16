import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S1FactionComponent } from './s1-faction.component';

describe('S1FactionComponent', () => {
  let component: S1FactionComponent;
  let fixture: ComponentFixture<S1FactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S1FactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S1FactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
