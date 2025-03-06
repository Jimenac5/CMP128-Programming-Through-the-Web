let quote = ["Be Happy", " Keep moving", "Never Quit", " Show true kindness"];
function displayQuote(){
  let randomQuoteIndex = Math.floor(Math.random()*quote.length);
  let myQuote=quote[randomQuoteIndex];
  letquoteDivElement= document.getElementById("myQuote");
  quoteDivElement.innerHTML=myQuote;
}
