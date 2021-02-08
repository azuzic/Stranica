function move(prefix, evt) {
  var key = (evt.which) ? evt.which : evt.keyCode;
  //alert(key);
  var element = document.querySelector(".custom");
  var style = getComputedStyle(element);
  var left = style.left;
  left=justNumbers(left);
  var top = style.top;
  top=justNumbers(top);

  var t1=true,t2=true,t3=true,t4=true;
  var element2 = document.querySelectorAll(".custom2");
  for (var i=0; i<element2.length; i++) {
    var style2 = getComputedStyle(element2[i]);
    var left2 = style2.left;
    left2=justNumbers(left2);
    var top2 = style2.top;
    top2=justNumbers(top2);
    if (!(left2 != left-50 || top != top2))
      t1=false;
    if (!(top2 != top-50 || left != left2))
      t2=false;
    if (!(left2 != left+50 || top != top2))
      t3=false;
    if (!(top2 != top+50 || left != left2))
      t4=false;
  }
  if (key==37 && t1)
    $(".custom").css("left", left - 50 + "px");

  if (key==38 && t2)
    $(".custom").css("top", top - 50 + "px");

  if (key==39 && t3)
    $(".custom").css("left", left + 50 + "px");

  if (key==40 && t4)
    $(".custom").css("top", top + 50 + "px");
}

function justNumbers(string)
{
   var numsStr = string.replace(/[^0-9]/g,'');
   return parseInt(numsStr);
}

function placeWall(id) {
  var x = event.clientX;     // Get the horizontal coordinate
  var y = event.clientY;     // Get the vertical coordinate
  x=x-x%50;
  y=y-y%50;
  if(document.getElementById("wall_"+x+y)==null)
    $(id).append('<button id="wall_'+x+y+'" class="custom2" type="button" style="top: ' +
     y + 'px; left: ' + x + 'px;"></button>');
  else
    document.getElementById("wall_"+x+y).remove();
}
