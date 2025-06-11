import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoLogoutComponent } from './cabecalho-logout.component';

describe('CabecalhoLogoutComponent', () => {
  let component: CabecalhoLogoutComponent;
  let fixture: ComponentFixture<CabecalhoLogoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabecalhoLogoutComponent]
    });
    fixture = TestBed.createComponent(CabecalhoLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
