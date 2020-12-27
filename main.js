$(".search_input").on("focus", function () {
  $(".search_icon").addClass("serch_icon_focus");
  $(".search_input_btn").addClass("search_input_btn_focus");
});

$(".search_input").on("focusout", function () {
  $(".search_icon").removeClass("serch_icon_focus");
  $(".search_input_btn").removeClass("search_input_btn_focus");
});
