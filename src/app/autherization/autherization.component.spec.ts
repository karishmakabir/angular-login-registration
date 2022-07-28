import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutherizationComponent } from './autherization.component';

describe('AutherizationComponent', () => {
  let component: AutherizationComponent;
  let fixture: ComponentFixture<AutherizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutherizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutherizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
