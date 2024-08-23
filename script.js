const shareItem = document.querySelector(".share-item");
const tooltipDesktop = document.querySelector(".tooltip-desktop");
const tooltipMobile = document.querySelector(".tooltip-mobile");

let hideTimeout;

function showTooltip() {
  clearTimeout(hideTimeout);

  if (window.innerWidth <= 375) {
    tooltipMobile.classList.remove("hidden");
    tooltipDesktop.classList.add("hidden");
  } else {
    tooltipDesktop.classList.remove("hidden");
    tooltipMobile.classList.add("hidden");
  }
}

function hideTooltip() {
  hideTimeout = setTimeout(() => {
    if (window.innerWidth <= 375) {
      tooltipMobile.classList.add("hidden");
    } else {
      tooltipDesktop.classList.add("hidden");
    }
  }, 500);
}

shareItem.addEventListener("mouseover", showTooltip);
shareItem.addEventListener("mouseout", hideTooltip);

tooltipDesktop.addEventListener("mouseover", showTooltip);
tooltipDesktop.addEventListener("mouseout", hideTooltip);
tooltipMobile.addEventListener("mouseover", showTooltip);
tooltipMobile.addEventListener("mouseout", hideTooltip);
