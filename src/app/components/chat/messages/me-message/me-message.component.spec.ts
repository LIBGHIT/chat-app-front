import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeMessageComponent } from './me-message.component';

describe('MeMessageComponent', () => {
  let component: MeMessageComponent;
  let fixture: ComponentFixture<MeMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
