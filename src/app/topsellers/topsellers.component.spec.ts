import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsellersComponent } from './topsellers.component';

describe('TopsellersComponent', () => {
  let component: TopsellersComponent;
  let fixture: ComponentFixture<TopsellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopsellersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopsellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
