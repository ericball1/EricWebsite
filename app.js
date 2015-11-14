/*global $*/

var site = window.location.href,
    active;

function setActiveSite() {
    "use strict";
    if (site.includes("index") === true) {
        active = 1;
    } else if (site.includes("games") === true) {
        active = 2;
    } else if (site.includes("game") === true) {
        active = 2;
    } else if (site.includes("help") === true) {
        active = 3;
    } else {
        active = 1;
    }

    if (active === 1) {
        $('.homeLink').addClass("active");
    } else if (active === 2) {
        $('.calcLink').addClass("active");
    } else if (active === 3) {
        $('.tempLink').addClass("active");
    }
}

$(document).ready(function() {
    "use strict";
    $('.navInsert').load("/template.html nav", function() {
        setActiveSite();
    });
    $('#search-highlight').hideseek({
        nodata: 'No results found'
    });
});
