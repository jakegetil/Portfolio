const swiper = new Swiper('.swiper', {
    
    direction: 'horizontal',
    loop: false,
    effect: 'coverflow',

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    coverflowEffect:{
      rotate: 50,
      modifier: 2,
      slideShadows : true,
      scale: 1
    },

  });
