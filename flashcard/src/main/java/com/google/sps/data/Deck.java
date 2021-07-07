package com.google.sps.data;

import java.util.ArrayList;
import java.util.Random;
import java.util.concurrent.TimeUnit;

public class Deck {
    // class attributes
    private String deckName;
    private ArrayList<FlashCard> cardDeck;


    // constructors
    public Deck(String deckName) {
        this.deckName = deckName;
        this.cardDeck = new ArrayList<FlashCard>();
    }

    public Deck(String deckName, ArrayList<FlashCard> intitialDeck) {
        this.deckName = deckName;
        this.cardDeck = intitialDeck;
    }


    // getters and setters

    public String getDeckName() {
        return deckName;
    }

    public Deck getCardDeck() {
        return this;
    }

    public void setDeckName(String deckName) {
        this.deckName = deckName;
    }

    public void setCardDeck(ArrayList<FlashCard> cardDeck) {
        this.cardDeck = cardDeck;
    }


    // methods
    // adding cards to the deck
    public void addCard(FlashCard newCard) {
        cardDeck.add(newCard);
    }

    // removing cards based on the front
    public void removeCard(String unwantedCard) {
        boolean notfound = true;

        for (FlashCard card : this.cardDeck) {
            if (card.getFront() == unwantedCard) {
                this.cardDeck.remove(card);
                notfound = false;
                break;
            }
        }
        if (notfound) {
            System.out.println("Card not in deck");
        }
    }

    // edit cards based on the front
    public void editCard(String editedCard, String newBack) {
        boolean notfound = true;

        for (FlashCard card : this.cardDeck) {
            if (card.getFront() == editedCard) {
                this.cardDeck.remove(card);
                this.cardDeck.add(new FlashCard(editedCard, newBack));
                notfound = false;
                break;
            }
        }
        if (notfound) {
            System.out.println("Card not in deck");
        }
    }

    // return deck size
    public int deckSize() {
        return this.cardDeck.size();
    }

    // show the front of all cards
    public void showCards() {
        String outputString = "";

        outputString += "This deck contains " + this.deckSize() + " card(s)...\n";

        for (FlashCard card : this.cardDeck) {
            outputString += card.getFront() + "\n";
        }

        System.out.println(outputString);
    }

    // select a random flashcard to study
    public FlashCard getRandomCard() {
        int index = new Random().nextInt(this.deckSize());
        FlashCard card = this.cardDeck.get(index);

        System.out.println(card.getFront());

        for (int i = card.getWaitTime(); i >= 1; i--) {
            System.out.print(i);

            try {
                TimeUnit.SECONDS.sleep(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            System.out.print("\b\b\b\b");
        }

        System.out.println(card.getBack());

        return card;
    }

    // get a number random cards from the deck to study. Samples without replacement.
    public void getRandomCards(int numCards) {
        Deck dummyDeck = new Deck("dummy", new ArrayList<FlashCard>(this.cardDeck));

        for (int i = 0; i < numCards; i++) {
            FlashCard randomCard = dummyDeck.getRandomCard();
            dummyDeck.removeCard(randomCard.getFront());
            System.out.print("\n");
        }

    }

    // get all cards in a random fashion
    public void getRandomAll() {
        getRandomCards(this.deckSize());
    }

    // override toString method
    @Override
    public String toString() {
        String outputString = "";

        outputString += "This deck contains " + this.deckSize() + " card(s)...\n\n";

        for (FlashCard card : this.cardDeck) {
            outputString += card.toString() + "\n\n";
        }

        return outputString;
    }
    // main
//    public static void main(String[] args) {
//        Deck programming = new Deck("Trial");
//
//        FlashCard java = new FlashCard("Java", "Hard Programming Lang");
//        java.setWaitTime(3);
//        FlashCard python = new FlashCard("Python", "Easy Programming Lang");
//        python.setWaitTime(3);
//        FlashCard r = new FlashCard("R", "Okay Programming Lang");
//        r.setWaitTime(3);
//
//        programming.addCard(java);
//        programming.addCard(python);
//        programming.addCard(r);
//
//        programming.getRandomAll();
//
//    }

}