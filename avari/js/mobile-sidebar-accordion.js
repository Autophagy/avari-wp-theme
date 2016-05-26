document.querySelector('style').textContent +=
  "@media screen and (min-width: 1024px) { \
    #content #secondary .widget-title + * { \
      display: block !important; \
    } \
  } \
  @media screen and (max-width: 1024px) { \
    #content #secondary .widget-dropdown { \
      cursor: pointer !important; \
    } \
    #content #secondary .widget-dropdown-arrow { \
      display: inline !important; \
    } \
    #content #secondary .widget-title + * { \
      display: none; \
    }"

function showMenuItem(e) {
  if ($(window).width() < 1024) {
    var rightPointer = '►'
    var downPointer = '▼';

    var pointerSpan = $(e).find('.widget-dropdown-arrow')[0];
    pointerSpan.innerHTML = pointerSpan.innerHTML == rightPointer ? downPointer : rightPointer;
    $(e).parent().next().slideToggle(400);
  }
}
