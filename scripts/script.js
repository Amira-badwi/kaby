$(".owl2").owlCarousel({
  responsiveClass: true,
  responsive: {
      0:{
          items:1,
          nav:true
      },
      500:{
          items:2,
          nav:true
      },
      700:{
        items:3,
        nav:true
    },
      1000:{
          items:4,
          nav:true,
          loop:false
      } ,
      1100:{
        items:5,
        nav:true,
        loop:false
    
      }
    
  },
});
$(".owl3").owlCarousel({
  responsiveClass: true,
  responsive: {
      0:{
          items:1,
          nav:true
      },
      1000:{
        items:2,
        nav:true,
        loop:false
      },
      1200:{
          items:4,
          nav:true,
          loop:false
      } ,
    
  },
});
//////

// 
let medias=[].slice.call (document.getElementsByClassName("px-media"));
if(medias){
  
medias.forEach(e=>{
  let data= e.getAttribute("data-src") ;
 e.style.backgroundImage = `url("${data}")`;

})
}
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent=document.getElementById(cityName);
 
  let parents =tabcontent.parentElement;
parent= parents.querySelectorAll(".tabcontent");
parent_links= parents.querySelectorAll(".tablinks");
parent_links.forEach(plink=>{
  plink.classList.remove("active");
  evt.target.parentElement.classList.add("active");

}
)
  parent.forEach(e=>{
    e.style.display="none";
       
    })
 tabcontent.style.display="block";

 evt.target.classList.add("active") 

}