package com.google.sps.data;

public class FlashCard {
    // class attributes
    private String front;
    private String back;
    private int waitTime;

    //constructor
    public FlashCard(String front, String back){
        this.front = front;
        this.back = back;
        this.waitTime = 30;
    }

    //constructor
    public FlashCard(){
        this.front = "";
        this.back = "";
        this.waitTime = 30;
    }

    // getter methods
    public String getFront() {
        return front;
    }

    public String getBack() {
        return back;
    }

    public int getWaitTime() {
        return waitTime;
    }


    // setter methods
    public void setFront(String front) {
        this.front = front;
    }

    public void setBack(String back) {
        this.back = back;
    }

    public void setWaitTime(int waitTime) {
        this.waitTime = waitTime;
    }


    // toString() method
    @Override
    public String toString() {
        return "Front: " + this.front + "\nBack: " + this.back;
    }

    // main method
//    public static void main(String[] args) {
//        FlashCard java = new FlashCard("Java", "A programming language with a lot of preamble");
//    }

}