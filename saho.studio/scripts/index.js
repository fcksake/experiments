$(document).ready(function(e){
  // navigation
  // animer jusque l'endroit désiré
  $('#vertical-nav a').on('click', function(e){
    e.preventDefault();
    var target = $(this).attr('data-number');
    smoothScroll(target);
  })
  function smoothScroll(target){
    // on recupere les coordonnées de l'article
    targetTop = $('#bg4-'+target).offset().top;
    // et la taille de la fenetre
    windowSize = $(window).height();
    // on crée une animation jusqu'a l'élément voulu, en soustrayant la taille de la fenetre et en ajoutant 120px pour bien l'aligner au milieu verticalement
    $('body').animate(
      {'scrollTop' : targetTop - (windowSize / 2) + 120},
      500
    );
  }
  
  // la fonction sera appelée lors du scroll
  $(window).bind('scroll', function(e){
    parallaxScroll();
    focusSelected();
  });
// Placer les images (bg3) de telle sorte qu'ils coincident avec les articles
  // 1 - on recupere les coordonnées des articles en pixels (varie selon la taille de l'ecran)
  coord_art1 = $('#bg4-1').offset().top;
  coord_art2 = $('#bg4-2').offset().top;
  coord_art3 = $('#bg4-3').offset().top;
  coord_art4 = $('#bg4-4').offset().top;
  coord_art5 = $('#bg4-5').offset().top;
  // On applique des le départ aux images un top = coord_art - 0,25%, sauf pour le premier
    $('#bg3-1').css('top', (coord_art1)+'px');
    $('#bg3-2').css('top', (coord_art2*.75)+'px');
    $('#bg3-3').css('top', (coord_art3*.75)+'px');
    $('#bg3-4').css('top', (coord_art4*.75)+'px');
    $('#bg3-5').css('top', (coord_art5*.75)+'px');

  

  // Cette fonction joue avec la propriété 'top' des elements positionnés
  function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    // plus on descend, plus les elements sont en mouvements vers le haut, a des degrés différents: 0 - (scrolled * 0,25 ou 0,5 ou 0,75)
    $('#parallax-bg1').css('top', (0-(scrolled*.25))+'px');
    $('#parallax-bg2').css('top', (0-(scrolled*.5))+'px');
    $('#parallax-bg3').css('top', (0-(scrolled*.75))+'px');
  }
  
  // active la classe .selected quand on scroll dans la zone
  function focusSelected(){
    var scrolling = $(this).scrollTop();
    var halfSize = $(window).height() / 2;
    // pour chaque article, on verifie si on est dans la zone
    $('#parallax-bg4 article').each(function(index){
      index += 1;
      if(scrolling > $(this).offset().top - halfSize && scrolling < $(this).offset().top + halfSize){
      //console.log(index + ' : ' + $(this).offset().top);
      //console.log(scrolling);
        $('a[data-number="'+index+'"] span').addClass('selected');
      }else{
        $('a[data-number="'+index+'"] span').removeClass('selected');
      }
    })
  }
})