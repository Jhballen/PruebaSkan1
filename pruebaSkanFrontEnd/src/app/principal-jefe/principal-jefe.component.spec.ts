import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalJefeComponent } from './principal-jefe.component';

describe('PrincipalJefeComponent', () => {
  let component: PrincipalJefeComponent;
  let fixture: ComponentFixture<PrincipalJefeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalJefeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalJefeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
