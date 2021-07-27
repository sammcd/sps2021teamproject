const flashcards = document.getElementsByClassName("flashcards")[0];
const createCard = document.getElementsByClassName("create-card")[0];
const deckname = document.getElementById("DeckName");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

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

// document.getElementById("displayCreatedDecks").addEventListener("click", () => {
//     displayCreatedDecks();
// });

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
    if(question.value == '')
    {
        alert("Missing question")
        return
    }
    else if(answer.value == '')
    {
        alert("Missing answer")
        return
    }
    var card = new FlashCard(question.value,answer.value);
    if(localStorage.getItem(deckname.value))
        {
            var deck=JSON.parse(localStorage.getItem(deckname.value))
        }
    else{
        var deck = new Array()
    }

    deck.push(card)
    localStorage.setItem(deckname.value, JSON.stringify(deck));
    console.log(localStorage.getItem(deckname.value));
    question.value = '';
    answer.value = '';
    var printout="";
    for(var i =0;i<deck.length;i++)
    {
        printout+="<div class=\"flip-card\"><div class=\"flip-card-inner\"><div class=\"flip-card-front\"><p>"+deck[i].front+"</p></div><div class=\"flip-card-back\"><p>" +deck[i].back+"</p></div></div></div>"
    }
    document.getElementById("flashcards").innerHTML = printout;
}

displayCreatedDeck = () =>{
        var a=localStorage.key(deckname);
        console.log(a)

        var b= localStorage.getItem(a)
        console.log(b)
        var obj=JSON.parse(b)
        console.log(callback(localStorage.key(i)))
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
    {
        if(localStorage.getItem(deckname.value))
        {
            alert("This deck already exists. New cards will be added to the existed deck")
            printout=""
            var deck=JSON.parse(localStorage.getItem(deckname.value))
            for(var i =0;i<deck.length;i++)
            {
                printout+="<div class=\"flip-card\"><div class=\"flip-card-inner\"><div class=\"flip-card-front\"><p>"+deck[i].front+"</p></div><div class=\"flip-card-back\"><p>" +deck[i].back+"</p></div></div></div>"
            }
            document.getElementById("flashcards").innerHTML = printout;
        }
    createCard.style.display = "block";
    }
}

hideCreateCardBox = () => {
    createCard.style.display = "none";
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