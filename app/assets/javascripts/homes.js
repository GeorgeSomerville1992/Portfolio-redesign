$(function(){
  animationHover(".tada-animate", 'tada')
  animationHover(".wobble-animate",'wobble')
  animationHover(".lightspeed-in-animate",'lightSpeedIn')
  animationHover(".rotate-github-animate","rotateIn")
  animationHover(".rotate-linkedin-animate","rotateIn")
  animationHover(".rotate-tumbler-animate", "rotateIn")
  animationHover(".flash-animate","flash")
    function animationHover(element, animation){
    element = $(element);
    element.hover(
      function() {
        element.addClass('animated ' + animation);
      },
      function(){
        //wait for animation to finish before removing classes
        window.setTimeout( function(){
          element.removeClass('animated ' + animation);
        }, 2000);
      }
    );
  };

  function changeText(){
    $("#changeText")
  }




  function initialise(){
    changeText()

  }
})