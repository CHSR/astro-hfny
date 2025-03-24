// JavaScript Document

$(document).ready(function ($) {
  $("#accordion")
    .find(".accordion-toggle")
    .click(function () {
      //Expand or collapse this panel
      $(this).next().slideToggle("fast");

      //Hide the other panels
      $(".accordion-content").not($(this).next()).slideUp("fast");
    });
});

$("#expandAll").click(function () {
  $(".accordion-content, #collapseAll").show();
  $("#expandAll").hide();
});

$("#collapseAll").click(function () {
  $(".accordion-content").hide();
  $("#collapseAll").hide();
  $("#expandAll").show();
});
