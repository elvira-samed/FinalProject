$('.f-slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,

  responsive: [
     {
       breakpoint: 1200,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
       }
     },
     {
       breakpoint: 992,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2
       }
     },
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
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

// FILTERING
const filters = document.querySelectorAll('.filter');

filters.forEach(filter => { 

  filter.addEventListener('click', function() {
    let selectedFilter = filter.getAttribute('data-filter');
    let itemsToHide = document.querySelectorAll(`.products .product-box:not([data-filter='${selectedFilter}'])`);
    let itemsToShow = document.querySelectorAll(`.products [data-filter='${selectedFilter}']`);
    var allFilters = document.querySelectorAll('.filters [data-filter]');

    if (selectedFilter == 'all') {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll('.products [data-filter]');
    }

    itemsToHide.forEach(el => {
      el.classList.add('hide');
      el.classList.remove('show');
    });

    itemsToShow.forEach(el => {
      el.classList.remove('hide');
      el.classList.add('show'); 
    });

    allFilters.forEach(function(filter) {
      filter.classList.remove('active');
    
    });
    filter.classList.add('active');
  });
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

// BURGER MENU
var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('b-menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

