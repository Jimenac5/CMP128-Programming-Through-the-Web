let mood = ["Happy","Nuetral","Sad"];
function displayMood(){
  let randomMoodIndex = Math.floor(Math.random()*mood.length);
  let myMood=mood[randomMoodIndex];
  let moodDivElement= document.getElementById("myQuote");
  moodDivElement.innerHTML=myMood;
}
