const flashcards = document.getElementsByClassName("flashcards")[0];
const createCard = document.getElementsByClassName("create-card")[0];
const deckname = document.getElementById("DeckName");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
const a=new Array()

document.getElementById("add-flashcard").addEventListener("click", () => {
    addFlashcard();
});

document.getElementById("showCreateCardBox").addEventListener("click", () => {
    showCreateCardBox();
});

document.getElementById("delFlashcards").addEventListener("click", () => {
    delFlashcards();
});

document.getElementById("hideCreateCardBox").addEventListener("click", () => {
    hideCreateCardBox();
});

// contentArray.forEach(divMaker);

// function divMaker(text) {
//     var div = document.createElement("div");
//     var h2_question = document.createElement('h2');
//     var h2_answer = document.createElement('h2');

//     div.className = 'flashcard';

//     h2_question.setAttribute("style", "border-top:1px solid red; padding: 15px; margin-top:30px");
//     h2_question.innerHTML = text.my_question;
//     console(text.my_question)

//     h2_answer.setAttribute("style", "text-align:center; display:none; color:red");
//     h2_answer.innerHTML = text.my_answer;

//     div.appendChild(h2_question);
//     div.appendChild(h2_answer);

//     div.addEventListener("click", () => {
//         if (h2_answer.style.display == "none")
//             h2_answer.style.display = "block";
//         else
//             h2_answer.style.display = "none";
//     })

//     flashcards.appendChild(div);
// }

addFlashcard = () => {
    var card = new FlashCard(question.value,answer.value);
    a.push(card)
    localStorage.setItem(deckname, JSON.stringify(a));
    console.log(localStorage.getItem(deckname));
    question.value = '';
    answer.value = '';
    var deck=localStorage.getItem(deckname)
  const obj = JSON.parse(deck);
  var printout="";
  for(var i =0;i<obj.length;i++)
  {
    printout+="<div class=\"flip-card\"><div class=\"flip-card-inner\"><div class=\"flip-card-front\"><p>"+obj[i].front+"</p></div><div class=\"flip-card-back\"><p>" +obj[i].back+"</p></div></div></div>"
  }
  document.getElementById("flashcards").innerHTML = printout;
}

delFlashcards = () => {
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}

showCreateCardBox = () => {
    if(deckname.value==='')
    {alert("please fill out name of your new deck");}
    else
    {createCard.style.display = "block";}
}

hideCreateCardBox = () => {
    createCard.style.display = "none";
}


