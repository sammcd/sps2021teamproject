function addCard() {
  window.localStorage.clear();
  var x = document.getElementById("insertion");
  var text = "";
  var i;
  for (i = 0; i < x.length-1 ;i++) {
    if(i%2 == 0)// even number =>front
    {
      text += "front: " + x.elements[i].value + "<br>";
      var front = x.elements[i].value;
    }
    else //odd number =>back
    { 
      text += "back: " + x.elements[i].value + "<br>";
      var back = x.elements[i].value;
    } 
    
  }
  const card = new FlashCard(front, back);
  console.log(card.toString());
  
  window.localStorage.setItem(front, JSON.stringify(card));
  for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
  }
  document.getElementById("demo").innerHTML = text;
}

function addDeck(){
  window.localStorage.clear();
  var x = document.getElementById("addition");
  var a = new DeckHolder();
  a.createPlusDeck(Number(x.elements[0].value),Number(x.elements[1].value),Number(x.elements[2].value));
}

class FlashCard{
  constructor(front, back){
    this.front = front;
    this.back = back;
    this.waitTime = 30;
  }
  //Methods
  toString() {
    return "Front: " + this.front + "\t\tBack: " + this.back;
  }
}

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

class DeckHolder extends Deck{
  constructor(){
    super();
    this.decklist=[];
  }
  createPlusDeck(numberOfCards, firstMax, secondMax){
    var plusdeck = new Deck("Plus");
    const list1 =[...Array(firstMax+1).keys()];
    const list2 =[...Array(secondMax+1).keys()];
    var i;
    for(i=0;i<numberOfCards;i++){
      // Pick a random number from 0 to maximumNumber.
      const firstNumber = list1[Math.floor(Math.random() * list1.length)];
      const secondNumber = list2[Math.floor(Math.random() * list2.length)];
      
      var card=new FlashCard(firstNumber+ "+" + secondNumber + "= ?", firstNumber+secondNumber);
      plusdeck.cardDeck.push(card);
    }
    console.log(plusdeck.toString());
  }
}


// function loadCards() {
//   fetch('/list-cards').then(response => response.json()).then((cards) => {
//     const cardListElement = document.getElementById('card-list');
//     cards.forEach((card) => {
//       cardListElement.appendChild(createCardElement(card));
//     })
//   });
// }
// //Creates an element that represents a card, including its delete button.
// function createCardElement(card) {
//     print("Hello");
//     const cardElement = document.createElement('li');
//     cardElement.className = 'FlashCard';

//     const frontElement = document.createElement('span');
//     frontElement.innerText = card.front;
     
//     const backElement = document.createElement('span');
//     backElement.innerText = card.back;

//     const deleteButtonElement = document.createElement('button');
//     deleteButtonElement.innerText = 'Delete';
//     deleteButtonElement.addEventListener('click', () => {
//         deleteCard(card);
//     // Remove the card from the DOM.
//     cardElement.remove();
//     });
//     cardElement.appendChild(titleElement);
//     cardElement.appendChild(deleteButtonElement);
//     return cardElement;
// }

// // Tells the server to delete the task.
// function deleteCard(card) {
//   const params = new URLSearchParams();
//   params.append('front', card.front);
//   fetch('/delete-card', {method: 'POST', body: params});
// }
