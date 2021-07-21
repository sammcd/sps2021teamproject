import { FlashCard } from "./flashcard";
class Deck extends FlashCard{
  constructor(name){
    super();
    this.deckName = name;
    this.cardDeck = [];
  }
  addCard(card){
    this.cardDeck.push(card)
    console.log(this.cardDeck.toString());
  }
  toString(){
    var text="";
    var i;
    for (i=0;i<this.cardDeck.length;i++){
      var u=i+1;
      text+="Card "+u+"\t\tFront: "+ this.cardDeck[i].front + "\t\tBack: " + this.cardDeck[i].back + "\n";
    }
    return text;
  }
}  
exports.Deck   = Deck;