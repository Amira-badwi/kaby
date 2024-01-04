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
  


///
$(function(){
	$("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 500,
        onStepChanging: function (event, currentIndex, newIndex) { 
            if ( newIndex === 1 ) {
                $('.steps ul').addClass('step-2');
            } else {
                $('.steps ul').removeClass('step-2');
            }
            if ( newIndex === 2 ) {
                $('.steps ul').addClass('step-3');
            } else {
                $('.steps ul').removeClass('step-3');
            }

            if ( newIndex === 3 ) {
                $('.steps ul').addClass('step-4');
                $('.actions ul').addClass('step-last');
                const box = document.querySelectorAll("[name='payment']");
          if(box){
              box.forEach(e=>{     
                e.addEventListener("click" ,()=>{
                  console.log(e);
                box.forEach (ele=>{
                  let s= ele.getAttribute("id") ;
                  let selected =document.querySelector(`div#${s}`) ;
                  if(selected){
                              selected.classList.add("d-none") ;
                              selected.classList.remove("d-block") ;

                            }
            
                })
                let check= e.getAttribute("id") ;

                let cheked =document.querySelector(`div#${check}`) ;
                if(cheked){
                  cheked.classList.add("d-block") ;
                  cheked.classList.remove("d-none") ;
                }

          })
                })
              }
            } else {
                $('.steps ul').removeClass('step-4');
                $('.actions ul').removeClass('step-last');
            }
            if ( newIndex === 4 ) {
              $('.steps ul').removeClass('step-5');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-5');
                $('.actions ul').removeClass('step-last');
            }
            if (currentIndex == 3) {
              var $input = $('<button type="submit" class="btn btn-success btn-lg">تاكيد الدفع <button/>');
              $input.appendTo($('ul[aria-label=Pagination]'));
          } else {
              $('ul[aria-label=Pagination] input[value="Submit"]').remove();
          }
            return true; 
        },
        labels: {
            finish: "Order again",
            next: "Next",
            previous: "Previous"
        }
    });
    // Custom Steps Jquery Steps
    $('.wizard > .steps li a').click(function(){
    	$(this).parent().addClass('checked');
		$(this).parent().prevAll().addClass('checked');
		$(this).parent().nextAll().removeClass('checked');
    });
    // Custom Button Jquery Steps
    $('.forward').click(function(){
    	$("#wizard").steps('next');
    })
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    })
    // Checkbox
    $('.checkbox-circle label').click(function(){
        $('.checkbox-circle label').removeClass('active');
        $(this).addClass('active');
    })
})
