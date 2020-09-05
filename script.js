$(window).scroll(function() {
    var intFrameWidth = window.innerWidth;
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 860 && intFrameWidth >= 991) {
        //console.log('a');
        $(".navbarfixed").addClass("change");
    } else if (intFrameWidth >= 991) {
        //console.log('a');
        $(".navbarfixed").removeClass("change");
    }
    if (scroll >= 930 && intFrameWidth < 991 && intFrameWidth >= 650) {
        //console.log('a');
        $(".navbarfixed").addClass("change");
    } else if (intFrameWidth < 991 && intFrameWidth >= 650) {
        //console.log('a');
        $(".navbarfixed").removeClass("change");
    }
    if (scroll >= 810 && intFrameWidth < 650 && intFrameWidth >= 576) {
        //console.log('a');
        $(".navbarfixed").addClass("change");
    } else if (intFrameWidth < 650 && intFrameWidth >= 576) {
        //console.log('a');
        $(".navbarfixed").removeClass("change");
    }
    if (scroll >= 1000 && intFrameWidth < 576) {
        //console.log('a');
        $(".navbarfixed").addClass("change");
    } else if (intFrameWidth < 576) {
        //console.log('a');
        $(".navbarfixed").removeClass("change");
    }
});
 
$(window).scroll(function() {
    var intFrameWidth = window.innerWidth;
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 0 && intFrameWidth >= 1199) {
        //console.log('a');
        $(".level1").removeClass("inactive");
        $(".level1").addClass("active");
    } else if (intFrameWidth >= 1199) {
        //console.log('a');
        $(".level1").removeClass("active");
        $(".level1").addClass("inactive");
    }

    if (scroll >= 0 && intFrameWidth < 1199 && intFrameWidth >= 801) {
        //console.log('a');
        $(".level1").removeClass("inactive");
        $(".level1").addClass("active");
    } else if (intFrameWidth < 1199 && intFrameWidth >= 801) {
        //console.log('a');
        $(".level1").removeClass("active");
        $(".level1").addClass("inactive");
    }

    if (scroll >= 0 && intFrameWidth < 801 && intFrameWidth >= 768) {
        //console.log('a');
        $(".level1").removeClass("inactive");
        $(".level1").addClass("active");
    } else if (intFrameWidth < 801 && intFrameWidth >= 768) {
        //console.log('a');
        $(".level1").removeClass("active");
        $(".level1").addClass("inactive");
    }

    if (scroll >= 0 && intFrameWidth < 768 && intFrameWidth >= 600) {
        //console.log('a');
        $(".level1").removeClass("inactive");
        $(".level1").addClass("active");
    } else if (intFrameWidth < 768 && intFrameWidth >= 600) {
        //console.log('a');
        $(".level1").removeClass("active");
        $(".level1").addClass("inactive");
    }

    if (scroll >= 0 && intFrameWidth < 600) {
        //console.log('a');
        $(".level1").removeClass("inactive");
        $(".level1").addClass("active");
    } else if (intFrameWidth < 600) {
        //console.log('a');
        $(".level1").removeClass("active");
        $(".level1").addClass("inactive");
    }
});

$(window).scroll(function() {
    var intFrameWidth = window.innerWidth;
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 1700 && intFrameWidth >= 1199) {
        //console.log('a');
        $(".level2").removeClass("inactive");
        $(".level2").addClass("active");
        $(".level1").removeClass("active");
        $(".level1").addClass("inactive");
    } else if (intFrameWidth >= 1199) {
        //console.log('a');
        $(".level2").removeClass("active");
        $(".level2").addClass("inactive");
    }

    if (scroll >= 1800 && intFrameWidth < 1199 && intFrameWidth >= 801) {
        //console.log('a');
        $(".level2").removeClass("inactive");
        $(".level2").addClass("active");
        $(".level1").removeClass("active");
        $(".level1").addClass("inactive");
    } else if (intFrameWidth < 1199 && intFrameWidth >= 801) {
        //console.log('a');
        $(".level2").removeClass("active");
        $(".level2").addClass("inactive");
    }

    if (scroll >= 2400 && intFrameWidth < 801 && intFrameWidth >= 768) {
        //console.log('a');
        $(".level2").removeClass("inactive");
        $(".level2").addClass("active");
        $(".level1").removeClass("active");
        $(".level1").addClass("inactive");
    } else if (intFrameWidth < 801 && intFrameWidth >= 768) {
        //console.log('a');
        $(".level2").removeClass("active");
        $(".level2").addClass("inactive");
    }

    if (scroll >= 2300 && intFrameWidth < 768 && intFrameWidth >= 600) {
        //console.log('a');
        $(".level2").removeClass("inactive");
        $(".level2").addClass("active");
        $(".level1").removeClass("active");
        $(".level1").addClass("inactive");
    } else if (intFrameWidth < 768 && intFrameWidth >= 600) {
        //console.log('a');
        $(".level2").removeClass("active");
        $(".level2").addClass("inactive");
    }

    if (scroll >= 2500 && intFrameWidth < 600) {
        //console.log('a');
        $(".level2").removeClass("inactive");
        $(".level2").addClass("active");
        $(".level1").removeClass("active");
        $(".level1").addClass("inactive");
    } else if (intFrameWidth < 600) {
        //console.log('a');
        $(".level2").removeClass("active");
        $(".level2").addClass("inactive");
    }
});

$(window).scroll(function() {
    var intFrameWidth = window.innerWidth;
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 3700 && intFrameWidth >= 1199) {
        //console.log('a');
        $(".level3").removeClass("inactive");
        $(".level3").addClass("active");
        $(".level2").removeClass("active");
        $(".level2").addClass("inactive");
    } else if (intFrameWidth >= 1199) {
        //console.log('a');
        $(".level3").removeClass("active");
        $(".level3").addClass("inactive");
    }

    if (scroll >= 4400 && intFrameWidth < 1199 && intFrameWidth >= 801) {
        //console.log('a');
        $(".level3").removeClass("inactive");
        $(".level3").addClass("active");
        $(".level2").removeClass("active");
        $(".level2").addClass("inactive");
    } else if (intFrameWidth < 1199 && intFrameWidth >= 801) {
        //console.log('a');
        $(".level3").removeClass("active");
        $(".level3").addClass("inactive");
    }

    if (scroll >= 5200 && intFrameWidth < 801 && intFrameWidth >= 768) {
        //console.log('a');
        $(".level3").removeClass("inactive");
        $(".level3").addClass("active");
        $(".level2").removeClass("active");
        $(".level2").addClass("inactive");
    } else if (intFrameWidth < 801 && intFrameWidth >= 768) {
        //console.log('a');
        $(".level3").removeClass("active");
        $(".level3").addClass("inactive");
    }

    if (scroll >= 9200 && intFrameWidth < 768 && intFrameWidth >= 600) {
        //console.log('a');
        $(".level3").removeClass("inactive");
        $(".level3").addClass("active");
        $(".level2").removeClass("active");
        $(".level2").addClass("inactive");
    } else if (intFrameWidth < 768 && intFrameWidth >= 600) {
        //console.log('a');
        $(".level3").removeClass("active");
        $(".level3").addClass("inactive");
    }

    if (scroll >= 7400 && intFrameWidth < 600) {
        //console.log('a');
        $(".level3").removeClass("inactive");
        $(".level3").addClass("active");
        $(".level2").removeClass("active");
        $(".level2").addClass("inactive");
    } else if (intFrameWidth < 600) {
        //console.log('a');
        $(".level3").removeClass("active");
        $(".level3").addClass("inactive");
    }
});

$(window).scroll(function() {
    var intFrameWidth = window.innerWidth;
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 5000 && intFrameWidth >= 1199) {
        //console.log('a');
        $(".level4").removeClass("inactive");
        $(".level4").addClass("active");
        $(".level3").removeClass("active");
        $(".level3").addClass("inactive");
    } else if (intFrameWidth >= 1199) {
        //console.log('a');
        $(".level4").removeClass("active");
        $(".level4").addClass("inactive");
    }

    if (scroll >= 5800 && intFrameWidth < 1199 && intFrameWidth >= 801) {
        //console.log('a');
        $(".level4").removeClass("inactive");
        $(".level4").addClass("active");
        $(".level3").removeClass("active");
        $(".level3").addClass("inactive");
    } else if (intFrameWidth < 1199 && intFrameWidth >= 801) {
        //console.log('a');
        $(".level4").removeClass("active");
        $(".level4").addClass("inactive");
    }

    if (scroll >= 7100 && intFrameWidth < 801 && intFrameWidth >= 768) {
        //console.log('a');
        $(".level4").removeClass("inactive");
        $(".level4").addClass("active");
        $(".level3").removeClass("active");
        $(".level3").addClass("inactive");
    } else if (intFrameWidth < 801 && intFrameWidth >= 768) {
        //console.log('a');
        $(".level4").removeClass("active");
        $(".level4").addClass("inactive");
    }

    if (scroll >= 11400 && intFrameWidth < 768 && intFrameWidth >= 600) {
        //console.log('a');
        $(".level4").removeClass("inactive");
        $(".level4").addClass("active");
        $(".level3").removeClass("active");
        $(".level3").addClass("inactive");
    } else if (intFrameWidth < 768 && intFrameWidth >= 600) {
        //console.log('a');
        $(".level4").removeClass("active");
        $(".level4").addClass("inactive");
    }

    if (scroll >= 9500 && intFrameWidth < 600) {
        //console.log('a');
        $(".level4").removeClass("inactive");
        $(".level4").addClass("active");
        $(".level3").removeClass("active");
        $(".level3").addClass("inactive");
    } else if (intFrameWidth < 600) {
        //console.log('a');
        $(".level4").removeClass("active");
        $(".level4").addClass("inactive");
    }
});
