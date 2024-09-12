import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoConnectedComponent } from './no-connected.component';

describe('NoConnectedComponent', () => {
  let component: NoConnectedComponent;
  let fixture: ComponentFixture<NoConnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoConnectedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
