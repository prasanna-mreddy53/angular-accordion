import { Component, OnInit, Input } from '@angular/core';
import { Config, Faq } from '../types';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() options;
  @Input() faqs: Faq[];
  config: Config;
  height:any;
  ngOnInit() {
    this.config = this.mergeConfig(this.options);
  }
  
  mergeConfig(options: Config) {
    const config = {
      // selector: '#accordion',
      multi: true
    };
    return { ...config, ...options };
  }
  toggle(index: number) {
      if (!this.config.multi) {
      this.faqs.filter(
        (faq, i) => i !== index && faq.active
      ).forEach(faq => faq.active = !faq.active);
    }
    //ACTIVE ACCORDION
    this.faqs[index].active = !this.faqs[index].active;
  }
}