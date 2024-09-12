import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionformComponent } from './connexionform.component';

describe('ConnexionformComponent', () => {
  let component: ConnexionformComponent;
  let fixture: ComponentFixture<ConnexionformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnexionformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
