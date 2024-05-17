// js for navbar and dropdown navbar start

$(document).ready(function () {
  // Function to check if the device width is 768px or less
  function isMobile() {
      return window
          .matchMedia("(max-width: 768px)")
          .matches;
  }

  // Function to add mobile event listeners
  function addMobileListeners() {
      console.log("Adding mobile listeners");

      $(".res-nav img").on("click.mobile", function () {
          $(".rnn-wrap").slideToggle(400);
      });

      $(".rn-item > ul > li").on("click.mobile", function () {
          $(".nav-drop").slideToggle(400);
      });

      $(document).on("click.mobile", function (event) {
          var $target = $(event.target);
          if (!$target.closest('.res-nav').length && !$target.closest('.rnn-wrap').length && !$target.closest('.nav-drop').length) {
              $(".rnn-wrap").slideUp(400);
              $(".nav-drop").slideUp(400);
          }
      });

      // Prevent clicks inside dropdown from closing it
      $(".rnn-wrap, .nav-drop").on("click.mobile", function (event) {
          event.stopPropagation();
      });
  }

  // Function to remove mobile event listeners
  function removeMobileListeners() {
      console.log("Removing mobile listeners");

      $(".res-nav img").off(".mobile");
      $(".rn-item > ul > li").off(".mobile");
      $(document).off(".mobile");
      $(".rnn-wrap, .nav-drop").off(".mobile");
  }

  // Variable to track if listeners are added
  let mobileListenersAdded = false;

  // Initialize listeners based on screen size
  function initListeners() {
      if (isMobile() && !mobileListenersAdded) {
          addMobileListeners();
          mobileListenersAdded = true;
      } else if (!isMobile() && mobileListenersAdded) {
          removeMobileListeners();
          mobileListenersAdded = false;
      }
  }

  // Initial check
  initListeners();

  // Debounce function to limit the rate at which a function can fire
  function debounce(func, wait) {
      let timeout;
      return function () {
          clearTimeout(timeout);
          timeout = setTimeout(func, wait);
      };
  }

  // Listen for window resize and update listeners accordingly, with debounce
  $(window).resize(debounce(function () {
      initListeners();
  }, 250));
});


// js for navbar and dropdown navbar end



  var splide = new Splide( '.splide',{
    arrows:false,
    perPage: 1,
    type   : 'loop',
  } );
  splide.mount();


AOS.init();

