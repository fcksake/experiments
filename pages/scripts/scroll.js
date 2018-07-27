// init controller
var controller = new ScrollMagic.Controller();

// loop through all elements
$('.fade-in').each(function() {
  
  // build a tween
<<<<<<< HEAD
  var tween = TweenMax.from($(this), 0.3, {autoAlpha: 0, scale: 0.5, y: '+=10', ease:Linear.easeNone});
=======
  var tween = TweenMax.from($(this), 0.3, {autoAlpha: 0, scale: 0.5, y: '+=30', ease:Linear.easeNone});
>>>>>>> surface

  // build a scene
  var scene = new ScrollMagic.Scene({
    triggerElement: this
  })
  .setTween(tween) // trigger a TweenMax.to tween
  .addTo(controller);
  
});