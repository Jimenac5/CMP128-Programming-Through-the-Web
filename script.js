let quote = [
  "Be happy",
  "Stay Strong",
  "Keep going",
  "Persevere!!!"
];
function displayQuote(){
  let randomQuoteIndex = Math.floor(Math.random()*quote.length);
  let myQuote=quote[randomQuoteIndex];
  let quoteDivElement= document.getElementById("myQuote");
  quoteDivElement.innerHTML=myQuote;
}
