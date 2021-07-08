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

function additionDeck(){
  window.localStorage.clear();
  var x = document.getElementById("addition");
  var a = new DeckHolder();
  a.createPlusDeck(Number(x.elements[0].value),Number(x.elements[1].value),Number(x.elements[2].value));
}

function subtractionDeck(){
  window.localStorage.clear();
  var x = document.getElementById("subtraction");
  var a = new DeckHolder();
  a.createMinusDeck(Number(x.elements[0].value),Number(x.elements[1].value));
}

function multiplicationDeck(){
  window.localStorage.clear();
  var x = document.getElementById("multiplication");
  var a = new DeckHolder();
  a.createMultiplicationDeck(Number(x.elements[0].value),Number(x.elements[1].value),Number(x.elements[2].value));
}

function divisionDeck(){
  window.localStorage.clear();
  var x = document.getElementById("division");
  var a = new DeckHolder();
  a.createDivisionDeck(Number(x.elements[0].value),Number(x.elements[1].value));
}


//classes

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
  createMinusDeck(numberOfCards, firstMax){
    var minusdeck = new Deck("Minus");
    const list =[...Array(firstMax+1).keys()];
    var i;
    for(i=0;i<numberOfCards;i++){
      // Pick a random number from 0 to maximumNumber.
      const firstNumber = list[Math.floor(Math.random() * list.length)];
      const secondNumber = list[Math.floor(Math.random() * list.length)];
      
      var card=new FlashCard(firstNumber+ "-" + secondNumber + "= ?", firstNumber-secondNumber);
      minusdeck.cardDeck.push(card);
    }
    console.log(minusdeck.toString());
  }
  createMultiplicationDeck(numberOfCards, firstMax, secondMax){
    var multiplicationDeck = new Deck("Multiplication");
    const list1 =[...Array(firstMax+1).keys()];
    const list2 =[...Array(secondMax+1).keys()];
    var i;
    for(i=0;i<numberOfCards;i++){
      // Pick a random number from 0 to maximumNumber.
      const firstNumber = list1[Math.floor(Math.random() * list1.length)];
      const secondNumber = list2[Math.floor(Math.random() * list2.length)];
      
      var card=new FlashCard(firstNumber+ "x" + secondNumber + "= ?", firstNumber*secondNumber);
      multiplicationDeck.cardDeck.push(card);
    }
    console.log(multiplicationDeck.toString());
  }
  createDivisionDeck(numberOfCards, firstMax){
    var divisionDeck = new Deck("Division");
    const list =[...Array(firstMax+1).keys()];
    var i; 
    var j;
    for(i=0;i<numberOfCards;i++){
      const list1= [];

      // Pick a random number from 0 to maximumNumber.
      const firstNumber = list[Math.floor(Math.random() * list.length)];

      //find b that giving out 0 remainder and push it in list1
      for (j=1;j<=firstNumber;j++){
        var x = firstNumber % j;
        if (x===0){
          list1.push(j);
        }
      }
      var secondNumber=0;
      if(firstNumber===0){
        secondNumber = list[Math.floor(Math.random() * list.length)];
      }
      else {secondNumber = list1[Math.floor(Math.random() * list1.length)];}
      console.log(firstNumber);
      console.log(secondNumber);
      console.log(list1);
      var card = new FlashCard(firstNumber+ "/" + secondNumber + "= ?", firstNumber/secondNumber);
      divisionDeck.cardDeck.push(card);
    }
    console.log(divisionDeck.toString());
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
