import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejoinComponent } from './rejoin.component';

describe('RejoinComponent', () => {
  let component: RejoinComponent;
  let fixture: ComponentFixture<RejoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RejoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
