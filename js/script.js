$('.b-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 2500,
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
