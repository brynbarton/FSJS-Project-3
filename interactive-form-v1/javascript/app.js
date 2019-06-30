$("#name").focus();
$("#other-title").hide();

//Global variable
const $design = $("#design");
const $color = $("#color");
const $totalCost = $("<span></span>");
let $tac = "0";
const $input = $("input:checkbox");

// Hiding 'Select Theme' from menu
$design.find("option:eq(0)").hide();

// Hiding T-Shirt color options
const $selectTheme = $("<option>Please select a T-Shirt Theme</option>");
$color.find("option").hide();
$color.prepend($selectTheme);
$selectTheme.show();
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

//activities

//create an element to display the total activities cost
$(".activities").prepend($totalCost);

//listen for changes in the activity section
$(".activities")
  .find("input")
  .change(function(e) {
    const target = e.target; // Dom 'input' element that was just clicked
    const targetParent = e.target.parentNode.textContent; // Text content of parent label element
    const costFinder = "$";
    const costIndex = targetParent.indexOf(costFinder);
    const cost = targetParent.slice(costIndex + 1);
    const dash = targetParent.indexOf("—");
    const comma = targetParent.indexOf(",");
    const timeNday = targetParent.slice(dash + 2, comma);
    if ($(e.target).prop("checked") === true) {
      //add the cost of the currently clicked activity
      $tac = parseInt($tac) + parseInt(cost);
    } else {
      //subtract the cost of the currently clicked activity
      $tac = parseInt($tac) - parseInt(cost);
    }
    $totalCost.text("Total Cost: $" + $tac);

    //When an activity is checked, disable any activity that occurs at the same day and time
    //(i.e. "conflicting activities") without disabling the activity that was just checked.
    let i;
    let morning = targetParent.indexOf("9a");
    let afternoon = targetParent.indexOf("1p");
    for (i = 0; i < $input.length; i++) {
      if (
        $input[i].parentNode.textContent.indexOf("9a") !== -1 &&
        $input[i].parentNode.textContent.indexOf("9a") ===
          e.target.parentNode.textContent.indexOf("9a")
      ) {
        e.target.prop("disabled", "true");
      }
    }
    //And when an activity is unchecked, you want to enable any conflicting activities.
  });
//update and display the total activity cost,
//and disable conflicting activities
