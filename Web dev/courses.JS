// Get the element with ID "scroll"
var scrollElement = document.getElementById("scroll");

 // Add a scroll event listener to the window
    window.addEventListener("scroll", function() {
        // Calculate the scroll position
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Get the header element with the ID "scroll"
        var scrollElement = document.getElementById("scroll");

        // Get the ul element within the nav
        var ulElement = scrollElement.getElementsByTagName("ul")[0];

        // Update the element's style based on the scroll position
        if (scrollPosition > 50) {
            scrollElement.style.height = "50px";
            // Hide the list when scrolled
            ulElement.style.display = "none";
            // Add other style modifications as needed
        } else {
            scrollElement.style.height = "100px";
            // Show the list when not scrolled
            ulElement.style.display = "block";
            // Add other style modifications as needed
        }
    });

var lastScrollTop = 0;
var footer = document.getElementById("footer");

window.addEventListener("scroll", function() {
    var st = window.scrollY || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
        // Scroll down, show the footer
        footer.style.bottom = "0";
    } else {
        // Scroll up, hide the footer
        footer.style.bottom = "-50px";
    }

    lastScrollTop = st;
});


document.addEventListener("DOMContentLoaded", function () {
    // Function to make text bold
    function makeTextBold(elementId) {
        var element = document.getElementById(elementId);
        if (element) {
            element.style.fontWeight = 'bold';
            element.style.transition = 'font-weight 0.1s ease-in-out';
        }
    }

    // Function to reset text to normal font weight
    function resetText(elementId) {
        var element = document.getElementById(elementId);
        if (element) {
            element.style.fontWeight = 'normal';
            element.style.transition = 'font-weight 0.1s ease-in-out';
        }
    }

    // Function to add hover events to an element
    function addHoverEvents(elementId, hoverInFn, hoverOutFn) {
        var element = document.getElementById(elementId);
        if (element) {
            // Add event listener for mouse enter (hover in)
            element.addEventListener("mouseenter", hoverInFn);
            // Add event listener for mouse leave (hover out)
            element.addEventListener("mouseleave", hoverOutFn);
        }
    }

    // Add hover events for 'html-p' element
    addHoverEvents('html-p', function () {
        makeTextBold('html-p');
    }, function () {
        resetText('html-p');
    });

    // Add hover events for 'CSS-p' element
    addHoverEvents('CSS-p', function () {
        makeTextBold('CSS-p');
    }, function () {
        resetText('CSS-p');
    });

    // Add hover events for 'JS-p' element
    addHoverEvents('JS-p', function () {
        makeTextBold('JS-p');
    }, function () {
        resetText('JS-p');
    });
});
