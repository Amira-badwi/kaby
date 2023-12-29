$(".owl2").owlCarousel({
  responsiveClass: true,
  loop:true,
  autoplay:true,
  smartSpeed: 1000 ,
  smartSpeed: 300 ,
  autoplayHoverPause: true,

  responsive: {
      0:{
          items:2,
          nav:true ,
          loop:true

      },
      600:{
          items:3,
          nav:true ,
          loop:true

      },

      1000:{
          items:4,
          nav:true,
          loop:true
        } ,
      1100:{
        items:5,
        nav:true,
        loop:true
    
      }
    
  },
});
$(".owl3").owlCarousel({
  responsiveClass: true,
  loop:true,
  autoplay:true,
  smartSpeed: 1000 ,

  autoplayHoverPause: true,

  
  responsive: {
      0:{
          items:2,
          nav:true ,
          loop:true

      },
      1000:{
        items:3,
        loop:true

      },
      1200:{
          items:4,
          loop:true

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


let media =[].slice.call (document.getElementsByClassName("px-media"));

media.forEach(e=>{
   let data= e.getAttribute("data-src") ;
  e.style.backgroundImage = `url("${data}")`;

})

let collapse2 =document.getElementById("collapse2");
let collapse1 =document.getElementById("collapse1");
let collapse3 =document.getElementById("collapse3");
let collapse4 =document.getElementById("collapse4");
function myFunction(x) {
   

    if (x.matches) { 
        collapse2.classList.remove("show")  ;
        collapse1.classList.remove("show")  ;
        collapse3.classList.remove("show")  ;
        collapse4.classList.remove("show")  ;
    } else {
        collapse1.classList.add("show")  ;
        collapse2.classList.add("show")  ;
        collapse3.classList.add("show")  ;
        collapse4.classList.add("show")  ;

    }
  }
  
  var x = window.matchMedia("(max-width: 600px)")
  if(collapse1) {

      myFunction(x) // Call listener function at run time
      x.addListener(myFunction)
  }