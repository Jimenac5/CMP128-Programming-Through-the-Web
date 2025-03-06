let quote = [
  "I never loose I either win or learn-Nelson Mandela",
  "All our dreams can come true, if we have the courage to pursue them-Walt Disney",
  "It always seems impossible until it's done-Nelosn Mandela"
  "Either you run the day, or the day runs you-Jim Rohn"
];
function displayQuote(){
  let randomQuoteIndex = Math.floor(Math.random()*quote.length);
  let myQuote=quote[randomQuoteIndex];
  let quoteDivElement= document.getElementById("myQuote");
  quoteDivElement.innerHTML=myQuote;
}
