import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarConsultasComponent } from './gerenciar-consultas.component';

describe('GerenciarConsultasComponent', () => {
  let component: GerenciarConsultasComponent;
  let fixture: ComponentFixture<GerenciarConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarConsultasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
