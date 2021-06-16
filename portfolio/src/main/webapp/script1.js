<<<<<<< HEAD
/**  fetch the JSON list from the server. */
=======
/** Fetch a hard-coded string and display it in the page. */
>>>>>>> 0311b52bf18c85240418167ab6426346ce40510a
async function showServerString() {
  const responseFromServer = await fetch('/hello');
  const textFromResponse = await responseFromServer.text();

<<<<<<< HEAD
  //printing it using the console.log() function
  console.log(textFromResponse);

  const helloContainer = document.getElementById('hello-container');
  helloContainer.innerText = textFromResponse;

  
}

=======
  const helloContainer = document.getElementById('hello-container');
  helloContainer.innerText = textFromResponse;
}
>>>>>>> 0311b52bf18c85240418167ab6426346ce40510a
