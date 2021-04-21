import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeDetailComponent } from './cidade-detail.component';

describe('CidadeDetailComponent', () => {
  let component: CidadeDetailComponent;
  let fixture: ComponentFixture<CidadeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
