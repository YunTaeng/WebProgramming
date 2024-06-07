jQuery(document).ready(function($) {
   var didScroll = false;
   var didCenter = false;
   var divList = $('.myContent'); //find divList
   var button = $('.menuButton'); //find menuButtonList

   button[0].style.backgroundColor = "gray"; //top button set backgroundColor

   divList[0].style.background = "rgb(230,230,230)"; //top div set backgroundColor

   //if scroll
   $(window).scroll(function(event) {
      didScroll = true;
   });

   //0.25s interval
   setInterval(function() {
      if(didScroll) {
         hasScrolled();
         didScroll = false;
      }
   }, 250);

   //set function
   function hasScrolled() {
      //get scroll height
      var scrollValue = $(document).scrollTop();

      //get current div idx
      var idx = 0;
      for(var i=0;i<divList.length;i++) {
         var height = window.pageYOffset + divList[i].getBoundingClientRect().top - 400;

         if(scrollValue >= height) {
            idx = i;
         }
      }

      //if current scroll == Education
      if(idx == 1 && !didCenter) {
         var center = $('.toRect');
         var left = $('.leftDiv');
         var right = $('.rightDiv');

         center.addClass("centerRect");
         left[0].classList.add('leftDivAnimate');
         right[0].classList.add('rightDivAnimate');
         left[1].classList.add('leftDivAnimate');
         right[1].classList.add('rightDivAnimate');

         //add class so they did animation

         didCenter = true;
      }

      //initialize div backgroundColor
      for(var i=0;i<divList.length;i++) {
         divList[i].style.backgroundColor = "white";
      }

      //set current scroll div backgroundColor
      divList[idx].style.background = "rgb(230,230,230)";
   }

   //if button click
   $('.menuButton').click(function(event) {
      var button = $('.menuButton');

      //initialize button backgroundColor
      for(var i=0;i<4;i++) {
         button[i].style.backgroundColor = "black";
      }

      //click button css change
      $(this).css("backgroundColor", "gray", "opacity", "0.8");

      //remove event
      event.preventDefault();
      $('html, body').animate({
         //do animate
         scrollTop:$(this.hash).offset().top - 300
      }, 400);
   });
});
