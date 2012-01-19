// account-functions.js
function login(email) {
  $.cookie('email', email);
  var gravatar = "http://www.gravatar.com/avatar/" + $.md5(email) + "?s=16px";
  $.cookie('gravatar', gravatar);
  $("#signin-form").hide();
  $("#signedin").show().find(".email").text(email);
  $("#signedin").find(".avatar").attr("src", gravatar);
}

function logout() {
  $.cookie('email', null);
  $.cookie('gravatar', null);
  $("#signin-form").show();
  $("#signedin").hide();
}

$(document).ready(function () {

  if ($.cookie('email')) {
    login($.cookie('email'));
  }

  $("#signin").click(function () {
    var val = $(this).prev("input[type=text]").val();
    if (val) {
      login(val);
    }
    return false;
  });

  $("#logout").click(function () {
    logout();
  });

  $(".details").click(function () {
    window.location.href = "details.html";
  });
});
