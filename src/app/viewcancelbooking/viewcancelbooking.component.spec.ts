import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcancelbookingComponent } from './viewcancelbooking.component';

describe('ViewcancelbookingComponent', () => {
  let component: ViewcancelbookingComponent;
  let fixture: ComponentFixture<ViewcancelbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewcancelbookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcancelbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
