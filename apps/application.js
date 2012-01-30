$(document).ready(function () {
  $("a.more").click(function () {
    $(this).parents(".app-description").find("p.more").slideToggle();
  });
});
