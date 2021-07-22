const additiondeck = new Array({});
const subtractiondeck = new Array({});
const multiplicationdeck = new Array({});
const divisiondeck = new Array({});
const numberwordsdeck = new Array({});

const deckname = document.getElementById("DeckName");


function deleteAllDecks(){
    window.localStorage.clear();
    location.reload();

}

function onButtonClick(){
  document.getElementById('deletedeckname').className="show";
  document.getElementById('deletebtn').className="show";

}

function deteleteDeck(){
  const name= document.getElementById("deletedeckname").value
  console.log(name)
  if(localStorage.getItem(name)){
    localStorage.removeItem(name)
    location.reload();
  }
  else{alert("There is no deck with this name.")}
}

function displayCreatedDecks(){
  var i;
  printout=""
  console.log(localStorage.length)
  
  for (i=0;i<localStorage.length;i++)
  {
      console.log(i)
      var a=localStorage.key(i);
      console.log(a)
      printout+="<div><label>"+a+"</label><br/>";
      

      var b= localStorage.getItem(a)
      console.log(b)
      var obj=JSON.parse(b)
      console.log("obj length",obj.length)
      for(var j =0;j<obj.length;j++)
      {
          printout+="<div class=\"flip-card\"><div class=\"flip-card-inner\"><div class=\"flip-card-front\"><p>"+obj[j].front+"</p></div><div class=\"flip-card-back\"><p>" +obj[j].back+"</p></div></div></div>"
      }
      document.getElementById("flashcards").innerHTML = printout;
      printout+="</div>"

  }
}

//ADDITION
function displayAdditionDeck(){
  localStorage.clear()
  console.log(additiondeck)
  console.log(JSON.stringify(additiondeck))
  t= JSON.stringify(additiondeck)
  const obj = JSON.parse(t);
  console.log(obj[1].front)
  var printout="";
  for(var i =1;i<obj.length;i++)
  {
    printout+="<div class=\"flip-card\"><div class=\"flip-card-inner\"><div class=\"flip-card-front\"><p>"+obj[i].front+"</p></div><div class=\"flip-card-back\"><p>" +obj[i].back+"</p></div></div></div>"
  }
  document.getElementById("text").innerHTML = printout;
}

function randomAdditionDeck(){
  localStorage.clear();
  createAdditionDeck(20,10, 10);
  displayAdditionDeck();
}

function additionDeck(){
  window.localStorage.clear();
  var x = document.getElementById("addition");
  createAdditionDeck(Number(x.elements[0].value),Number(x.elements[1].value),Number(x.elements[2].value));
  displayAdditionDeck();
}

function createAdditionDeck(numberOfCards, firstMax, secondMax){
  const list1 =[...Array(firstMax+1).keys()];
  const list2 =[...Array(secondMax+1).keys()];
  var i;
  for(i=0;i<numberOfCards;i++){
    // Pick a random number from 0 to maximumNumber.
    const firstNumber = list1[Math.floor(Math.random() * list1.length)];
    const secondNumber = list2[Math.floor(Math.random() * list2.length)];
    
    var card=new FlashCard(firstNumber+ "+" + secondNumber + "= ?", firstNumber+secondNumber);
    additiondeck.push(card);
    localStorage.setItem('additiondeck', JSON.stringify(additiondeck));
    console.log(JSON.stringify(additiondeck))
  }
  console.log(additiondeck.toString());
}

//SUBTRACTION
function displaySubtractionDeck(){
  localStorage.clear()
  console.log(subtractiondeck)
  console.log(JSON.stringify(subtractiondeck))
  t= JSON.stringify(subtractiondeck)
  const obj = JSON.parse(t);
  console.log(obj[1].front)
  var printout="";
  for(var i =1;i<obj.length;i++)
  {
    printout+="<div class=\"flip-card\"><div class=\"flip-card-inner\"><div class=\"flip-card-front\"><p>"+obj[i].front+"</p></div><div class=\"flip-card-back\"><p>" +obj[i].back+"</p></div></div></div>"
  }
  document.getElementById("text").innerHTML = printout;
}

function randomSubtractionDeck(){
  localStorage.clear();
  createSubtractionDeck(20,20);
  displaySubtractionDeck();
}

function subtractionDeck(){
  window.localStorage.clear();
  var x = document.getElementById("subtraction");
  createSubtractionDeck(Number(x.elements[0].value),Number(x.elements[1].value));
  displaySubtractionDeck();
}

function createSubtractionDeck(numberOfCards, firstMax){
  const list =[...Array(firstMax+1).keys()];
  var i;
  for(i=0;i<numberOfCards;i++){
    // Pick a random number from 0 to maximumNumber.
    const firstNumber = list[Math.floor(Math.random() * list.length)];
    const secondNumber = list[Math.floor(Math.random() * list.length)];
    
    var card=new FlashCard(firstNumber+ "-" + secondNumber + "= ?", firstNumber-secondNumber);
    subtractiondeck.push(card);
    window.localStorage.setItem('subtraction', JSON.stringify(subtractiondeck));
    console.log(JSON.stringify(subtractiondeck))
  }
  console.log(subtractiondeck.toString());
}

//MULTIPLICATION
function displayMultiplicationDeck(){
  localStorage.clear()
  console.log(multiplicationdeck)
  console.log(JSON.stringify(multiplicationdeck))
  t= JSON.stringify(multiplicationdeck)
  const obj = JSON.parse(t);
  console.log(obj[1].front)
  var printout="";
  for(var i =1;i<obj.length;i++)
  {
    printout+="<div class=\"flip-card\"><div class=\"flip-card-inner\"><div class=\"flip-card-front\"><p>"+obj[i].front+"</p></div><div class=\"flip-card-back\"><p>" +obj[i].back+"</p></div></div></div>"
  }
  document.getElementById("text").innerHTML = printout;
}

function randomMultiplicationDeck(){
  localStorage.clear();
  createMultiplicationDeck(20,10,10);
  displayMultiplicationDeck();
}

function multiplicationDeck(){
  window.localStorage.clear();
  var x = document.getElementById("multiplication");
  createMultiplicationDeck(Number(x.elements[0].value),Number(x.elements[1].value),Number(x.elements[2].value));
  displayMultiplicationDeck();
}

function createMultiplicationDeck(numberOfCards, firstMax, secondMax){
  const list1 =[...Array(firstMax+1).keys()];
  const list2 =[...Array(secondMax+1).keys()];
  var i;
  for(i=0;i<numberOfCards;i++){
    // Pick a random number from 0 to maximumNumber.
    const firstNumber = list1[Math.floor(Math.random() * list1.length)];
    const secondNumber = list2[Math.floor(Math.random() * list2.length)];
    
    var card=new FlashCard(firstNumber+ "x" + secondNumber + "= ?", firstNumber*secondNumber);
    multiplicationdeck.push(card);
    window.localStorage.setItem('multiplicationdeck', JSON.stringify(multiplicationdeck));
  }
  console.log(multiplicationdeck.toString());
}


//DIVISION
function displayMultiplicationDeck(){
  localStorage.clear()
  console.log(divisiondeck)
  console.log(JSON.stringify(divisiondeck))
  t= JSON.stringify(divisiondeck)
  const obj = JSON.parse(t);
  console.log(obj[1].front)
  var printout="";
  for(var i =1;i<obj.length;i++)
  {
    printout+="<div class=\"flip-card\"><div class=\"flip-card-inner\"><div class=\"flip-card-front\"><p>"+obj[i].front+"</p></div><div class=\"flip-card-back\"><p>" +obj[i].back+"</p></div></div></div>"
  }
  document.getElementById("text").innerHTML = printout;
}

function randomDivisionDeck(){
  localStorage.clear();
  createDivisionDeck(20,10);
  displayMultiplicationDeck();
}

function divisionDeck(){
  window.localStorage.clear();
  var x = document.getElementById("division");
  createDivisionDeck(Number(x.elements[0].value),Number(x.elements[1].value));
  displayMultiplicationDeck();
}

function createDivisionDeck(numberOfCards, firstMax){
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
    divisiondeck.push(card);
    window.localStorage.setItem('divisiondeck', JSON.stringify(divisiondeck));
  }
  console.log(divisiondeck.toString());
}


//NUMBER WORDS (up to 100,000)
function displayNumberWordsDeck(){
  localStorage.clear()
  console.log(numberwordsdeck)
  console.log(JSON.stringify(numberwordsdeck))
  t= JSON.stringify(numberwordsdeck)
  const obj = JSON.parse(t);
  console.log(obj[1].front)
  var printout="";
  for(var i =1;i<obj.length;i++)
  {
    printout+="<div class=\"flip-card\"><div class=\"flip-card-inner\"><div class=\"flip-card-front\"><p>"+obj[i].front+"</p></div><div class=\"flip-card-back\"><p>" +obj[i].back+"</p></div></div></div>"
  }
  document.getElementById("text").innerHTML = printout;
}

function numberWordsDeck(){
  window.localStorage.clear();
  var x = document.getElementById("numberWords");
  createNumberWordsDeck(Number(x.elements[0].value),Number(x.elements[1].value));
  displayNumberWordsDeck()
}

function randomNumberWordsDeck(){
  localStorage.clear();
  createNumberWordsDeck(20,1000);
  displayNumberWordsDeck()
}

function createNumberWordsDeck(numberOfCards, max)
{
  var i;
  for(i=0;i<numberOfCards;i++){
    // Pick a random number from 0 to maximumNumber.
    const number = Math.floor(Math.random() * max);
    var stringnum= String(number);
    var d= stringnum.length; //number of the digit of the number
    if(number == 0)
    {
      var front = "zero";
    }
    else if (d<=2)
    {
      var front = this.number(number);
    }
    else if (d==3)
    {
      var first = Math.floor(number/100);
      var second = number%100;
      if (second == 0)
      {
        var front = this.number(first) + " hundred";
      }
      else {var front = this.number(first)+" hundred and " + this.number(second);}
    }
    else if (d==4)
    {
      var first = Math.floor(number/1000);
      var second = Math.floor((number- first *1000)/100);
      var third = (number- first *1000)%100;
      if (second == 0 && third == 0)
      {
        var front = this.number(first) + " thousand";
      }
      else if (second == 0 && third != 0)
      {
        var front = this.number(first) + " thousand and " + this.number(third);
      }
      else //second != 0 and third != 0 
      {
        var front = this.number(first)+" thousand, " + this.number(second)+ " hundred and " + this.number(third);
      }
    }
    var card = new FlashCard(front,number);
    numberwordsdeck.push(card);
    window.localStorage.setItem('numberwordsdeck', JSON.stringify(numberwordsdeck));
  } 
  console.log(numberwordsdeck.toString());
}

function number(n){
  if (n == 1)
  {
    var answer = "one";
  }
  else if (n == 2)
  {
    var answer = "two";
  }
  else if (n == 3)
  {
    var answer = "three";
  }
  else if (n == 4)
  {
    var answer = "four";
  }
  else if (n == 5)
  {
    var answer = "five";
  }
  else if (n == 6)
  {
    var answer = "six";
  }
  else if (n == 7)
  {
    var answer = "seven";
  }
  else if (n == 8)
  {
    var answer = "eight";
  }
  else if (n == 9)
  {
    var answer = "nine";
  }
  else if (n == 10)
  {
    var answer = "ten";
  }
  else if (n == 11)
  {
    var answer = "eleven";
  }
  else if (n == 12)
  {
    var answer = "twelve";
  }
  else if (n == 13)
  {
    var answer = "thirteen";
  }
  else if (n == 14)
  {
    var answer = "fourteen";
  }
  else if (n == 15)
  {
    var answer = "fifteenth";
  }
  else if (n == 16)
  {
    var answer = "sixteenth";
  }
  else if (n == 17)
  {
    var answer = "seventeen";
  }
  else if (n == 18)
  {
    var answer = "eighteen";
  }
  else if (n == 19)
  {
    var answer = "nineteen";
  }
  else if (n >=20 && n < 30)
  {
    var answer = "twenty";
    if (n-20 != 0)
    {
      answer += "-" + this.number(n-20);
    }
  }
  else if (n >=30 && n < 40)
  {
    var answer = "thirty";
    if (n-30 != 0)
    {
      answer += "-" + this.number(n-30);
    }
  }
  else if (n >=40 && n < 50)
  {
    var answer = "fourty";
    if (n-40 != 0)
    {
      answer += "-" + this.number(n-40);
    }
  }
  else if (n >=50 && n < 60)
  {
    var answer = "fifty";
    if (n-50 != 0)
    {
      answer += "-" + this.number(n-50);
    }
  }
  else if (n >=60 && n < 70)
  {
    var answer = "sixty";
    if (n-60 != 0)
    {
      answer += "-" + this.number(n-60);
    }
  }
  else if (n >=70 && n < 80)
  {
    var answer = "seventy";
    if (n-70 != 0)
    {
      answer += "-" + this.number(n-70);
    }
  }
  else if (n >=80 && n < 90)
  {
    var answer = "eighty";
    if (n-80 != 0)
    {
      answer += "-" + this.number(n-80);
    }
  }
  else if (n >=90 && n < 100)
  {
    var answer = "ninety"
    if (n-90 != 0)
    {
      answer += "-" + this.number(n-90);
    }
  }
  else {
    var answer = "";
  }
  return answer;
}


//handle drop box in home page
function handleSelect(elm)
  {
     window.location = elm.value+".html";
  }


//CLASSES
class FlashCard{
  constructor(front, back){
    this.front = front;
    this.back = back;
  }
  //Methods
  toString() {
    return this.front + this.back;
  }
}

// class Deck extends FlashCard{
//   constructor(name){
//     super();
//     this.deckName = name;
//     this.cardDeck = [];
//   }
//   // addCard(card){
//   //   this.cardDeck.push(card)
//   //   console.log(this.cardDeck.toString());
//   // }
//   toString(){
//     var text="";
//     var i;
//     for (i=0;i<this.cardDeck.length;i++){
//       var u=i+1;
//       text+="Card "+u+"\t\tFront: "+ this.cardDeck[i].front + "\t\tBack: " + this.cardDeck[i].back + "\n";
//     }
//     return text;
//   }
// }

// class DeckHolder extends Deck{
//   constructor(){
//     super();
//     this.decklist=[];
//   }
  
// }


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
