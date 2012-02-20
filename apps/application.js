$(document).ready(function () {

  $("a.more").click(function () {
    $(this).parents(".app-description").find("p.more").slideToggle();
  });

  $("#purchase").click(function () {
    var btn = $(this);
    if ($(this).data("purchased")) {
        btn.button("installing");
        window.setTimeout(function () {
          btn.attr("disabled", true).text("installed");
        }, 3000);
    } else {
        btn.button("purchasing");
        window.setTimeout(function () {
          btn.data("purchased", true).button('purchased');
        }, 3000);
    }
  });

  $(".collections .thumbnail").click(function () {
    window.location.href = "collection.html";
  });

  $(".secondary-features .thumbnail").click(function () {
    window.location.href = "details.html";
  });

  $(".categories .category").click(function () {
    window.location.href = "category.html";
  });

  $("a.brand").click(function () {
    window.location.href = "index.html";
  });

});
