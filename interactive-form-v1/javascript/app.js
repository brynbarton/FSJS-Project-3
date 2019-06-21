$("#name").focus();
$("#other-title").hide();

const $design = $("#design");
const $color = $("#color");

// Hiding 'Select Theme' from menu
$design.find("option:eq(0)").hide();

// Hiding T-Shirt color options

const $please = $("<option>Please select a T-Shirt Theme</option>").addClass(
  "defaultColor"
);
$color.find("option").hide();
$color.prepend($please);
$please.show();
$color.find("option:eq(0)").attr("selected", "select");

// Adding classes to Pun shirts
$color.find("option:eq(1)").addClass("puns");
$color.find("option:eq(2)").addClass("puns");
$color.find("option:eq(3)").addClass("puns");

// Adding classes to Heart shirts
$color.find("option:eq(4)").addClass("heart");
$color.find("option:eq(5)").addClass("heart");
$color.find("option:eq(6)").addClass("heart");

//Once T-Shirt theme is selected
$design.change(function() {
  if ($design.val() === "js puns") {
    $color.find("option").hide();
    $(".puns").show();
    $color.find("option:eq(1)").attr("selected", "puns");
  }
});

$design.change(function() {
  if ($design.val() === "heart js") {
    $color.find("option").hide();
    $(".heart").show();
    $color.find("option:eq(4)").attr("selected", "hearts");
  }
});
