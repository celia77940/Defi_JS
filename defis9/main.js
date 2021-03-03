const loading = document.getElementById("loadingAnimation") ;
const content = document.getElementById("displayContent") ;

window.onload = showContent();


function showContent() {
  // Pour déclencher les 3 secondes
  setTimeout(function(){
  // Disparition de la div loadingAnimation
  loading.style.display = 'none';
  // Apparition de la div displayContent
  content.style.display = 'block';
  }, 3000);
}
