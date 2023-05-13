import { Component, OnInit } from '@angular/core';
import { QueriesManagerService } from '../queries-manager.service';
import { Word } from '../shared/word-model';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {

  constructor(private queriesManager:QueriesManagerService){
    this.queriesManager.wordsUpdated.subscribe(()=>{
      this.getSavedWords()
    })
  }

  savedWords:Word[] = []

  ngOnInit(): void {
    this.getSavedWords()
  }

  getSavedWords(){
    this.savedWords = this.queriesManager.words.filter(w=>w.isSaved)
    console.log(this.savedWords)
  }

}
