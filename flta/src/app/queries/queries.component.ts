import { Component, OnInit } from '@angular/core';
import { QueriesManagerService } from '../queries-manager.service';
import { Word } from '../shared/word-model';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {

  constructor(private queriesManager:QueriesManagerService){
    this.queriesManager.wordsUpdated.subscribe(()=>{
      this.words = this.queriesManager.words
    })
  }

  words:Word[] = []

  ngOnInit(): void {
    this.words = this.queriesManager.words
  }

}
