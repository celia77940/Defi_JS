const myBtn = document.getElementById("myBtn");
var result = document.getElementById("result");

document.getElementById("result");

//quand click sur btn declenche la fonction
//dans l'addEventListener la fonction headsOrTails pas de parenthèses
//sinon cela ne fonctionne pas
myBtn.addEventListener("click", headsOrTails);
console.log(myBtn);
//creation de la fonction pile ou face
function headsOrTails() {
var a = Math.random();
console.log(a);
if (a > 0.5) {
result.innerHTML = "pile";
} else {
result.innerHTML = "face";
}
};
