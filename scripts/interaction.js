// hamburger button
$("#hambutton").click(function() {
  $("#hammenu").removeClass("hidden");
  $("#hambutton").addClass("hidden");
});

$("#closeham").click(function() {
  $("#hammenu").addClass("hidden");
  $("#hambutton").removeClass("hidden")
});


// Gallery filter
$("#filter-select").change(function() {
    if($(this).val()=="cupcakes") {
      $(".gallery-image:not(.cupcakes)").addClass("hidden");
      $(".cupcakes").removeClass("hidden");
    }
    else if($(this).val()=="cakes") {
      $(".gallery-image:not(.cakes)").addClass("hidden");
      $(".cakes").removeClass("hidden");
    }
    else if($(this).val()=="formal") {
      $(".gallery-image:not(.formal)").addClass("hidden");
      $(".formal").removeClass("hidden");
    }
    else if($(this).val()=="fun") {
      $(".gallery-image:not(.fun)").addClass("hidden");
      $(".fun").removeClass("hidden");
    }
    else if($(this).val()=="show-all") {
      $(".gallery-image").removeClass("hidden");
    }
})


// Gallery Modal and Slideshow
$(".gallery-image").click(function() {
  var classFromId = "."+this.id;
  $("#modal-container").removeClass("hidden");
  $(classFromId+".first").removeClass("hidden");

  let SLIDES = $(".slides >"+classFromId);

  function showSlide(num) {
    index = num - 1;
    let currentSlide = SLIDES.eq(index);
    SLIDES.addClass("hidden");
    currentSlide.removeClass("hidden");
  };

  function nextSlide() {
    let nextNum = SLIDES.index($(classFromId+":not(.hidden)")) + 1 + 1;
    if (nextNum > SLIDES.length) {
      nextNum = 1;
    }
    showSlide(nextNum);
  };

  function prevSlide() {
    let prevNum = SLIDES.index($(classFromId+":not(.hidden)")) - 1 + 1;
    if (prevNum <= 0) {
      prevNum = SLIDES.length;
    }
    showSlide(prevNum);
  };

  $("#slideshow-right").click(function() {
    nextSlide();
  });

  $("#slideshow-left").click(function() {
    prevSlide();
  });
  $("#modal-close-button").click(function() {
    $("#modal-container").addClass("hidden");
    $("[class*='project-']").addClass("hidden");
    $("#slideshow-right").unbind("click");
    $("#slideshow-left").unbind("click");
    $("#modal-close-button").unbind("click");
  });
});
