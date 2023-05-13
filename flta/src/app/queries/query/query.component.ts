import { Component, Input } from '@angular/core';
import { Word } from 'src/app/shared/word-model';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent {
  @Input('word') word: Word
  
}
