var openPageWrapper = null;

function intToPxString(num) {
  return num + "px";
}

function togglePage(pageSlug) {
  var wrapper = document.getElementById("wrapper-" + pageSlug);
  var content = document.getElementById("content-" + pageSlug);

  if (openPageWrapper) {
    openPageWrapper.style.height = intToPxString(0);
    openPageWrapper.style.opacity = 0;
  }

  if (openPageWrapper == wrapper) {
    openPageWrapper = null;
  } else {
    wrapper.style.height = intToPxString(content.clientHeight);
    openPageWrapper = wrapper;
    wrapper.style.opacity = 1;
  }
}
