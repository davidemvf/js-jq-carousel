$(".next").click(
  function scorr() {
    var pross = $(".images img.active");
    pross.removeClass("active");

    if (pross.hasClass("last")) {
      $(".first").addClass("active");
    } else {
      pross.next("img").addClass("active");
    }
})

$(".prev").click(
  function scorr() {
    var pross = $(".images img.active");
    pross.removeClass("active");

    if (pross.hasClass("first")) {
      $(".last").addClass("active");
    } else {
      pross.prev("img").addClass("active");
    }
})
