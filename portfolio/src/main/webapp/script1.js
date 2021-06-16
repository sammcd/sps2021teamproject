/** Fetch a hard-coded string and display it in the page. */
async function showServerString() {
  const responseFromServer = await fetch('/hello');
  const textFromResponse = await responseFromServer.text();

  const helloContainer = document.getElementById('hello-container');
  helloContainer.innerText = textFromResponse;
}
