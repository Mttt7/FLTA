export class Word{
    name:string=''
    meanings:string[]=[]
    sentencesEN:string[]=[]
    sentencesPL:string[]=[]
    isSaved:boolean = false

    constructor(
        name:string,
        meanings:string[],
        sentencesEN:string[],
        sentencesPL:string[],
        isSaved:boolean){
    this.name=name
    this.meanings = meanings
    this.sentencesEN = sentencesEN
    this.sentencesPL = sentencesPL
    this.isSaved = isSaved
    }
}