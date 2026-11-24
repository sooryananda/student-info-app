document.addEventListener("DOMContentLoaded", function () {
  var showDetailsBtn = document.getElementById("showDetailsBtn");
  var detailsOutput = document.getElementById("detailsOutput");

  if (!showDetailsBtn || !detailsOutput) {
    return;
  }

  var detailsText = "Student details are fully loaded and verified.";
  var isVisible = false;

  showDetailsBtn.addEventListener("click", function () {
    isVisible = !isVisible;
    detailsOutput.textContent = isVisible ? detailsText : "";
    showDetailsBtn.textContent = isVisible ? "Hide Details" : "Show Details";
    showDetailsBtn.setAttribute("aria-expanded", String(isVisible));
  });
});
