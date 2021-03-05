window.onscroll = function() { scrollIndicator() } ;

function scrollIndicator() {

  let html = document.documentElement;

//   Indique le nombre de pixel a defiler vers le haut
  let elementHtml = html.scrollTop;
//   Recupere la mesure de la hauteur
  const hauteurContenue = html.scrollHeight
//   Renvoie la hauteur de l'intérieure 
  const hauteurInterieur = html.clientHeight;
//   Pour obtenir la hauteur de l'ecran
  let hauteurEcran = hauteurContenue - hauteurInterieur;
//   Calcul le pourcentage du scroll
  let pourcentageScroll = elementHtml / hauteurEcran * 100;

//   Applique ce pourcentage a l'id bar;
document.getElementById("bar").style.width = pourcentageScroll + "%"


console.log(pourcentageScroll);
}

