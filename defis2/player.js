const player = document.getElementById('player');
const moveSize = 24;
var playerWalk = 0;

document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowUp') {
    playerWalk = playerWalk + 1;
    if(playerWalk %2 == 1){
        player.style.backgroundImage = "url('img/dos.png')"
    }else{
        player.style.backgroundImage = "url('img/dosmouv.png')"
    }
    player.style.top = (player.offsetTop - moveSize) + "px";
  } else if (event.code == 'ArrowRight') {
    playerWalk = playerWalk + 1;
    if(playerWalk %2 == 1){
      player.style.backgroundImage = "url('img/facedroit.png')"
    }else{
      player.style.backgroundImage = "url(img/facedroitmouv.png"
    }
    player.style.left = (player.offsetLeft + moveSize) + "px";
  } else if (event.code == 'ArrowDown') {
    playerWalk = playerWalk + 1;
    if(playerWalk %2 == 1){
      player.style.backgroundImage = "url('img/face1.png')"
    }else{
      player.style.backgroundImage = "url('img/face2mouvement.png')"
    }
    player.style.top = (player.offsetTop + moveSize) + "px";
  } else if (event.code == 'ArrowLeft') {
    playerWalk = playerWalk + 1;
    if(playerWalk %2 == 1){
      player.style.backgroundImage = "url('img/cotergauche.png')"
    }else{
      player.style.backgroundImage = "url('img/cotergauchemouv.png')"
    }
    player.style.left = (player.offsetLeft - moveSize) + "px";
  }
});