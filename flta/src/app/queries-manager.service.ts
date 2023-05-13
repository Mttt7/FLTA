import { EventEmitter, Injectable } from '@angular/core';
import {  Word } from './shared/word-model';

@Injectable({
  providedIn: 'root'
})
export class QueriesManagerService {


  wordsUpdated = new EventEmitter<void>()

  

  constructor() { }

  words:Word[] = [new Word('doodle',["bazgroły", "rysunek bez celu"],["Her notebook was filled with random doodles.", "I can't concentrate during meetings, so I just doodle in my notebook.", "She doodled a cute little elephant during class.", "I don't think drawing doodles is a waste of time; it can be relaxing."],["Jej zeszyt był pełen przypadkowych bazgrołów.", "Nie potrafię skupić się podczas spotkań, więc tylko bazgrzę w swoim zeszycie.", "Podczas zajęć rysowała uroczy mały słonik.", "Nie uważam, że rysowanie bazgrołów to strata czasu; może to być relaksujące."],false),
  new Word('doodle',["bazgroły", "rysunek bez celu"],["Her notebook was filled with random doodles.", "I can't concentrate during meetings, so I just doodle in my notebook.", "She doodled a cute little elephant during class.", "I don't think drawing doodles is a waste of time; it can be relaxing."],["Jej zeszyt był pełen przypadkowych bazgrołów.", "Nie potrafię skupić się podczas spotkań, więc tylko bazgrzę w swoim zeszycie.", "Podczas zajęć rysowała uroczy mały słonik.", "Nie uważam, że rysowanie bazgrołów to strata czasu; może to być relaksujące."],false)]
 

  createQuery(query:string){
  this.getMessages(query)
  .then((message:string)=>{
    const parsedMessage = JSON.parse(message)
    this.words.push(new Word(
      query,
      parsedMessage.meanings,
      parsedMessage.sentencesEN,
      parsedMessage.sentencesPL,
      false
    ))
  })
  
  }

  getMessages = async (query)=>{
    let message = 'empty'
    
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: query
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json()
      console.log(data)
      
      message = data.choices[0].message.content
      console.log(message)
      
    } catch (error) {
      console.error(error)
    }

    return message
  }
  
  


}
