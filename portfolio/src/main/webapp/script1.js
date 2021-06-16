/**  fetch the JSON list from the server. */
async function showServerString() {
  const responseFromServer = await fetch('/hello');
  const textFromResponse = await responseFromServer.text();

  //printing it using the console.log() function
  console.log(textFromResponse);

  const helloContainer = document.getElementById('hello-container');
  helloContainer.innerText = textFromResponse;

  
}

