(function($){

    $.fn.extend({

        addTemporaryClass: function(className, duration) {
            var elements = this;
            setTimeout(function() {
                elements.removeClass(className);
            }, duration);

            return this.each(function() {
                $(this).addClass(className);
            });
        }
    });

})(jQuery);

function addBox() {
  var class1 = document.getElementsByClassName('custom-submit');
  var class2 = document.getElementsByClassName('custom-text-input');
  var class3 = document.getElementsByClassName('custom-text-input2');
  var class4 = document.getElementsByClassName('custom-text-input3');
  if (class1.length > 0 || class2.length > 0 || class3.length > 0 || class4.length > 0 ) {
    $(".active_box").addClass("custom-shadow2");
    $(".alert_box").removeClass("collapse");
    setTimeout(function() {
      $(".alert_box").addClass('collapse');
    }, 1000);
  }
  else {
    $(".boxes").prepend(
      '<div id="boxnumber_zero" class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 p-2">'+
        '<div id="box" class="custom-shadow rounded active_box">'+

          '<div class="container-fluid m-0 custom-border change_image check_image img-pad text-center frame">'+
              '<label for="imgname" class="custom-submit">Choose Image</label>'+
              '<input id="imgname" name="file1" type="file" class="collapse"></input>'+
              '<input type="submit" class="button mt-4 ml-2 custom-submit" onclick="addBoxImage()">'+
          '</div>'+

          '<div class="container-fluid m-0 text-right">'+

            '<p class="change_naslov pt-2 pl-2 pr-2 text-center">'+
              '<input id="naslov" placeholder="Naslov" type="text" class="text-center text-light custom-text-input" maxlength="50"></input>'+
            '</p>'+

            '<p id="opis2" class="change_opis pl-2 pr-2 text-light text-center" style="font-weight: normal;">'+
              '<textarea id="opis" placeholder="Opis" type="text" class="text-center text-light custom-text-input2" maxlength="200" rows="5" cols="25"></textarea>'+
            '</p>'+

            '<div class="change_index pb-3 text-center">'+
              '<a class="button custom-done" onclick="boxDone()">Done</a>'+
              '<a id="zero" class="ml-2 button custom-done" onclick="boxDelete()">Delete Box</a>'+
            '</div>'+

          '</div>'+
        '</div>'+
      '</div>'
    )
  }
}

function addBoxImage() {
  var fullPath = document.getElementById('imgname').value;
  if (fullPath == "") {
    alert('Choose image!');
  }
  else {
    if (fullPath) {
      var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
      var filename = fullPath.substring(startIndex);
      if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
          filename = filename.substring(1);
      }
    }
      $(".change_image").html(
        '<span class="helper"></span><img id="size" class="rounded mx-auto" src="foto/' + filename + '" alt="' + filename + '"width="100%">'+
        '<div style="position:absolute;top:60%; left:0;" class="container-fluid text-center m-0 p-0 change_image_button">'+
          '<button class="button custom-submit relative m-0" onclick="changeImg()">Change Image</button>'+
        '</div>'
    )
      $(".change_image").addClass("p-0");
      $(".check_image").addClass("check_image2");
      $(".change_image").removeClass("custom-border");
      $(".check_image").removeClass("check_image");
  }
}

function boxDone() {
  var image = false;
  var image_button = false;
  var id = document.getElementById(index);
  var check = document.getElementsByClassName('check_image');
  if (check.length > 0) {
    var fullPath = document.getElementById('imgname').value;
  }
  var check9 = document.getElementsByClassName('check_image2');
  if (check9.length > 0) {
    image = true;
  }
  var check10 = document.getElementsByClassName('change_image_button');
  if (check10.length > 0) {
    image_button = true;
  }
  if (image != false || image_button == true) {
    var index = 1;
      do {
        var id = document.getElementById(index);
        if (id == null) {
          $(".change_index").empty();
          $(".change_index").removeClass("text-center");
          $(".check_index").removeClass("check_index");
          $(".change_index").addClass("pt-0");
          $(".change_index").addClass("m-0");
          $(".change_index").append('<a id="'+ index +'" class="button custom-done pr-2 index" onclick="boxEdit(this.id)">Edit</a>')
          $(".change_index").addClass("text-right");
          break;
          }
        else {
          index++;
        }
      } while (id !=null);
    }
  if (image != false || image_button == true) {
    var naslov = document.getElementById('naslov').value;
    $(".change_naslov").empty();
    $(".change_naslov").removeClass("pt-2");
    $(".change_naslov").removeClass("pl-2");
    $(".change_naslov").removeClass("pr-2");
    $(".change_naslov").addClass("p-0")
    $(".change_naslov").addClass("m-0")
    $(".change_naslov").html('<h3 id="naslov_'+ index +'" class=" naslov_'+ index +' p-3 text-light text-center">' + naslov + '</h3>')
  }
  if (image != false || image_button == true) {
    var opis = document.getElementById('opis').value;
    $(".change_opis").empty();
    $(".change_opis").removeClass("pb-2");
    $(".change_opis").removeClass("pl-2");
    $(".change_opis").removeClass("pr-2");
    $(".change_opis").addClass("pb-3");
    $(".change_opis").html(opis);
  }
  var check5 = document.getElementById(fullPath);
  if (check5 == null && image == false && image_button == false) {
    alert('Choose image!');
  }
  else {

          var test = document.getElementsByClassName('index')[0].id;
          var test3 = ('opis_' + test);
          var test4 = ('box_' + test);
          var boxnumber = ("boxnumber_" + test);
          var size = ("size_" + test);
          var e2 = document.getElementById("opis2");
          var e4 = document.getElementById("box");
          var boxx= document.getElementById("boxnumber_zero");
          $(".change_image_button").remove();
          $(".change_image").addClass('change_image_' + test);
          $(".change_image").addClass('bg-tr');
          $(".change_image").removeClass("change_image");
          $(".change_naslov").addClass('change_naslov_' + test)
          $(".change_naslov").removeClass("change_naslov");
          $(".change_opis").addClass('opis_' + test);
          $(".change_opis").removeClass("change_opis");
          $(".change_index").addClass('change_index_' + test);
          $(".change_index").removeClass("change_index");
          if (e2!=null) {
            e2.id = test3;
          }
          if (e4!=null) {
            e4.id = test4;
          }
          if (boxx!=null) {
            boxx.id = boxnumber;
          }
          $(".check_image2").removeClass("check_image2");
          $(".index").removeClass("index");
          $(".active_box").addClass("inactive_box");
          $(".active_box").removeClass("custom-shadow2");
          $(".active_box").removeClass("active_box");

          var img = document.getElementById('size');
          img.id=size;
          var img2 = document.getElementById(size);
          //or however you get a handle to the IMG
          var width = img2.clientWidth;
          var height = img2.clientHeight;
          if (height>500) {
            img2.style.height = '100%';
            img2.style.width = 'auto';
          }
        }
}

function boxEdit(index) {
  var class1 = document.getElementsByClassName('custom-submit');
  var class2 = document.getElementsByClassName('custom-text-input');
  var class3 = document.getElementsByClassName('custom-text-input2');
  var class4 = document.getElementsByClassName('custom-text-input3');
  if (class1.length > 0 || class2.length > 0 || class3.length > 0 || class4.length > 0 ) {
    $(".active_box").addClass("custom-shadow2");
    $(".alert_box").removeClass("collapse");
    setTimeout(function() {
      $(".alert_box").addClass('collapse');
    }, 1000);
  }
  else {
    var id = index;
    var naslov_class = ".change_naslov_" + id;
    var naslov_class2 = ".naslov_" + id;
    var opis_class = ".opis_" + id;
    var index_class = ".change_index_"+ id;
    var opis_id = "opis_" + id;
    var box_id = "box_" + id;
    var naslov_id = "naslov_" + id;
    var size = "size_" + id;
    var boxnumber = "boxnumber_" + id;
    var naslov_alt = document.getElementById(naslov_id).textContent;
    var opis_alt = document.getElementById(opis_id).textContent;
    var image_class = ".change_image_" + id;
    $(image_class).addClass('custom-border');
    /*$(image_class).addClass('check_image');*/
    $(image_class).removeClass('p-0');
    $(image_class).append(
      '<div style="position:absolute;top:60%; left:0;" class="container-fluid text-center m-0 p-0 change_image_button">'+
        '<button id='+ id +' class="button custom-submit relative m-0" onclick="changeImg2(this.id)">Change Image</button>'+
      '</div>'
    )
    $(image_class).addClass('change_image');
    $(image_class).removeClass("bg-tr");
    $(image_class).addClass("p-0");
    $(image_class).removeClass("change_image_" + id);

    $(naslov_class).empty();
    $(naslov_class2).remove();
    $(naslov_class).addClass('pt-2');
    $(naslov_class).addClass('pl-2');
    $(naslov_class).addClass('pr-2');
    $(naslov_class).removeClass('m-0');
    $(naslov_class).html(
      '<input id="naslov" placeholder="Naslov" type="text" value="'+ naslov_alt +'" class="text-center text-light custom-text-input" maxlength="50"></input>'
    )
    $(naslov_class).addClass('change_naslov');
    $(naslov_class).removeClass("change_naslov_" + id);

    $(opis_class).empty();
    $(opis_class).addClass('pl-2');
    $(opis_class).addClass('pr-2');
    $(opis_class).removeClass('pb-3');
    $(opis_class).html(
      '<textarea id="opis" placeholder="Opis" type="text" class="text-center text-light custom-text-input2" maxlength="200" rows="5" cols="25">'+ opis_alt +'</textarea>'
    )
    $(opis_class).addClass('change_opis');
    $(opis_class).removeClass("opis_" + id);

    $(index_class).empty();
    $(index_class).removeClass('m-0');
    $(index_class).removeClass('pt-0');
    $(index_class).removeClass('text-right');
    $(index_class).addClass('text-center');
    $(index_class).html(
      '<a class="button custom-done" onclick="boxDone()">Done</a>'+
      '<a id="'+ id +'" class="ml-2 button custom-done" onclick="boxDelete()">Delete Box</a>'
    )
    $(index_class).addClass('change_index');
    $(index_class).removeClass("change_index_" + id);
    var e3 = document.getElementById(opis_id);
    var e5 = document.getElementById(box_id);
    var img = document.getElementById(size);
    var box = document.getElementById(boxnumber);
    if (e3!=null) {
      e3.id = "opis2";
    }
    if (e5!=null) {
      e5.id = "box";
      $("#box").addClass("active_box");
      $("#box").removeClass("inactive_box");
    }
    img.id = "size";
    box.id = "boxnumber_zero";
  }
}

function extractCode() {
  var code = document.getElementById("code").innerHTML;
  document.getElementById("placeholder").value = code;
  $(".html_box").removeClass("collapse");
}

function exs() {
  $(".html_box").addClass("collapse");
}


function boxDelete() {
  var r = confirm("Do you want to delete this box?");
  if (r == true) {
    document.getElementById('boxnumber_zero').remove();
  }
}

function changeImg() {
  $(".check_image2").html(
    '<label for="imgname" class="custom-submit">Choose Image</label>'+
    '<input id="imgname" name="file1" type="file" class="collapse"></input>'+
    '<input type="submit" class="button mt-4 ml-2 custom-submit" onclick="addBoxImage()">'
  )
  $(".check_image2").removeClass("p-0");
  $(".check_image2").addClass("check_image");
  $(".check_image2").addClass("custom-border");
  $(".check_image2").removeClass("check_image2");
}

function changeImg2() {
  $('.change_image').html(
    '<label for="imgname" class="custom-submit">Choose Image</label>'+
    '<input id="imgname" name="file1" type="file" class="collapse"></input>'+
    '<input type="submit" class="button mt-4 ml-2 custom-submit" onclick="addBoxImage()">'
  )
  $('.change_image').removeClass("p-0");
  $('.change_image').addClass("check_image");
  $('.change_image').addClass("custom-border");
}

save: function exportCode() {
    var code = document.getElementById("placeholder").value;
    var blob = new Blob([code], {type: 'text/csv'});
    if(window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, "data.txt");
    }
    else{
        var elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = "data.txt";
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }
}

function addAll() {
  var i;
  for (i=0; i<=252; i++) {
    $(".boxes").prepend(
      '<div id="boxnumber_'+ i +'" class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 p-2">'+
        '<div id="box_'+ i +'" class="custom-shadow rounded inactive_box">'+
          '<div class="container-fluid m-0 img-pad text-center frame p-0 change_image_'+ i +' bg-tr">'+
            '<span class="helper"></span><img id="size_'+ i +'" class="rounded mx-auto" src="foto/Image'+ i +'.jpg" alt="Image'+ i +'.jpg" style="width:100%;">'+
          '</div>'+
          '<div class="container-fluid m-0 text-right">'+
            '<p class="text-center p-0 m-0 change_naslov_'+ i +'">'+
            '<h3 id="naslov_'+ i +'" class=" naslov_'+ i +' p-3 text-light text-center"></h3>'+
            '</p>'+
            '<p id="opis_'+ i +'" class="text-light text-center pb-3 opis_'+ i +'" style="font-weight: normal;"></p>'+
            '<div class="pb-3 pt-0 m-0 text-right change_index_'+ i +'"><a id="'+ i +'" class="button custom-done pr-2" onclick="boxEdit(this.id)">Edit</a></div>'+
          '</div>'+
        '</div>'+
      '</div>'
    )
  }
}

function deleteAll() {
  var r = confirm("Do you want to delete all boxes?");
  if (r == true) {
    $('#code').empty();
  }
}

function fixAll() {
  var i;
  for (i=0; i<=252; i++) {
    var test = "size_" + i;
    var img = document.getElementById(test);
    //or however you get a handle to the IMG
    if (img!=null) {
      var width = img.clientWidth;
      var height = img.clientHeight;
      if (height>500) {
        img.style.height = '100%';
        img.style.width = 'auto';
      }
    }
  }
}
