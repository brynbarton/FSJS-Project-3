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

// Adding classes to Pun shirts
$color.find("option:eq(0)").addClass("puns");
$color.find("option:eq(1)").addClass("puns");
$color.find("option:eq(2)").addClass("puns");

// Adding classes to Heart shirts
$color.find("option:eq(3)").addClass("heart");
$color.find("option:eq(4)").addClass("heart");
$color.find("option:eq(5)").addClass("heart");

$(".puns").hide();
$(".heart").hide();
$color.prepend($please);
$color.find("option:eq(0)").show();

//Once T-Shirt theme is selected
$design.change(function() {
  if ($design.val() === "js puns") {
    $color.find("option").hide();
    $(".puns").show();
  }
});

$design.change(function() {
  if ($design.val() === "heart js") {
    $color.find("option").hide();
    $(".heart").show();
  }
});
