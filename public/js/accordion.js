// JavaScript Document

// Initialize accordion functionality
function initAccordion(accordionId) {
  const $accordion = $(`#${accordionId}`);

  // Remove any existing event listeners to prevent duplicates
  $accordion.find(".accordion-toggle").off("click").on("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling

    // Expand or collapse this panel
    $(this).next().slideToggle("fast");

    // Hide the other panels within this accordion instance only
    $accordion.find(".accordion-content").not($(this).next()).slideUp("fast");
  });
}

// Initialize expand/collapse functionality if buttons exist
function initExpandCollapse(accordionId) {
  $(`#expandAll-${accordionId}`).off("click").on("click", function () {
    $(`#${accordionId} .accordion-content`).show();
    $(`#collapseAll-${accordionId}`).show();
    $(this).hide();
  });

  $(`#collapseAll-${accordionId}`).off("click").on("click", function () {
    $(`#${accordionId} .accordion-content`).hide();
    $(this).hide();
    $(`#expandAll-${accordionId}`).show();
  });
}

// Initialize all accordions when the document is ready
$(document).ready(function() {
  $('.accordion').each(function() {
    initAccordion(this.id);
    initExpandCollapse(this.id);
  });
});
