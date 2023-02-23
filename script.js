$("#popupContainer").toggle(false);

var img = document.createElement("img");
img.src = "images/_00000.png";
img.style.position = "absolute";
img.style.margin = "auto";
img.style.top = "0";
img.style.bottom = "0";
img.style.left = "0";
img.style.right = "0";
img.style.height = "auto";
document.getElementById("column2").appendChild(img);

function zeroPadder(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

const img_sequence = [];
for (let i = 0; i < 170; ++i) {
    img_sequence.push(`images/_${zeroPadder(i, 5)}.png`)
}


let i = 0;

if (window.scrollY === 0) {
    const initialAnimation = setInterval(function () {
        img.src = img_sequence[i];
        ++i;
        if (i > 36 || window.scrollY !== 0) {
            clearInterval(initialAnimation);
        }
    }, 50);
}


let scrollTop = $(window).scrollTop();

// how far through are we through this div
let percentSeparator1 = (scrollTop - $("#separator1").offset().top) / $("#separator1").height();
let percentSeparator2 = (scrollTop - $("#separator2").offset().top) / $("#separator2").height();
let percentSeparator3 = (scrollTop - $("#separator3").offset().top) / $("#separator3").height();
let percentSeparator4 = (scrollTop - $("#separator4").offset().top) / $("#separator4").height();

console.log(percentSeparator1);
if (window.scrollY === 0) {
    img.src = img_sequence[0];
} else if (percentSeparator1 < 0) {
    img.src = img_sequence[36];
} else if (percentSeparator1 < 1) {
    let frame = 36 + 42 * percentSeparator1 | 0;
    img.src = img_sequence[frame];
} else if (percentSeparator2 < 0) {
    img.src = img_sequence[78];
} else if (percentSeparator2 < 1) {
    let frame = 78 + 39 * percentSeparator2 | 0;
    img.src = img_sequence[frame];
} else if (percentSeparator3 < 0) {
    img.src = img_sequence[117];
} else if (percentSeparator3 < 1) {
    let frame = 117 + 53 * percentSeparator3 | 0;
    img.src = img_sequence[frame];
} else if (percentSeparator4 < 0) {
    img.src = img_sequence[169];
} else {
    img.src = img_sequence[169];
}

if (percentSeparator4 < 0) {
    img.style.opacity = 1;
} else if (percentSeparator4 < 1) {
    img.style.opacity = 1 - percentSeparator4;
} else if (percentSeparator4 >= 1) {
    img.style.opacity = 0;
}


function showPopup(id) {
    $("#popup1").addClass("hidden");
    $("#popup2").addClass("hidden");
    $("#popup3").addClass("hidden");
    $("#popup4").addClass("hidden");
    $("#popup5").addClass("hidden");
    $("#popup6").addClass("hidden");

    $(id).removeClass("hidden");
    $("#popupContainer").toggle(true);
}

//initialize scroll highlight
let scrollBottom = $(window).scrollTop() + $(window).height() - 100;
for (let i = 3; i >= 0; --i) {
    if (scrollBottom >= $(`#section${i}`).offset().top) {
        $(`#navlinkSection${i}`).addClass("highlighted");
        break;
    }
}

if (window.innerWidth < 1000) {
    $("#navigationBar").toggle(false);
    $("#column2").toggle(false);
    $("#selfie").toggle(true);
    $("#img_softdev").toggle(true);
    $("#img_research").toggle(true);
    $("#img_education").toggle(true);
}

$(window).resize(function () {
    if (window.innerWidth < 1000) {
        $("#navigationBar").toggle(false);
        $("#column2").toggle(false);
        $("#selfie").toggle(true);
        $("#img_softdev").toggle(true);
        $("#img_research").toggle(true);
        $("#img_education").toggle(true);
    } else {
        $("#navigationBar").toggle(true);
        $("#menuButton").toggleClass("clicked", false);
        $("#column2").toggle(true);
        $("#selfie").toggle(false);
        $("#img_softdev").toggle(false);
        $("#img_research").toggle(false);
        $("#img_education").toggle(false);
    }
});

$(window).scroll(function () {
    //TODO: check toggle
    let scrollTop = $(window).scrollTop();

    // how far through are we through this div
    let percentSeparator1 = (scrollTop - $("#separator1").offset().top) / $("#separator1").height();
    let percentSeparator2 = (scrollTop - $("#separator2").offset().top) / $("#separator2").height();
    let percentSeparator3 = (scrollTop - $("#separator3").offset().top) / $("#separator3").height();
    let percentSeparator4 = (scrollTop - $("#separator4").offset().top) / $("#separator4").height();

    if (percentSeparator1 < 0) {
        img.src = img_sequence[36];
    } else if (percentSeparator1 < 1) {
        let frame = 36 + 42 * percentSeparator1 | 0;
        img.src = img_sequence[frame];
    } else if (percentSeparator2 < 0) {
        img.src = img_sequence[78];
    } else if (percentSeparator2 < 1) {
        let frame = 78 + 39 * percentSeparator2 | 0;
        img.src = img_sequence[frame];
    } else if (percentSeparator3 < 0) {
        img.src = img_sequence[117];
    } else if (percentSeparator3 < 1) {
        let frame = 117 + 53 * percentSeparator3 | 0;
        img.src = img_sequence[frame];
    } else if (percentSeparator4 < 0) {
        img.src = img_sequence[169];
    }

    if (percentSeparator4 < 0) {
        img.style.opacity = 1;
    } else if (percentSeparator4 < 1) {
        img.style.opacity = 1 - percentSeparator4;
    } else if (percentSeparator4 >= 1) {
        img.style.opacity = 0;
    }

    // highlight navigation links
    let i = 3;
    let scrollBottom = scrollTop + $(window).height() - 100;
    for (i; i >= 0; --i) {
        if (scrollBottom >= $(`#section${i}`).offset().top) {
            $(`#navlinkSection${i}`).addClass("highlighted");
            break;
        } else {
            $(`#navlinkSection${i}`).removeClass("highlighted");
        }
    }
    for (let j = 0; j < i; ++j) {
        $(`#navlinkSection${j}`).removeClass("highlighted");
    }
    // highlight

});


$("#menuButton").click(function () {
    $("#menuButton").toggleClass("clicked");
    $("#navigationBar").toggle();
});

$(".exitIcon").click(function () {
    $("#popupContainer").toggle(false);
});

$("#popupLink1").click(function () {
    showPopup("#popup1");
});
$("#popupLink2").click(function () {
    showPopup("#popup2");
});
$("#popupLink3").click(function () {
    showPopup("#popup3");
});
$("#popupLink4").click(function () {
    showPopup("#popup4");
});
$("#popupLink5").click(function () {
    showPopup("#popup5");
});
$("#popupLink6").click(function () {
    showPopup("#popup6");
});