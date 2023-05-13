import { Component, Input } from '@angular/core';
import { QueriesManagerService } from 'src/app/queries-manager.service';
import { Word } from 'src/app/shared/word-model';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent {
  @Input('word') word: Word
  saveImage="../../../assets/images/notepad.png"
  savedImage="../../../assets/images/notepadClicked.png"

  constructor(private queryManager:QueriesManagerService){}


  getSaveImage(){

    if(!this.word.isSaved) return this.saveImage
    else return this.savedImage
  }

  onSave(){
    this.word.isSaved = !this.word.isSaved
    this.queryManager.wordsUpdated.emit()
    
  }
  onDelete(){
    this.queryManager.words = this.queryManager.words.filter(w=>w!=this.word)
    this.queryManager.wordsUpdated.emit()
    console.log(this.queryManager.words)
  }
}
