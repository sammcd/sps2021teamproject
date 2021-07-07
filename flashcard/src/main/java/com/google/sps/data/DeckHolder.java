package com.google.sps.data;

import java.util.HashMap;

public class DeckHolder {
    HashMap<String,Deck> deckStore;

    // constructor
    public DeckHolder() {
        this.deckStore = new HashMap<String, Deck>();
    }

    // add new deck
    public void addDeck(Deck newDeck) {
        this.deckStore.put(newDeck.getDeckName(), newDeck);
    }

    // remove deck by deck name
    public void removeDeck(String unwantedDeck) {
        this.deckStore.remove(unwantedDeck);
    }

    // show deck names
    public void showDeckNames(){
        for (String deckName : this.deckStore.keySet()){
            System.out.println(deckName);
        }
    }

    // get deck size
    public int deckHolderSize() {
        return this.deckStore.size();
    }

    // access deck based on deck name
    public Deck accessDeck(String deckName) {
        return this.deckStore.get(deckName);
    }

    public static void main(String[] args) {
        Deck programming = new Deck("Trial");
        Deck hyu = new Deck("Trial3");


        FlashCard java = new FlashCard("Java", "Hard Programming Lang");
        java.setWaitTime(5);
        FlashCard python = new FlashCard("Python", "Easy Programming Lang");
        python.setWaitTime(5);
        FlashCard r = new FlashCard("R", "Okay Programming Lang");
        r.setWaitTime(5);

        programming.addCard(java);
        programming.addCard(python);
        programming.addCard(r);

        DeckHolder newHolder = new DeckHolder();
        newHolder.addDeck(programming);
        newHolder.addDeck(hyu);
        // System.out.println(newHolder.deckHolderSize());
        // newHolder.removeDeck("Trial3");
        Deck dick  = newHolder.accessDeck("Trial");
        // newHolder.showDeckNames();
        dick.getRandomAll();

        // programming.getRandomAll();
    }
}