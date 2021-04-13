import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './CounterComponent.component.html',
  styleUrls: [ './CounterComponent.component.css' ]
})
export class CounterComponent implements OnInit  {
  public n: number = 0;
  constructor(){}
  ngOnInit(){}
 add(){
   this.n +=1;
 }
 reset(){
   this.n=0;
 }

  
}
