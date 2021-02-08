function left() {
  var checkLeft = document.getElementById("check-left").innerHTML;
  var checkRight = document.getElementById("check-right").innerHTML;
  if (checkLeft!=0 && checkRight!=0) {
    $(".div-right").removeClass("fixed");
    $(".div-left").removeClass("fixed");

    $(".div-right").addClass("transition");
    $(".title-right").addClass("hide");
    $(".back-right").addClass("hide");
    $(".title-left").addClass("title-left-top");
    $(".title-left").removeClass("title-left");
    $(".title-right").removeClass("show");
    $(".back-right").removeClass("show");

    $(".img-left").addClass("img-left-hover");

    $(".option-left-hide").addClass("option-left-show");
    $(".option-left-show").removeClass("option-left-hide");

    $(".title-dark-hide-left").addClass("title-dark-show-left");
    $(".title-dark-show-left").removeClass("title-dark-hide-left");
  }
}

function deleteleft() {
  var checkLeft = document.getElementById("check-left").innerHTML;
  var checkRight = document.getElementById("check-right").innerHTML;
  if (checkLeft!=0 && checkRight!=0) {
    $(".div-right").removeClass("fixed");
    $(".div-left").removeClass("fixed");

    $(".div-right").removeClass("transition");
    $(".title-right").removeClass("hide");
    $(".back-right").removeClass("hide");
    $(".title-left-top").addClass("title-left");
    $(".title-left").removeClass("title-left-top");
    $(".title-right").addClass("show");
    $(".back-right").addClass("show");

    $(".img-left").removeClass("img-left-hover");

    $(".option-left-show").addClass("option-left-hide");
    $(".option-left-hide").removeClass("option-left-show");

    $(".title-dark-show-left").addClass("title-dark-hide-left");
    $(".title-dark-hide-left").removeClass("title-dark-show-left");
  }
}

function right() {
  var checkLeft = document.getElementById("check-left").innerHTML;
  var checkRight = document.getElementById("check-right").innerHTML;
  if (checkLeft!=0 && checkRight!=0) {
    $(".div-right").removeClass("fixed");
    $(".div-left").removeClass("fixed");

    $(".div-left").addClass("transition");
    $(".title-left").addClass("hide");
    $(".back-left").addClass("hide");
    $(".title-right").addClass("title-right-top");
    $(".title-right").removeClass("title-right");
    $(".title-left").removeClass("show");
    $(".back-left").removeClass("show");

    $(".img-right").addClass("img-right-hover");

    $(".option-right-hide").addClass("option-right-show");
    $(".option-right-show").removeClass("option-right-hide");

    $(".title-dark-hide-right").addClass("title-dark-show-right");
    $(".title-dark-show-right").removeClass("title-dark-hide-right");
  }
}

function deleteright() {
  var checkLeft = document.getElementById("check-left").innerHTML;
  var checkRight = document.getElementById("check-right").innerHTML;
  if (checkLeft!=0 && checkRight!=0) {
    $(".div-right").removeClass("fixed");
    $(".div-left").removeClass("fixed");
    $(".title-dark-show-right").addClass("title-dark-hide-right");
    $(".title-dark-hide-right").removeClass("title-dark-show-right");

    $(".div-left").removeClass("transition");
    $(".title-left").removeClass("hide");
    $(".back-left").removeClass("hide");
    $(".title-right-top").addClass("title-right");
    $(".title-right").removeClass("title-right-top");
    $(".title-left").addClass("show");
    $(".back-left").addClass("show");

    $(".img-right").removeClass("img-right-hover");

    $(".option-right-show").addClass("option-right-hide");
    $(".option-right-hide").removeClass("option-right-show");
  }
}
function disableRight() {
  var check = document.getElementsByClassName('manga-card-show');
  if (check.length == 0) {
    var get1 = document.getElementById("check-left");
    var get2 = document.getElementById("check-right");
    if (get1.innerHTML!=0 || (get1.innerHTML==1 && get2.innerHTML==1)) {
      get2.innerHTML = 0;
      $(".div-right").addClass("fixed");
    }
  }
}
function disableLeft() {
  var get1 = document.getElementById("check-left");
  var get2 = document.getElementById("check-right");
  if (get2.innerHTML!=0 || (get1.innerHTML==1 && get2.innerHTML==1)) {
    get1.innerHTML = 0;
    $(".div-left").addClass("fixed");
  }
}
function enableLeft() {
  var check = document.getElementsByClassName('manga-card-show');
  if (check.length == 0) {
    var get1 = document.getElementById("check-left");
    var get2 = document.getElementById("check-right");
    if (get2.innerHTML!=0 && (get1.innerHTML!=1 || get2.innerHTML!=1)) {
      get1.innerHTML = 1;
      get2.innerHTML = 1;
      deleteleft();
      right();
    }
  }
}
function enableRight() {
  var get1 = document.getElementById("check-left");
  var get2 = document.getElementById("check-right");
  if (get1.innerHTML!=0 && (get1.innerHTML!=1 || get2.innerHTML!=1)) {
    get1.innerHTML = 1;
    get2.innerHTML = 1;
    deleteright();
    left();
  }
}

function showLibrary() {
  var check = document.getElementsByClassName('library-left-hide');
  if (check.length>0) {
    $(".library-left").removeClass("library-left-hide");
    $(".library-left").addClass("library-left-show");
    $(".manga-card").removeClass("manga-card-hide");
    $(".manga-card").addClass("manga-card-show");

    $(".option-left-show").addClass("option-left-show-active");
  }
  else {
    $(".library-left").addClass("library-left-hide");
    $(".library-left").removeClass("library-left-show");
    $(".manga-card").addClass("manga-card-hide");
    $(".manga-card").removeClass("manga-card-show");

    $(".option-left-show").removeClass("option-left-show-active");
  }

}

function mangaFocus(id) {
  var id2="#manga"+id;
  var id3="p_manga"+id;
  var id4="manga_score"+id;
  var id5="manga_volumes"+id;
  $(".manga-size").removeClass("manga-size-hover");
  $(id2).addClass("manga-size-hover");
  var check = document.getElementById("card-img-top");
  check.src = "pictures/manga/manga"+id+".jpg";
  var title = document.getElementById(id3).innerHTML;
  check = document.getElementById("card-title");
  check.innerHTML = title;
  var score = document.getElementById(id4).innerHTML;
  check = document.getElementById("manga-score");
  check.innerHTML = score;
  var volumes = document.getElementById(id5).innerHTML;
  check = document.getElementById("manga-volumes");
  check.innerHTML = volumes;
  check = document.getElementById("cur-vol");
  check.innerHTML = 1;
  check = document.getElementById("cur-id");
  check.innerHTML = id;
  $(".card-img-top").addClass("manga-img-show");
  $(".card-img-top").removeClass("manga-img-hide");
}
function mangaUnFocus(id) {
  var id2="#manga"+id;
  $(id2).removeClass("manga-size-hover");
  $(".manga-size").removeClass("manga-size-hover");
}

function prevVol() {
  var id = document.getElementById("cur-id").innerHTML;
  var vol = document.getElementById("cur-vol").innerHTML;

  var str = document.getElementById("manga-volumes").innerHTML;
  str = str.substring(2);
  str = parseInt(str.replace(/[^0-9]/g, ''));

  if (vol>1)
    vol = parseInt(vol)-1;
  else
    vol = str;
  check = document.getElementById("cur-vol");
  check.innerHTML = vol;

  check = document.getElementById("card-img-top");
  if (vol !=1 )
    check.src = "pictures/manga/manga"+id+vol+".jpg";
  else
    check.src = "pictures/manga/manga"+id+".jpg";
}

function nextVol() {
  var id = document.getElementById("cur-id").innerHTML;
  var vol = document.getElementById("cur-vol").innerHTML;

  var str = document.getElementById("manga-volumes").innerHTML;
  str = str.substring(2);
  str = parseInt(str.replace(/[^0-9]/g, ''));

  if (vol<str)
    vol = parseInt(vol)+1;
  else
    vol = 1;
  check = document.getElementById("cur-vol");
  check.innerHTML = vol;
  var check = document.getElementById("card-img-top");
  check.src = "pictures/manga/manga"+id+".jpg";

  check = document.getElementById("card-img-top");
  if (vol !=1 )
    check.src = "pictures/manga/manga"+id+vol+".jpg";
  else
    check.src = "pictures/manga/manga"+id+".jpg";
}
