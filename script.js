var img = document.createElement("img");
img.src = "images/Sequence-1/1_00029.png";
img.style.position = "absolute";
img.style.margin = "auto";
img.style.top = "0";
img.style.bottom = "0";
img.style.left = "0";
img.style.right = "0";
img.style.height = "auto";
document.getElementById("column2").appendChild(img);
$("#popupContainer").toggle(false);

function zeroPadder(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
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
}

$(window).resize(function() {
    if (window.innerWidth < 1000) {
        $("#navigationBar").toggle(false);
        $("#column2").toggle(false);

    } else {
        $("#navigationBar").toggle(true);
        $("#menuButton").toggleClass("clicked",false);
        $("#column2").toggle(true);
    }
});

$(window).scroll(function(){
    //TODO: check toggle
    let scrollTop = $(window).scrollTop();
    let percentSeparator1 = (scrollTop-$("#separator1").offset().top) / $("#separator1").height();
    if (percentSeparator1 < 0) {
        img.src = "images/Sequence-1/1_00029.png";
    } else if (percentSeparator1 >=0 && percentSeparator1 < 0.5) {
        let frame = 30*(1-(2*percentSeparator1))|0;
        img.src = `images/Sequence-1/1_${zeroPadder(frame,5)}.png`
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
    for (let j=0; j < i; ++j) {
        $(`#navlinkSection${j}`).removeClass("highlighted");
    }
    // highlight
    
});


$("#menuButton").click(function() {
    $("#menuButton").toggleClass("clicked");
    $("#navigationBar").toggle();
});

$(".exitIcon").click(function(){
    $("#popupContainer").toggle(false);
});

$("#popupLink1").click(function(){
    showPopup("#popup1");
});
$("#popupLink2").click(function(){
    showPopup("#popup2");
});
$("#popupLink3").click(function(){
    showPopup("#popup3");
});
$("#popupLink4").click(function(){
    showPopup("#popup4");
});
$("#popupLink5").click(function(){
    showPopup("#popup5");
});
$("#popupLink6").click(function(){
    showPopup("#popup6");
});