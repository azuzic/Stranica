(function($) {

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
  if (class1.length > 0 || class2.length > 0 || class3.length > 0 || class4.length > 0) {
    $(".active_box").addClass("custom-shadow2");
    $(".alert_box").removeClass("collapse");
    setTimeout(function() {
      $(".alert_box").addClass('collapse');
    }, 1000);
  } else {
    var kategorija= document.getElementById('kategorije');
    var odabrana_kategorija = kategorija.value;
    odabrana_kategorija= parseInt(odabrana_kategorija);
    switch(odabrana_kategorija){
      case 1:
      $(".boxes").prepend(
        '<div id="boxnumber_zero" class="velicina boxnumber_zero col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 p-2 tagsort">' +
        '<div id="box" class="custom-shadow rounded active_box">' +

        '<div id="div_width" class="container-fluid m-0 custom-border change_image check_image img-pad text-center frame">' +
        '<label for="imgname" class="custom-submit">Choose&nbspImage</label>' +
        '<input id="imgname" name="file1" type="file" class="collapse"></input>' +
        '<input type="submit" class="button mt-4 ml-2 custom-submit" onclick="addBoxImage()">' +
        '</div>' +

        '<div class="container-fluid m-0 p-0 text-right">' +

        '<p class="change_naslov pt-2 pl-2 pr-2 text-center">' +
        '<input id="naslov" placeholder="Naslov" type="text" class="text-center text-light custom-text-input" maxlength="50"></input>' +
        '</p>' +

        '<p id="opis2" class="change_opis pl-2 pr-2 text-light text-center" style="font-weight: normal;">' +
        '<textarea id="opis" placeholder="Opis" type="text" class="text-center text-light custom-text-input2" maxlength="200" rows="5" cols="25"></textarea>' +
        '</p>' +

        '<div class="row container-fluid text-center tag_box_active mb-2" >' +
        '</div>' +
        '<p class="text-center p-0 change_tag">' +
        '<input id="tag" placeholder="Tag" type="text" value="" class="text-center text-light custom-text-input3" maxlength="50">' +
        '<a id="tag_zero" class="button custom-done ml-2" onclick="addTag(this.id)">Add&nbspTag</a>' +
        '</p>' +

        '<div class="change_index pb-3 text-center">' +
        '<a class="button custom-done" onclick="boxDone()">Done</a>' +
        '<a id="zero" class="ml-2 button custom-done" onclick="boxDelete()">Delete&nbspBox</a>' +
        '</div>' +

        '</div>' +
        '</div>' +
        '</div>'
      );
      break;
      case 2:
      $(".boxes").prepend(
        '<div id="boxnumber_zero" class="velicina boxnumber_zero col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 p-2 tagsort">' +
        '<div id="box" class="custom-shadow rounded active_box">' +

        '<div id="div_width" class="container-fluid m-0 custom-border2 change_image check_image img-pad2 text-center frame">' +
        '<label for="imgname" class="custom-submit">Choose&nbspImage</label>' +
        '<input id="imgname" name="file1" type="file" class="collapse"></input>' +
        '<input type="submit" class="button mt-4 ml-2 custom-submit" onclick="addBoxImage()">' +
        '</div>' +

        '<div class="container-fluid m-0 p-0 text-right">' +

        '<p class="change_naslov pt-2 pl-2 pr-2 text-center">' +
        '<input id="naslov" placeholder="Naslov" type="text" class="text-center text-light custom-text-input" maxlength="50"></input>' +
        '</p>' +

        '<p id="opis2" class="change_opis pl-2 pr-2 text-light text-center" style="font-weight: normal;">' +
        '<textarea id="opis" placeholder="Opis" type="text" class="text-center text-light custom-text-input2" maxlength="200" rows="5" cols="25"></textarea>' +
        '</p>' +

        '<div class="row container-fluid text-center tag_box_active mb-2" >' +
        '</div>' +
        '<p class="text-center p-0 change_tag">' +
        '<input id="tag" placeholder="Tag" type="text" value="" class="text-center text-light custom-text-input3" maxlength="50">' +
        '<a id="tag_zero" class="button custom-done ml-2" onclick="addTag(this.id)">Add&nbspTag</a>' +
        '</p>' +

        '<div class="change_index pb-3 text-center">' +
        '<a class="button custom-done" onclick="boxDone()">Done</a>' +
        '<a id="zero" class="ml-2 button custom-done" onclick="boxDelete()">Delete&nbspBox</a>' +
        '</div>' +

        '</div>' +
        '</div>' +
        '</div>'
      );
      break;
      case 3:
      $(".boxes").prepend(
        '<div id="boxnumber_zero" class="velicina boxnumber_zero col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 p-2 tagsort">' +
        '<div id="box" class="custom-shadow rounded active_box">' +

        '<div id="div_width" class="container-fluid m-0 custom-border3 change_image check_image img-pad3 text-center frame">' +
        '<label for="imgname" class="custom-submit">Choose&nbspImage</label>' +
        '<input id="imgname" name="file1" type="file" class="collapse"></input>' +
        '<input type="submit" class="button mt-4 ml-2 custom-submit" onclick="addBoxImage()">' +
        '</div>' +

        '<div class="container-fluid m-0 p-0 text-right">' +

        '<p class="change_naslov pt-2 pl-2 pr-2 text-center">' +
        '<input id="naslov" placeholder="Naslov" type="text" class="text-center text-light custom-text-input" maxlength="50"></input>' +
        '</p>' +

        '<p id="opis2" class="change_opis pl-2 pr-2 text-light text-center" style="font-weight: normal;">' +
        '<textarea id="opis" placeholder="Opis" type="text" class="text-center text-light custom-text-input2" maxlength="200" rows="5" cols="25"></textarea>' +
        '</p>' +

        '<div class="row container-fluid text-center tag_box_active mb-2" >' +
        '</div>' +
        '<p class="text-center p-0 change_tag">' +
        '<input id="tag" placeholder="Tag" type="text" value="" class="text-center text-light custom-text-input3" maxlength="50">' +
        '<a id="tag_zero" class="button custom-done ml-2" onclick="addTag(this.id)">Add&nbspTag</a>' +
        '</p>' +

        '<div class="change_index pb-3 text-center">' +
        '<a class="button custom-done" onclick="boxDone()">Done</a>' +
        '<a id="zero" class="ml-2 button custom-done" onclick="boxDelete()">Delete&nbspBox</a>' +
        '</div>' +

        '</div>' +
        '</div>' +
        '</div>'
      );
      break;
    }
  }
}
var randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
// TODO: addBoxImage
document.documentElement.style.setProperty('main-bg-color', randomColor);
function addBoxImage() {
  var fullPath = document.getElementById('imgname').value;
  if (fullPath == "") {
    alert('Choose image!');
  } else {
    if (fullPath) {
      var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
      var filename = fullPath.substring(startIndex);
      if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        filename = filename.substring(1);
      }
    }
    $(".change_image").html(
      '<span class="helper"></span><img id="size" class="rounded mx-auto" src="foto/' + filename + '" alt="' + filename + '"width="100%">' +
      '<div style="position:absolute;top:30%; left:0;" class="container-fluid text-center m-0 p-0 change_image_button">' +
      '<button class="button custom-submit relative m-0" onclick="changeImg()">Change Image</button>' +
      '</div>'
    );
    $(".change_image").addClass("p-0");
    $(".check_image").addClass("check_image2");
    $(".change_image").removeClass("custom-border");
    $(".check_image").removeClass("check_image");
  }
}
// TODO: addTag
function addTag() {
  var tag = document.getElementById('tag').value;
  var index = 0;
  do {
    var id = "tag_"+index;
    var text = "text_tag_"+index;
    var text2 = "text_tl_tag_"+index;
    var check = document.getElementById(id);
    if (check == null) {
      if(document.getElementById("boxnumber_zero").classList.contains("tag_" + tag)){
        alert("Box alreday contains the tag!");
      }
      else
      {
      $(".tag_box_active").append(
        '<div id="' + id + '" class="p-1 m-1 tag-shape-3">'+
        '<div class="row p-0 m-0"><div class="m-0 p-0"><a id="' + text + '" class="tageffect pl-2 pr-2"  onclick="tagSort(this.innerHTML)">' + tag + '</a></div><div id="' + id + '" class="m-0 p-0 text_tagx"><a class="ml-2 button custom-done2 pr-1" onclick="tagDelete(this)">X</a></div></div>'+
        '</div>');
      }
        if(document.getElementById("taglist").classList.contains("tag_" + tag)){
        }
        else
        {
          var index2 = 0;
          do {
            var id2 = "tl_tag_"+index2;
            var text3 = "text_tl_tag_"+index2;
            var check2 = document.getElementById(id2);
            if (check2 == null) {
                  $(".taglist").addClass("tag_" + tag);
                  $(".taglist").append(
                    '<div id="' + id2 + '" class="p-1 m-1 tag-shape tag-shape-red' + index2 + '">'+
                    '<div class="row p-0 m-0"><div class="m-0 p-0"><a id="' + text3 + '" class="tageffect pl-2 pr-2"  onclick="tagSort2(this.innerHTML,this);">' + tag + '</a></div><div id="' + id2 + '" class="m-0 p-0"><a class="ml-2 button custom-done2 pr-1" onclick="tagDelete2(this)">X</a></div></div>'+
                    '</div>');
              break;
            } else {
              index2++;
            }
          } while (check2 != null);
        }
      tag = 'tag_' + tag;
      var tag3 = tag + '_notcollapsed';
      $('.boxnumber_zero').addClass(tag);
      $('.boxnumber_zero').addClass(tag3);
      break;
    } else {
      index++;
    }
  } while (check != null);
}
// TODO: addTag2
function addTag2() {
  var tag = document.getElementById('tag2').value;
  var index = 0;
  do {
    var id = "tl_tag_"+index;
    var text = "text_tl_tag_"+index;
    var check = document.getElementById(id);
    if (check == null) {
        if(document.getElementById("taglist").classList.contains("tag_" + tag)){
          alert("Taglist alreday contains the tag!");
        }
        else
        {
          $(".taglist").addClass("tag_" + tag);
          $(".taglist").append(
            '<div id="' + id + '" class="p-1 m-1 tag-shape tag-shape-red' + index + '">'+
            '<div class="row p-0 m-0"><div class="m-0 p-0"><a id="' + text + '" class="tageffect pl-2 pr-2"  onclick="tagSort2(this.innerHTML,this);">' + tag + '</a></div><div id="' + id + '" class="m-0 p-0"><a class="ml-2 button custom-done2 pr-1" onclick="tagDelete2(this)">X</a></div></div>'+
            '</div>');
        }
      break;
    } else {
      index++;
    }
  } while (check != null);
}
// TODO: tagDelete
function tagDelete(obj) {
  var o = obj;
  while(!o.id) {
    o = o.parentNode;
  }

  var id = o.id;

    var text = "text_"+id;
    var tag = 'tag_' + document.getElementById(text).textContent;
    var tag2 = 'tag_' + document.getElementById(text).textContent + "_notcollapsed";
    var tag3 = 'tag_' + document.getElementById(text).textContent + "_collapsed";
    $('#boxnumber_zero').removeClass(tag);
    $('#boxnumber_zero').removeClass(tag2);
    $('#boxnumber_zero').removeClass(tag3);
    document.getElementById(id).remove(tag);
}
// TODO: tagDelete2
function tagDelete2(obj) {
  var o = obj;
  while(!o.id) {
    o = o.parentNode;
  }

  var id = o.id;
  var text = "text_" + o.id;
  var tag = 'tag_' + document.getElementById(text).textContent;
  $('#taglist').removeClass(tag);
  document.getElementById(id).remove();
}
// TODO: tagSort
function tagSort(obj) {
  var class1 = document.getElementsByClassName('custom-submit');
  var class2 = document.getElementsByClassName('custom-text-input');
  var class3 = document.getElementsByClassName('custom-text-input2');
  var class4 = document.getElementsByClassName('custom-text-input3');
  if (class1.length > 0 || class2.length > 0 || class3.length > 0 || class4.length > 0) {
    $(".active_box").addClass("custom-shadow2");
    $(".alert_box").removeClass("collapse");
    setTimeout(function() {
      $(".alert_box").addClass('collapse');
    }, 1000);
  } else {
  var sort = ".tag_" + obj;
  $(sort).addClass('tag_' + obj + '_notcollapsed');
  $(".tagsort").addClass("collapse");
  $(sort).removeClass("collapse");
  $(sort).removeClass("collapse");
  $("#taglist").removeClass('tag_' + obj + '_notcollapsed');
  }
}
// TODO: tagSort2
function tagSort2(obj,obj2) {
  var class1 = document.getElementsByClassName('custom-submit');
  var class2 = document.getElementsByClassName('custom-text-input');
  var class3 = document.getElementsByClassName('custom-text-input2');
  var class4 = document.getElementsByClassName('custom-text-input3');
  if (class1.length > 0 || class2.length > 0 || class3.length > 0 || class4.length > 0) {
    $(".active_box").addClass("custom-shadow2");
    $(".alert_box").removeClass("collapse");
    setTimeout(function() {
      $(".alert_box").addClass('collapse');
    }, 1000);
  } else {

    var o = obj2;
    while(!o.id) {
      o = o.parentNode;
    }
    var id = o.id;
    var color1 = "tag-shape-red" + id.substr(12);
    var color2 = "tag-shape-blue" + id.substr(12);

    var collapsed = document.getElementsByClassName('tag_' + obj + '_collapsed');
    var notcollapsed = document.getElementsByClassName('tag_' + obj + '_notcollapsed');
    if (collapsed.length > 0) {
      $('.tag_' + obj + '_collapsed').removeClass("collapse");
      $('.tag_' + obj + '_collapsed').addClass('tag_' + obj + '_notcollapsed');
      $('.tag_' + obj + '_collapsed').removeClass('tag_' + obj + '_collapsed');
      $('.' + color2).removeClass("tag-shape2");
      $('.' + color2).addClass("tag-shape");
      $('.' + color2).addClass(color1);
      $('.' + color2).removeClass(color2);
    }
    else if (notcollapsed.length > 0) {
      $('.tag_' + obj + '_notcollapsed').addClass("collapse");
      $('.tag_' + obj + '_notcollapsed').addClass('tag_' + obj + '_collapsed');
      $('.tag_' + obj + '_notcollapsed').removeClass('tag_' + obj + '_notcollapsed');
      $('.' + color1).removeClass("tag-shape");
      $('.' + color1).addClass("tag-shape2");
      $('.' + color1).addClass(color2);
      $('.' + color1).removeClass(color1);
    }
  }
}
// TODO: showAll
function showAll() {
  $(".tagsort").removeClass("collapse");
  $(".tag-shape2").addClass("tag-shape");
  $(".tag-shape2").removeClass("tag-shape2");
}
// TODO: hideAll
function hideAll() {
  $(".tagsort").addClass("collapse");
  $(".tag-shape").addClass("tag-shape2");
  $(".tag-shape").removeClass("tag-shape");
}
// TODO: boxDone
function boxDone() {
  var image = false;
  var image_button = false;
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
        $(".change_index").append('<a id="' + index + '" class="button custom-done pr-2 mr-2 index" onclick="boxEdit(this.id)">Edit</a>');
        $(".change_index").addClass("text-right");
        break;
      } else {
        index++;
      }
    } while (id != null);
  }
  if (image != false || image_button == true) {
    var naslov = document.getElementById('naslov').value;
    $(".change_naslov").empty();
    $(".text_tagx").empty();
    $(".text_tagx").addClass("text_tagx" + index);
    $(".text_tagx").removeClass("text_tagx");
    $(".change_naslov").removeClass("pt-2");
    $(".change_naslov").removeClass("pl-2");
    $(".change_naslov").removeClass("pr-2");
    $(".change_naslov").addClass("p-0");
    $(".change_naslov").addClass("m-0");
    $(".change_naslov").html('<h3 id="naslov_' + index + '" class=" naslov_' + index + ' p-3 text-light text-center">' + naslov + '</h3>');
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
  } else {

    var test = document.getElementsByClassName('index')[0].id;
    var test3 = ('opis_' + test);
    var test4 = ('box_' + test);
    var boxnumber = ("boxnumber_" + test);
    var size = ("size_" + test);
    var tag = ("change_tag" + test);
    var e2 = document.getElementById("opis2");
    var e4 = document.getElementById("box");
    var boxx = document.getElementsByClassName("boxnumber_zero");
    $(".change_tag").empty();
    $(".change_tag").addClass(tag);
    $(".change_tag").removeClass("change_tag");
    $(".change_image").addClass('change_image_' + test);
    $(".tag_box_active").addClass('tag_box_inactive' + test);
    $(".tag_box_active").removeClass('tag_box_active');
    $(".change_image_button").remove();
    $(".change_image").addClass('change_image_' + test);
    $(".change_image").addClass('bg-tr');
    $(".change_image").removeClass("change_image");
    $(".change_naslov").addClass('change_naslov_' + test);
    $(".change_naslov").removeClass("change_naslov");
    $(".change_opis").addClass('opis_' + test);
    $(".change_opis").removeClass("change_opis");
    $(".change_index").addClass('change_index_' + test);
    $(".change_index").removeClass("change_index");
    if (e2 != null) {
      e2.id = test3;
    }
    if (e4 != null) {
      e4.id = test4;
    }
    $(".boxnumber_zero").addClass(boxnumber);
    $(".boxnumber_zero").removeClass("boxnumber_zero");
    var boxnumber_zero = document.getElementById("boxnumber_zero");
    boxnumber_zero.id=boxnumber;
    $(".check_image2").removeClass("check_image2");
    $(".index").removeClass("index");
    $(".active_box").addClass("inactive_box");
    $(".active_box").removeClass("custom-shadow2");
    $(".active_box").removeClass("active_box");

    var img = document.getElementById('size');
    img.id = size;
    var img2 = document.getElementById(size);
    //or however you get a handle to the IMG
    var width = img2.clientWidth;
    var div_width = document.getElementById("div_width").clientWidth;
    var height = img2.clientHeight;
    var kategorija= document.getElementById('kategorije');
    var odabrana_kategorija = kategorija.value;
    odabrana_kategorija= parseInt(odabrana_kategorija);
    if (width>div_width) {
      img2.style.height = 'auto';
      img2.style.width = '100%';
    }
    switch(odabrana_kategorija){
      case 1:
      if (height > 250) {
        img2.style.height = '100%';
        img2.style.width = 'auto';
      }
      break;
      case 2:
      if (height > 500) {
        img2.style.height = '100%';
        img2.style.width = 'auto';
      }
      break;
      case 3:
      if (height > 750) {
        img2.style.height = '100%';
        img2.style.width = 'auto';
      }
      break;
    }
  }
}
// TODO: boxEdit
function boxEdit(index) {
  var class1 = document.getElementsByClassName('custom-submit');
  var class2 = document.getElementsByClassName('custom-text-input');
  var class3 = document.getElementsByClassName('custom-text-input2');
  var class4 = document.getElementsByClassName('custom-text-input3');
  if (class1.length > 0 || class2.length > 0 || class3.length > 0 || class4.length > 0) {
    $(".active_box").addClass("custom-shadow2");
    $(".alert_box").removeClass("collapse");
    setTimeout(function() {
      $(".alert_box").addClass('collapse');
    }, 1000);
  } else {
    var id = index;
    var naslov_class = ".change_naslov_" + id;
    var naslov_class2 = ".naslov_" + id;
    var opis_class = ".opis_" + id;
    var index_class = ".change_index_" + id;
    var opis_id = "opis_" + id;
    var box_id = "box_" + id;
    var naslov_id = "naslov_" + id;
    var size = "size_" + id;
    var boxnumber = "boxnumber_" + id;
    var tagnumber = "tagnumber_" + id;
    var naslov_alt = document.getElementById(naslov_id).textContent;
    var opis_alt = document.getElementById(opis_id).textContent;
    var image_class = ".change_image_" + id;
    var tag = ".change_tag" + id;
    var tagbox = ".tag_box_inactive" + id;
    var tagx = ".text_tagx" + id;
    $(tagx).addClass('text_tagx');
    $(tagbox).addClass('tag_box_active');
    $(tagbox).removeClass("tag_box_inactive" + id);
    $(tag).append(
      '<input id="tag" placeholder="Tag" type="text" value="" class="text-center text-light custom-text-input3" maxlength="50">' +
      '<a id="' + tagnumber + '" class="button custom-done ml-2" onclick="addTag(this.id)">Add&nbspTag</a>'
    );
    $(tagx).append(
      '<a class="ml-2 button custom-done2 pr-1" onclick="tagDelete(this)">X</a>'
    );
    $(tagx).removeClass("text_tagx" + id);
    $(tag).addClass('change_tag');
    $(tag).removeClass("change_tag" + id);
    /*$(image_class).addClass('check_image');*/
    var kategorija= document.getElementById('kategorije');
    var odabrana_kategorija = kategorija.value;
    odabrana_kategorija= parseInt(odabrana_kategorija);

    switch(odabrana_kategorija){
      case 1:
        $(image_class).addClass('custom-border');
      break;
      case 2:
        $(image_class).addClass('custom-border2');
      break;
      case 3:
        $(image_class).addClass('custom-border3');
      break;
    }
    $(image_class).removeClass('p-0');
    $(image_class).append(
      '<div style="position:absolute;top:30%; left:0;" class="container-fluid text-center m-0 p-0 change_image_button">' +
      '<button id=' + id + ' class="button custom-submit relative m-0" onclick="changeImg2(this.id)">Change&nbspImage</button>' +
      '</div>'
    );
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
      '<input id="naslov" placeholder="Naslov" type="text" value="' + naslov_alt + '" class="text-center text-light custom-text-input" maxlength="50"></input>'
    );
    $(naslov_class).addClass('change_naslov');
    $(naslov_class).removeClass("change_naslov_" + id);

    $(opis_class).empty();
    $(opis_class).addClass('pl-2');
    $(opis_class).addClass('pr-2');
    $(opis_class).removeClass('pb-3');
    $(opis_class).html(
      '<textarea id="opis" placeholder="Opis" type="text" class="text-center text-light custom-text-input2" maxlength="200" rows="5" cols="25">' + opis_alt + '</textarea>'
    );
    $(opis_class).addClass('change_opis');
    $(opis_class).removeClass("opis_" + id);

    $(index_class).empty();
    $(index_class).removeClass('m-0');
    $(index_class).removeClass('pt-0');
    $(index_class).removeClass('text-right');
    $(index_class).addClass('text-center');
    $(index_class).html(
      '<a class="button custom-done" onclick="boxDone()">Done</a>' +
      '<a id="' + id + '" class="ml-2 button custom-done" onclick="boxDelete()">Delete&nbspBox</a>'
    );
    $(index_class).addClass('change_index');
    $(index_class).removeClass("change_index_" + id);
    var e3 = document.getElementById(opis_id);
    var e5 = document.getElementById(box_id);
    var img = document.getElementById(size);
    var box = document.getElementById(boxnumber);
    box.id="boxnumber_zero";
    $("."+boxnumber).addClass("boxnumber_zero");
    $(".boxnumber_zero").removeClass(boxnumber);
    if (e3 != null) {
      e3.id = "opis2";
    }
    if (e5 != null) {
      e5.id = "box";
      $("#box").addClass("active_box");
      $("#box").removeClass("inactive_box");
    }
    img.id = "size";
  }
}
// TODO: extractCode
function extractCode() {
  var code = document.getElementById("code").innerHTML;
  document.getElementById("placeholder").value = code;
  $(".html_box").removeClass("collapse");
}
// TODO: exs
function exs() {
  $(".html_box").addClass("collapse");
}

// TODO: boxDelete
function boxDelete() {
  var r = confirm("Do you want to delete this box?");
  if (r == true) {
    $('.boxnumber_zero').remove();
  }
}
// TODO: changeImg
function changeImg() {
  $(".check_image2").html(
    '<label for="imgname" class="custom-submit">Choose&nbspImage</label>' +
    '<input id="imgname" name="file1" type="file" class="collapse"></input>' +
    '<input type="submit" class="button mt-4 ml-2 custom-submit" onclick="addBoxImage()">'
  );
  $(".check_image2").removeClass("p-0");
  $(".check_image2").addClass("check_image");
  $(".check_image2").addClass("custom-border");
  $(".check_image2").removeClass("check_image2");
}
// TODO: changeImg2
function changeImg2() {
  $('.change_image').html(
    '<label for="imgname" class="custom-submit">Choose&nbspImage</label>' +
    '<input id="imgname" name="file1" type="file" class="collapse"></input>' +
    '<input type="submit" class="button mt-4 ml-2 custom-submit" onclick="addBoxImage()">'
  );
  $('.change_image').removeClass("p-0");
  $('.change_image').addClass("check_image");
  $('.change_image').addClass("custom-border");
}
// TODO: exportCode
save: function exportCode() {
  var code = document.getElementById("placeholder").value;
  var blob = new Blob([code], {
    type: 'text/csv'
  });
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, "data.txt");
  } else {
    var elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = "data.txt";
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
}
// TODO: velicina
function velicina(){
  var collapsed = document.getElementsByClassName('velicina');
  if (collapsed.length > 0) {
    var kategorija= document.getElementById('kategorije');
    var odabrana_kategorija = kategorija.value;
    odabrana_kategorija= parseInt(odabrana_kategorija);

    switch(odabrana_kategorija){
      case 1:
        $(".velicina").removeClass("col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12");
        $(".velicina").removeClass("col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12");
        $(".velicina").addClass("col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12");
        $(".frame").removeClass("img-pad2 custom-border2");
        $(".frame").removeClass("img-pad3 custom-border3");
        $(".frame").addClass("img-pad custom-border");
      break;
      case 2:
        $(".velicina").removeClass("col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12");
        $(".velicina").removeClass("col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12");
        $(".velicina").addClass("col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12");
        $(".frame").removeClass("img-pad custom-border");
        $(".frame").removeClass("img-pad3 custom-border3");
        $(".frame").addClass("img-pad2 custom-border2");
      break;
      case 3:
        $(".velicina").removeClass("col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12");
        $(".velicina").removeClass("col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12");
        $(".velicina").addClass("col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12");
        $(".frame").removeClass("img-pad2 custom-border2");
        $(".frame").removeClass("img-pad custom-border");
        $(".frame").addClass("img-pad3 custom-border3");
      break;
    }
    var i;
    var div_width = document.getElementById("div_width").clientWidth;
    for (i=0; i<=252; i++) {
      var test = "size_" + i;
      var img = document.getElementById(test);
      //or however you get a handle to the IMG
      if (img!=null) {
        var width = img.clientWidth;
        var height = img.clientHeight;
        switch(odabrana_kategorija){
          case 1:
          if (height > 250) {
            img.style.height = '100%';
            img.style.width = 'auto';
          }
          break;
          case 2:
          if (height > 500) {
            img.style.height = '100%';
            img.style.width = 'auto';
          }
          break;
          case 3:
          if (height > 750) {
            img.style.height = '100%';
            img.style.width = 'auto';
          }
          break;
        }
        if (width>div_width) {
          img.style.height = 'auto';
          img.style.width = '100%';
        }
      }
    }
  }
}
