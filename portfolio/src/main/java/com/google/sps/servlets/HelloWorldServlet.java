package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Random;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

  private final ArrayList<String> list = new ArrayList<String>();
  

  @Override
  
  
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
      //random
    String message = randomMessages();

    response.setContentType("text/html;");
<<<<<<< HEAD
    response.getWriter().println(message);
=======
    response.getWriter().println("Hello Vi!");
>>>>>>> 0311b52bf18c85240418167ab6426346ce40510a
  }

  private String randomMessages() {
    list.add("I love basketball.");
    list.add("I like tacos.");
    list.add("I am majoring in Computer Science.");
    list.add("I am a senior now.");
  // Pick a random greeting.
    int idx = new Random().nextInt(list.size());
    String json = (list.get(idx));
    return json;
    }
}

