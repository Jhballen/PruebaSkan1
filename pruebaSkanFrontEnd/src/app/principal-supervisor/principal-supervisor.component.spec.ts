import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalSupervisorComponent } from './principal-supervisor.component';

describe('PrincipalSupervisorComponent', () => {
  let component: PrincipalSupervisorComponent;
  let fixture: ComponentFixture<PrincipalSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalSupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
