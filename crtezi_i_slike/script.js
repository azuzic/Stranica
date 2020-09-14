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
      '<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 p-2">'+
        '<div id="box" class="custom-shadow rounded active_box">'+

          '<div class="container-fluid m-0 custom-border change_image check_image img-pad text-center">'+
              '<label for="imgname" class="custom-submit">Choose file</label>'+
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
      $(".change_image").empty();
      $(".change_image").addClass("p-0");
      $(".check_image").addClass("check_image2");
      $(".change_image").removeClass("custom-border");
      $(".check_image").removeClass("check_image");
      $(".change_image").html('<img class="rounded" src="foto/' + filename + '" alt="' + filename + '" width="100%">')
  }
}

/*function addBoxNaslov() {
    var naslov = document.getElementById('naslov').value;
    $(".change_naslov").empty();
    $(".change_naslov").removeClass("pt-2");
    $(".change_naslov").removeClass("pl-2");
    $(".change_naslov").removeClass("pr-2");
    $(".check_naslov").removeClass("check_naslov");
    $(".change_naslov").addClass("p-0")
    $(".change_naslov").addClass("m-0")
    $(".change_naslov").html('<h3 class="naslov p-3 text-light">' + naslov + '</h3>')
}

function addBoxOpis() {
    var opis = document.getElementById('opis').value;
    $(".change_opis").empty();
    $(".change_opis").removeClass("pb-2");
    $(".change_opis").removeClass("pl-2");
    $(".change_opis").removeClass("pr-2");
    $(".check_opis").removeClass("check_opis");
    $(".change_opis").addClass("pb-3");
    $(".change_opis").html(opis);
}

function addBoxIndex() {
    var index = document.getElementById('index').value;
    if (index == '' || index == ' ' ||index == '  ' || index == '   ' || index == '    ') {
      alert('Enter index!');
    }
    else {
      var id = document.getElementById(index);
      if (id == null) {
        $(".change_index_input").remove();
        $(".change_index").removeClass("text-center");
        $(".check_index").removeClass("check_index");
        $(".change_index").addClass("pt-0");
        $(".change_index").addClass("m-0");
        $(".change_index").addClass("text-right");
        $(".change_index").prepend('<p id="'+ index +'" class="index_'+ index +' index float-left pl-2 text-light">Index: '+ index +'</p>');
      }
      else {
        alert("Index already exists");
      }
    }
}*/

function boxDone() {
  var image = false;
  var id = document.getElementById(index);
  var check = document.getElementsByClassName('check_image');
  if (check.length > 0) {
    var fullPath = document.getElementById('imgname').value;
  }
  var check9 = document.getElementsByClassName('check_image2');
  if (check9.length > 0) {
    image = true;
  }
  if (image != false) {
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
  if (image != false) {
    var naslov = document.getElementById('naslov').value;
    $(".change_naslov").empty();
    $(".change_naslov").removeClass("pt-2");
    $(".change_naslov").removeClass("pl-2");
    $(".change_naslov").removeClass("pr-2");
    $(".change_naslov").addClass("p-0")
    $(".change_naslov").addClass("m-0")
    $(".change_naslov").html('<h3 id="naslov_'+ index +'" class=" naslov_'+ index +' p-3 text-light text-center">' + naslov + '</h3>')
  }
  if (image != false) {
    var opis = document.getElementById('opis').value;
    $(".change_opis").empty();
    $(".change_opis").removeClass("pb-2");
    $(".change_opis").removeClass("pl-2");
    $(".change_opis").removeClass("pr-2");
    $(".change_opis").addClass("pb-3");
    $(".change_opis").html(opis);
  }
  var check5 = document.getElementById(fullPath);
  if (check5 == null && image == false) {
    alert('Choose image!');
  }
  else {

          var test = document.getElementsByClassName('index')[0].id;
          var test3 = ('opis_' + test);
          var test4 = ('box_' + test);
          var e2 = document.getElementById("opis2");
          var e4 = document.getElementById("box");
          $(".change_image").addClass('change_image_' + test);
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
          $(".check_image2").removeClass("check_image2");
          $(".index").removeClass("index");
          $(".active_box").addClass("inactive_box");
          $(".active_box").removeClass("custom-shadow2");
          $(".active_box").removeClass("active_box");
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
    var naslov_alt = document.getElementById(naslov_id).textContent;
    var opis_alt = document.getElementById(opis_id).textContent;
    var image_class = ".change_image_" + id;
    $(image_class).empty();
    $(image_class).addClass('custom-border');
    $(image_class).addClass('check_image');
    $(image_class).removeClass('p-0');
    $(image_class).html(
      '<label for="imgname" class="custom-submit">Choose file</label>'+
      '<input id="imgname" name="file1" type="file" class="collapse"></input>'+
      '<input type="submit" class="button mt-4 ml-2 custom-submit" onclick="addBoxImage()">'
    )
    $(image_class).addClass('change_image');
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
      '<a class="button custom-done" onclick="boxDone()">Done</a>'
    )
    $(index_class).addClass('change_index');
    $(index_class).removeClass("change_index_" + id);
    var e3 = document.getElementById(opis_id);
    var e5 = document.getElementById(box_id);
    if (e3!=null) {
      e3.id = "opis2";
    }
    if (e5!=null) {
      e5.id = "box";
      $("#box").addClass("active_box");
      $("#box").removeClass("inactive_box");
    }
  }
}
