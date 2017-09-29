var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex +=n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  

  x[slideIndex-1].style.display = "block";  }
  
}


function openNav() {
    document.getElementsByClassName("menu-responsive")[0].style.display = "block";
}


function closeNav() {
    document.getElementsByClassName("menu-responsive")[0].style.display = "none";
}



$(document).ready(function(){
$('.brslider').slick({
  slidesToScroll: 3,
  slidesToShow: 4,
  responsive: [
   {
     breakpoint: 1024,
       settings: {
       slidesToShow: 3,
       slidesToScroll:3,
       infinite: true      
     }
    },
    {
      breakpoint: 768,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
   {
      breakpoint: 480,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1
     }
   }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
   ]
});
});
				