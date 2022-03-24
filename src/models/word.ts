class WordsDb{
    database:Word[]

    constructor(){
        this.database=[]
    }

    
    deleteDb(){
        this.database=[]
    }

    addWord(wordCode: string, lang: string, text: string){
        const word=new Word(wordCode, lang, text)
        if(this.database.some(word=>word.wordCode===wordCode)){//word exists
            const wordIndex=this.database.findIndex(word=>word.wordCode===wordCode)
            this.database[wordIndex].wordData.push({lang,text})

        }else{//word does not exists
            this.database.push(word)
        }
    }

    getWord(wordCode: string, lang: string):Word{
        const wordIndex=this.database.findIndex(word=>word.wordCode===wordCode)
        const wordDataIndex=this.database[wordIndex].wordData.findIndex(lang=>lang===lang)
        const {text}=this.database[wordIndex].wordData[wordDataIndex]
        const word=new Word(
            this.database[wordIndex].wordCode,
            lang,
            text
            )
            return word
    }

    hasWordInEnglish(wordCode: string):boolean{
        const wordIndex=this.database.findIndex(word=>word.wordCode===wordCode)
        if(wordIndex<0){
            return false;
        }
        const wordDataIndex=this.database[wordIndex].wordData.findIndex(wordData=>wordData.lang === 'english')
        return wordDataIndex>=0 
    }

    hasWord(wordCode:string, lang: string ):boolean{
        const wordIndex = this.database.findIndex(word=>word.wordCode===wordCode)
        if(wordIndex<0){
            return false
        }
        const wordDataIndex=this.database[wordIndex].wordData.findIndex(wordData=>wordData.lang === lang)
        return wordDataIndex>=0 
    }

}

class Word {
  wordCode: string;
  wordData: { lang: string; text: string }[];

  constructor(wordCode: string, lang: string, text: string) {
    this.wordCode = wordCode;
    this.wordData = [];
    this.wordData.push({ lang: lang, text: text });
    }

    addWordData(lang: string, text: string){
        this.wordData.push({ lang: lang, text: text });
    }


}

export { Word,WordsDb };
