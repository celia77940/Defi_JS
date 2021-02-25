const myBtn = document.getElementById('myBtn') ;
const cntClic = document.getElementById('cntClic');
var nbClic = 0;

myBtn.addEventListener('click', function()
{
    ++ nbClic;
    cntClic.innerHTML = 'you cliked '+nbClic+' times'
    console.log('you cliked '+nbClic+' times');  
});

