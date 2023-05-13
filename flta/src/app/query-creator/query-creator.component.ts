import { Component, ElementRef, ViewChild } from '@angular/core';
import { QueriesManagerService } from '../queries-manager.service';

@Component({
  selector: 'app-query-creator',
  templateUrl: './query-creator.component.html',
  styleUrls: ['./query-creator.component.scss']
})
export class QueryCreatorComponent {

  @ViewChild('wordInput',{static:true}) wordInput:ElementRef

  constructor(private queriesManager:QueriesManagerService){}

  translate(){
    if(this.wordInput.nativeElement.value.length>0 && 
       this.wordInput.nativeElement.value.length<32)
    this.queriesManager.createQuery(this.wordInput.nativeElement.value)
  }
}
