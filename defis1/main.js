let affichage = document.getElementById('input');
let text = document.getElementById('display');

document.getElementById('checkbox').addEventListener('mousedown', function() {

if(affichage.getAttribute("type") == "password"){
    affichage.setAttribute("type", "text");
    console.log("mot de passe apparait")
}else{
    affichage.setAttribute("type", "password");
    console.log("mot de passe pas afficher")
}

if(text.innerHTML != ""){
    text.innerHTML = "Side"
}else{
    text.innerHTML = "Hidden"
}

});



