const convert = document.getElementById("convert");

convert.addEventListener("click", function () {
//recup les donner entrée dans le champs
let input = document.getElementById("msgToCode").value;
console.log(input);
let output = document.getElementById("crypted");
output.value = "";
//convertir en binaire
for (var i = 0; i < input.length; i++) {
output.value += input[i].charCodeAt(0).toString(2) + " ";
}
console.log(output.value);
//afficher le result
output.innerHTML = output.value;
});