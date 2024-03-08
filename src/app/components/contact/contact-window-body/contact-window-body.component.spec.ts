import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactWindowBodyComponent } from './contact-window-body.component';

describe('ContactWindowBodyComponent', () => {
  let component: ContactWindowBodyComponent;
  let fixture: ComponentFixture<ContactWindowBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactWindowBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactWindowBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
