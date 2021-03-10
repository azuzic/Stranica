function txt() {
    var print =  document.getElementById("list");
    var fileUrl = 'test.txt';
    fetch(fileUrl)
       .then( r => r.text() )
       .then( t => print.innerHTML=t )
}

function alphaOnly(a) {
    var b = '';
    for (var i = 0; i < a.length; i++) {
        if (a[i] >= 'A' && a[i] <= 'z' || a[i] == " " || a[i] == "-" || a[i] == "'" || a[i] == ",")
          b += a[i];
    }
    return b;
}

function test() {
  var print =  document.getElementById("list");

  var manga = JSON.parse(print.innerHTML);

  manga.forEach((element, index) => {
      console.log(index + ". " + element.name + " Score:" + element.score + " Vol:" + element.vol);
  });
}

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
    $(".library-left").empty();
    $(".library-left").removeClass("library-left-hide");
    $(".library-left").addClass("library-left-show");
    $(".manga-card").removeClass("manga-card-hide");
    $(".manga-card").addClass("manga-card-show");
    $(".option-left-show").addClass("option-left-show-active");

    var print =  document.getElementById("list");

    var manga = JSON.parse(print.innerHTML);

    manga.forEach((element, index) => {
        $("#library").append(
          '<div id="manga_' + index + '" class="manga" onclick="mangaShow(this.id)" onmouseover="mangaFocus(this.id)" onmouseout="mangaUnFocus(this.id)" >' +
            '<img id="hover_manga_' + index + '" class="manga-size" src="pictures/manga/' + alphaOnly(element.jpnname) + '/' + alphaOnly(element.jpnname) + '_vol_1.jpg">' +
            '<h1 id="title_manga_' + index + '" class="collapse">' + element.jpnname + "<br>" + element.engname + '</h1>' +
            '<h1 id="img_manga_' + index + '" class="collapse">' + element.jpnname + '</h1>' +
            '<p id="score_manga_' + index + '" class="collapse">' + element.score + '/10</p>' +
            '<p id="volumes_manga_' + index + '" class="collapse">' + element.vol + '</p>' +
          '</div>'
        )
        /*console.log(index + ". " + element.name + " Score:" + element.score + " Vol:" + element.vol);*/
    });
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
  var id2="#hover_"+id;

  $(".manga-size").removeClass("manga-size-hover");
  $(id2).addClass("manga-size-hover");

}

function mangaUnFocus(id) {
  var id2="#hover_"+id;
  $(id2).removeClass("manga-size-hover");
  $(".manga-size").removeClass("manga-size-hover");
}

function mangaShow(id){
  var id3="title_"+id;
  var id3v2="img_"+id;
  var id4="score_"+id;
  var id5="volumes_"+id;

  var title = document.getElementById(id3).innerHTML;
  var check = document.getElementById("card-title");
  check.innerHTML = title;

  var img = alphaOnly(document.getElementById(id3v2).innerHTML);
  check = document.getElementById("card-img-top");
  check.src = "pictures/manga/"+img+"/"+img+"_vol_1.jpg";
  check = document.getElementById("cur-id");
  check.innerHTML = img;

  var score = document.getElementById(id4).innerHTML;
  check = document.getElementById("manga-score");
  check.innerHTML = score;

  var volumes = document.getElementById(id5).innerHTML;
  check = document.getElementById("manga-volumes");
  check.innerHTML = volumes;

  check = document.getElementById("cur-vol");
  check.innerHTML = 1;

  $(".card-img-top").addClass("manga-img-show");
  $(".card-img-top").removeClass("manga-img-hide");
}

function prevVol() {
  var id = document.getElementById("cur-id").innerHTML;
  var vol = document.getElementById("cur-vol").innerHTML;

  var str = document.getElementById("manga-volumes").innerHTML;
  if (str=="?")
    str = 1;
  str = parseInt(str);

  if (vol>1)
    vol = parseInt(vol)-1;
  else
    vol = str;
  check = document.getElementById("cur-vol");
  check.innerHTML = vol;
  check = document.getElementById("card-img-top");
  check.src = "pictures/manga/"+id+"/"+id+"_vol_"+vol+".jpg";
}

function nextVol() {
  var id = document.getElementById("cur-id").innerHTML;
  var vol = document.getElementById("cur-vol").innerHTML;

  var str = document.getElementById("manga-volumes").innerHTML;
  str = parseInt(str);

  if (vol<str)
    vol = parseInt(vol)+1;
  else
    vol = 1;
  check = document.getElementById("cur-vol");
  check.innerHTML = vol;
  var check = document.getElementById("card-img-top");
  check.src = "pictures/manga/"+id+"/"+id+"_vol_"+vol+".jpg";
}
