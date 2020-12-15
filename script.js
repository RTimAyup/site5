var isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function() {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

var listItems = document.querySelectorAll("#down__inner #down__item, #down__inner #down__item__two, #pages__inner img, #pages__inner__two img, #pages__inner #pages__item, #pages__inner__two #pages__item__two, #features__inner #features__item, #features__inner #features__item__two");


function scrolling(e) {
    for (var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];

        if (isPartiallyVisible(listItem)) {
            listItem.classList.add("active");
        } else {
            listItem.classList.remove("active");
        }
    }
}


function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}


function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}











































