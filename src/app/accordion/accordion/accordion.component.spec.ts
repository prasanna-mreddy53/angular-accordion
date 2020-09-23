import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent } from './accordion.component';
import { Config, Faq } from '../types';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  function getButton(element: HTMLElement, index: number): HTMLButtonElement {
    return <HTMLButtonElement>element.querySelectorAll('button[type="button"]')[index];
  }
  it('should create', () => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
  function toggle(index: number) {
    let faqs=[
      {
          "id": "1",
          "question": "What vehicles are covered?",
          "active": true,
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,."
      },
      {
          "id": "2",
          "question": "Can anyone drive a vehicle covered by a business policy?",
          "active": false,
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }]
     
    return faqs[index].active = !faqs[index].active;
  }
  it('should active in onload accordion', () =>{
    let index:number=1;
    let config = { multi: true };

    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    
    expect(toggle(index)).toBeDefined()
  })
  
});
