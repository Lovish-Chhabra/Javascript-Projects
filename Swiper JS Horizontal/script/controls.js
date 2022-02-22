const swiper = new Swiper('.swiper',{direction:'horizontal',loop:true,
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
// scrollbar:{
//     el: '.swiper-scrollbar',
// },
});