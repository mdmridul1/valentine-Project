$('.counter').counterUp({
    delay: 100,
    time: 1000
});
// click slider


$('.main').slick({
    dots:false,
    arrows:true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:'<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  
  });

//   venobox js

new VenoBox({
    selector: '.venobox'
  });

// coundown 

// Set the date we're counting down to
var countDownDate = new Date("2,14, 2023 00:00:00").getTime();

// Update the count down every 1 second

var x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
 
   document.getElementById('days').innerHTML = days
   document.getElementById('hours').innerHTML = hours
   document.getElementById('minutes').innerHTML = minutes
   document.getElementById('seconds').innerHTML = seconds
   

  
   if(days < 10){
    document.getElementById('days').innerHTML =" 0"+ days

   };
   if(hours < 10){
    document.getElementById('hours').innerHTML =" 0"+ hours

   };
   if(minutes < 10){
    document.getElementById('minutes').innerHTML =" 0"+ minutes

   };

   if(seconds < 10){
    document.getElementById('seconds').innerHTML =" 0"+ seconds

   };
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
