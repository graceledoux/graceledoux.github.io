(function($) {

  $('#section-1').on('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
    if (isInView) {
      anime({
        targets: '.box',
        translateX: function() { return anime.random(-50, 50) + 'vw'; },
        translateY: function() { return anime.random(-50, 50) + 'vh'; },
        scale: function() { return anime.random(10,30) / 10; },
        rotate: function() { return anime.random(-360,360); },
        duration: function() { return anime.random(1000,2000); },
        easing: 'easeOutQuad',
        // direction: 'alternate',
        loop: false,
        elasticity: function(el, i, l) {
          return (200 + i * 200);
        },
        begin: function(anim) {
          $(event.target).find('.log h1').html('Started');
        },
        complete: function(anim) {
          $(event.target).find('.log h1').html('Completed');
        }
      });
    }
  });

  $('#section-2').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
    if (isInView) {

      var basicTimeline = anime.timeline({
        direction: 'alternate',
        loop: 3,
        elasticity: 350
      });
      basicTimeline.begin = function(anim) {
        $(event.target).find('.log h1').html('Started');
      };
      basicTimeline.complete = function(anim) {
        $(event.target).find('.log h1').html('Completed');
        $(event.target).find('.log h5').html('100%');
      };
      basicTimeline.run = function(anim) {
        $(event.target).find('.log h5').html(Math.round(anim.progress) + '%');
      }
      basicTimeline
        .add({
          targets: '.button',
          duration: 800,
          height: 20,
          width: 500,
          backgroundColor: '#2B2D2F',
          border: '0',
          borderRadius: 100
        })
        .add({
          targets: '.progress-bar',
          height: 20,
          width: 20,
          opacity: 1,
          duration: 1,
        })
        .add({
          targets: '.progress-bar',
          duration: 800,
          width: 500,
          elasticity: 350
        })
        .add({
          targets: '.button',
          duration: 300,
          height: 20,
          width: 500,
          backgroundColor: '#2B2D2F',
          border: '0',
          borderRadius: 100
        })
        .add({
          targets: '.progress-bar',
          height: 80,
          duration: 300,
          width: 500,
          elasticity: 350
        })
    }
  });

  $('#section-3').on('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
    anime({
      targets: 'button',
      translateX: 250,
      direction: 'alternate',

<<<<<<< HEAD
=======
    // This function runs every time the button is clicked
    var buttonPress = anime({
      autoplay: false,
      backgroundColor: '#FF4477',
      targets: '#section-3 button',
      scale: 0.5,
      loop: 1,
      duration: 200,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      complete: function() {
        buttonPress.reset();
      }
    });
    $('#section-3 button').click(function() {
      buttonPress.play();
>>>>>>> c4eb99ce16c9f93ee50ccaf6f33e8a3df97c43a8
    });
  });

  $('#section-4').one('click', function(event, isInView) {
    $(event.target).addClass('run-animation');
<<<<<<< HEAD
    anime({
  targets: '#buddy',
  backgroundColor: '#FFF',
  borderRadius: ['0px', '50px'],
  easing: 'easeInOutQuad',
});
=======
>>>>>>> c4eb99ce16c9f93ee50ccaf6f33e8a3df97c43a8
  });

  $('#section-5').one('click', function(event, isInView) {
    $(event.target).addClass('run-animation');
<<<<<<< HEAD
anime({
  targets: '#pal',
  translateY:['-200px', '0px', '-150px', '0px', '-100px', '0px', '-50px', '0px',],
  easing: 'easeOutQuad',
  loop: 3,
  gravity: 'easingBounceOut',
});
anime({
  targets: '#pal-shadow',
  opacity: ['.2', '.8', '.3', '.8', '.4', '.8', '.5', '.8',],
  width:['20px', '110px', '50px', '110px', '100px', '110px', '110px', '110px'],
  easing: 'easeOutQuad',
  loop: 3,
});





=======
>>>>>>> c4eb99ce16c9f93ee50ccaf6f33e8a3df97c43a8
  });

})(jQuery);
