let quote = [
  "Happy",
  "Nuetral",
  "Sad"
];
function displayQuote(){
  let randomQuoteIndex = Math.floor(Math.random()*quote.length);
  let myQuote=quote[randomMoodIndex];
  let quoteDivElement= document.getElementById("myQuote");
  quoteDivElement.innerHTML=myQuote;
}
