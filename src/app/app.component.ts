import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Config, Faq } from './accordion/types';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {
  // signle open mode
  options: Config = { multi: false };
  faqs: Faq[];
  constructor(private appService:AppService){
  }
  ngOnInit(){
    console.log("appcomponent");
  }
  ngAfterContentInit(){
    this.appService.ReadJsonData().subscribe((data:any)=>{console.log("appcomponent Response");this.faqs=data});

  }
}
