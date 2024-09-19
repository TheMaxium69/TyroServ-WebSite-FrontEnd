import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapeComponent } from './cape.component';

describe('CapeComponent', () => {
  let component: CapeComponent;
  let fixture: ComponentFixture<CapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
