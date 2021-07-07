package com.google.sps.servlets;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.KeyFactory;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.jsoup.Jsoup;
import org.jsoup.safety.Whitelist;

/** Servlet responsible for creating new cards. */
@WebServlet("/new-card")
public class NewCardServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String front = Jsoup.clean(request.getParameter("front"), Whitelist.none());
    String back = Jsoup.clean(request.getParameter("back"), Whitelist.none());

    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    KeyFactory keyFactory = datastore.newKeyFactory().setKind("FlashCard");
    FullEntity cardEntity =
        Entity.newBuilder(keyFactory.newKey())
            .set("front", front)
            .set("back", back)
            .build();
    datastore.put(cardEntity);
    response.sendRedirect("/create.html");

    // // // Print the input so you can see it in the server logs.
    // System.out.println("front: " + front);
    // System.out.println("back: " + back);

    // // Write the input to the response so the user can see it.
    // response.setContentType("text/html;");
    // response.getWriter().println("<p>Front: " + front + "</p>");
    // response.getWriter().println("<p>Back: " + back + "</p>");
    //  response.sendRedirect("/create.html");
  }
}
