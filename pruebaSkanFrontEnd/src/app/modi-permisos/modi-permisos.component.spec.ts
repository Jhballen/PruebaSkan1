import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiPermisosComponent } from './modi-permisos.component';

describe('ModiPermisosComponent', () => {
  let component: ModiPermisosComponent;
  let fixture: ComponentFixture<ModiPermisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiPermisosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
