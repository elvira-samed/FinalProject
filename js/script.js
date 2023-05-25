$('.b-slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 2500,
});

$('.review-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });


// SCROLL TO TOP 
var scrollElem = document.getElementById("scrollToTop");
window.onscroll = function() {
        if(this.scrollY>400){
            scrollElem.classList.add("active-elem")
        }
        else{
            scrollElem.classList.remove("active-elem")
        }
    }

scrollElem.onclick=function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/////

var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

