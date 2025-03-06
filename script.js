let quote = ["Happy","Keep","Never","kindness"];
function displayquote(){
  let randomquoteIndex = Math.floor(Math.random()*quote.length);
  let myQuote=quote[randomquoteIndex];
  letquoteDivElement= document.getElementById("myQuote");
  quoteDivElement.innerHTML=myQuote;
}
