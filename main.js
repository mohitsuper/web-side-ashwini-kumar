
var swiper = new Swiper(".mySwiper", {
       autoplay: {
          delay: 2900,
          direction: 'vertical',
          disableOnInteraction: false,
          loop:true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        
        /*breakpoints: {
          360: {
            slidesPerView:,
            
          },
          768: {
            slidesPerView: 2,
            
          },
          1024: {
            slidesPerView: 2,

          },
      }*/
      
})


var swiper = new Swiper(".explors", {
  spaceBetween: 6,
  autoplay: {
    delay: 2900,
    direction: 'vertical',
    disableOnInteraction: false,
    loop: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
          360: {
            slidesPerView:2,
            
          },
          768: {
            slidesPerView: 5,
            
          },
          1024: {
            slidesPerView: 5,

          },
      }

})


console.log('Hello World!');
var sidemeu = document.getElementById('sidemenu');
  

  
    function openemenu(){
    sidemenu.style.right ='100%';
  }
  
  function closemenu(){
        sidemenu.style.right ='0px';
       console.log('ok')

  }
  
  
  var mainImg = document.getElementById('mainImg');
  
  


/*------------------------slider js----*/

