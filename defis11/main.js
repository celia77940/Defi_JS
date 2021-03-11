window.onscroll = slideDown;

function slideDown() {

     const navbar = document.getElementById("navbar");
     let html = document.documentElement;
     if(html.scrollTop > 56){
        navbar.style.top = "0";
     }else{
          navbar.style.top = "-56px";
     }
     




     // Scroltop
     // document.documentElement
     // style.top
}
 