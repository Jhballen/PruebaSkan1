import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPermisosComponent } from './ver-permisos.component';

describe('VerPermisosComponent', () => {
  let component: VerPermisosComponent;
  let fixture: ComponentFixture<VerPermisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPermisosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
