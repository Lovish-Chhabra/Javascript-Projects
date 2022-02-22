const swiper = new Swiper('.swiper',{direction:'vertical',loop:true,
observer: true,
observeParents: true,
parallax:true,
pagination:{
    el: '.swiper-pagination',
    clickable: true
},

navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev',
},
});