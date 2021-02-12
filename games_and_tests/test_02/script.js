function txt() {
    var print =  document.getElementById("list");
    var fileUrl = 'test.txt';
    fetch(fileUrl)
       .then( r => r.text() )
       .then( t => print.innerHTML=t )
}

var trenutno_vrijeme, endtimer=0;



function Fdan(dan) {
  switch (dan) {
    case 1:
      dan = "Ponedjeljak, ";
    break;
    case 2:
      dan = "Utorak, ";
    break;
    case 3:
      dan = "Srijeda, ";
    break;
    case 4:
      dan = "Četvrtak, ";
    break;
    case 5:
      dan = "Petak, ";
    break;
    case 6:
      dan = "Subota, ";
    break;
    case 7:
      dan = "Nedjelja, ";
    break;
  }
  return dan;
}



function Fmjesec(mjesec) {
  switch (mjesec) {
    case 1:
      mjesec = " Siječanj ";
    break;
    case 2:
      mjesec = " Veljača ";
    break;
    case 3:
      mjesec = " Ožujak ";
    break;
    case 4:
      mjesec = " Travanj ";
    break;
    case 5:
      mjesec = " Svibanj ";
    break;
    case 6:
      mjesec = " Lipanj ";
    break;
    case 7:
      mjesec = " Srpanj, ";
    break;
    case 8:
      mjesec = " Kolovoz, ";
    break;
    case 9:
      mjesec = " Rujan ";
    break;
    case 10:
      mjesec = " Listopad ";
    break;
    case 11:
      mjesec = " Studeni ";
    break;
    case 12:
      mjesec = " Prosinac ";
    break;
  }
  return mjesec;
}



function timer() {
  // Set the date we're counting down to
  var print =  document.getElementById("list");
  var timer2 =  document.getElementById("timer2");
  var pitanja = JSON.parse(print.innerHTML);
  var limit = 0;
  pitanja.forEach((element, index) => {
    if (element.id ==-1) {
      limit = element.vrijeme;
    }
  });
  var limit2 = limit*1000+1000;
  var countDownDate = new Date();

  // Update the count down every 1 second
  var x = setInterval(frame, 1);
  function frame() {
    // Get today's date and time
    var now =  new Date().getTime() - countDownDate;

    // Find the distance between now and the count down date
    var distance = now;
    var distance2 = limit2 - distance;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Time calculations for days, hours, minutes and seconds
    var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    if (minutes!=0) {
      document.getElementById("proteklo").innerHTML = minutes + " min " + seconds + " s ";
    }
    else {
      document.getElementById("proteklo").innerHTML = seconds + " s ";
    }
    if (minutes2!=0) {
      timer2.innerHTML = 'Preostalo vrijeme: ' + minutes2 + " min " + seconds2 + " s ";
    }
    else {
      if (seconds2<=10)
        timer2.innerHTML = '<b style="color:red; font-weight:bold;"> Preostalo vrijeme: ' + seconds2 + " s <b/>";
      else
        timer2.innerHTML = '<b style="color:red; font-weight:normal;"> Preostalo vrijeme: ' + seconds2 + " s <b/>";
    }
    // If the count down is finished, write some text
    if (Math.round(distance/1000) > limit-1) {
      clearInterval(x);
      timer2.innerHTML = '<a class="showAll" onclick="showAll()">Prikaži sva pitanja na jednoj stranici</a>';
      zavrsi();
    }
    if (endtimer == 1) {
      clearInterval(x);
      timer2.innerHTML = '<a class="showAll" onclick="showAll()">Prikaži sva pitanja na jednoj stranici</a>';
      endtimer = 0;
    }
  }
}



function zapocni() {
  $(".zapocni-div").empty();
  $("#proteklo").empty();
  $(".zapocni-div").append('<button class="btn zapocni" type="button" name="button" onclick="zavrsi();">Završi</button>');
  var print =  document.getElementById("list");

  var pitanja = JSON.parse(print.innerHTML);
  $(".pitanja2").empty();
  $(".navigacija-pitanja").empty();
  $("#zavrseno").empty();
  $("#ocjena").empty();
  pitanja.forEach((element, index) => {
  var collapse = "";
  var selected = "navigacija-pitanje-box-selected";
  if (element.id != 1 && element.id != 0) {
    collapse="collapse";
    selected = "navigacija-pitanje-box";
  }
        if(element.vrsta == "TN" && element.id!=-1) {
          $(".pitanja2").append(
          '<div id="pitanje_id_'+element.id+'" class="row container-fluid p-0 mb-4 visibility '+collapse+'">'+
            '<div class="pitanje-bodovi">'+
                '<h3 class="pitanje-bodovi-naslov mt-2 mb-2">Pitanje<span class="pitanje-bodovi-naslov-broj"> '+element.id+'</span></h3>'+
                '<div id="odgovoreno_id_'+element.id+'" class=" mt-2 mb-2 ">Nije odgovoreno</div>'+
                '<div id="d_bod_pitanje_id_'+element.id+'" class=" mt-2 mb-2 ">Broj bodova od <b style="font-weight:normal;" id="bod_pitanje_id_'+element.id+'">'+element.bodovi+',00</b></div>'+
            '</div>'+

            '<div class="pitanje-okvir p-3">'+
              '<p class="pitanje-text">'+element.pitanje+'</p>'+
              '<div class="vrsta-TN">'+
                '<div class="form-check pl-0">'+
                  '<form>'+
                    '<input id="odabir_t_'+element.id+'" class="mr-2 odabir" type="radio" id="male" name="check" value="točno" onchange="checkAnswer(this.id);">'+
                    '<label for="točno" class="mb-0"> Točno <b id="todabir_t_'+element.id+'" class="collapse label"></b></label><br>'+
                    '<input id="odabir_n_'+element.id+'" class="mr-2 odabir" type="radio" id="female" name="check" value="netočno" onchange="checkAnswer(this.id);">'+
                    '<label for="netočno" class="mb-0"> Netočno <b id="todabir_n_'+element.id+'" class="collapse label"></b></label>'+
                  '</form>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div id="odg_pitanje_id_'+element.id+'" class="collapse">'+
            element.odgovor+
          '</div>'+
          '<div id="choosen_odg_id_'+element.id+'" class="collapse">0'+
          '</div>'
          );
          $(".navigacija-pitanja").append(
            '<a id="nav_pitanje_id_'+element.id+'" class="navigacija-pitanje" onclick="navigacija(this.id);">'+
              '<div id="sel_pitanje_id_'+element.id+'" class="'+selected+' text-center">'+
                '<span class="navigacija-pitanje-number">'+element.id+'</span>'+
                '<div id="col_pitanje_id_'+element.id+'" class="navigacija-pitanje-color-red"></div>'+
              '</div>'+
            '</a>'
          );
        }
      /*console.log(index + ". " + element.name + " Score:" + element.score + " Vol:" + element.vol);*/
  });
  var zapoceto = document.getElementById("zapoceto");
  var stanje = document.getElementById("stanje");
  trenutno_vrijeme = new Date();
  var currentdate = new Date();
  var dan = currentdate.getDay();
  var date = currentdate.getDate();
  var mjesec = currentdate.getMonth()+1;
  var godina = currentdate.getFullYear();
  var sati = currentdate.getHours();
  if (sati<10) sati="0"+sati;
  var minute = currentdate.getMinutes();
  if (minute<10) minute="0"+minute;

  dan = Fdan(dan);
  mjesec = Fmjesec(mjesec);

  zapoceto.innerHTML = dan + date + mjesec + godina + ", " + sati + ":" + minute;
  stanje.innerHTML = "Započeto";
}



function zavrsi() {
  endtimer = 1;
  $(".zapocni-div").empty();
  $(".zapocni-div").append('<button class="btn zapocni" type="button" name="button" onclick="zapocni();  timer();">Započni</button>');
  var print =  document.getElementById("list");
  $("input[name=check]").attr('disabled', true);

  var zapoceto = document.getElementById("zapoceto-full").innerHTML;
  var zavrseno = document.getElementById("zavrseno");
  var proteklo = document.getElementById("proteklo");
  var stanje = document.getElementById("stanje");
  var currentdate = new Date();
  var proteklo_vrijeme = Math.round((currentdate - trenutno_vrijeme)/1000);
  var dan = currentdate.getDay();
  var date = currentdate.getDate();
  var mjesec = currentdate.getMonth()+1;
  var godina = currentdate.getFullYear();
  var sati = currentdate.getHours();
  if (sati<10) sati="0"+sati;
  var minute = currentdate.getMinutes();
  if (minute<10) minute="0"+minute;

  dan = Fdan(dan);
  mjesec = Fmjesec(mjesec);

  zavrseno.innerHTML = dan + date + mjesec + godina + ", " + sati + ":" + minute;
  stanje.innerHTML = "Završeno";
  if (proteklo_vrijeme > 60) {
    var sec=proteklo_vrijeme%60;
    var min=Math.round(proteklo_vrijeme/60);
    proteklo.innerHTML = min + " min " + sec + " s";
  }
  else
  proteklo.innerHTML = proteklo_vrijeme + " s";

  var print =  document.getElementById("list");
  var pitanja = JSON.parse(print.innerHTML);
  var rez = 0;
  var bod;
  var ukupno_moguce = 0;
  $(".visibility").removeClass("collapse");
  $(".label").removeClass("collapse");
  var timer2 =  document.getElementById("timer2");
  timer2.innerHTML = '<a class="showAll" onclick="showAll()">Prikaži sva pitanja na jednoj stranici</a>';

  pitanja.forEach((element, index) => {
    if (element.id !=-1) {
      var id = element.id;
      var choosen_odg_id = "choosen_odg_id_" + id;
      var col_pitanje_id = "#col_pitanje_id_" + id;
      var col_pitanje_id2 = document.getElementById("col_pitanje_id_" + id);
      var bod_pitanje_id = document.getElementById("d_bod_pitanje_id_" + id);
      bod = parseInt(document.getElementById(choosen_odg_id).innerHTML);
      if (bod==0) {
        $(col_pitanje_id).addClass("navigacija-pitanje-color-red");
        $(col_pitanje_id).removeClass("navigacija-pitanje-color-green");
        bod_pitanje_id.innerHTML = 'Broj bodova: '+0+',00 <br> od '+element.bodovi+',00'
      }
      else {
        $(col_pitanje_id).removeClass("navigacija-pitanje-color-red");
        $(col_pitanje_id).addClass("navigacija-pitanje-color-green");
        col_pitanje_id2.innerHTML = '<b class="checkmark">✓</b>';
        bod_pitanje_id.innerHTML = 'Broj bodova: '+bod+',00 <br> od '+element.bodovi+',00'
      }
      rez+=bod;
      ukupno_moguce += parseInt(element.bodovi);
    }
  });
  var postotak = rez/ukupno_moguce*100;
  rez = rez.toFixed(2);
  ukupno_moguce = ukupno_moguce.toFixed(2)
  var ocjena = document.getElementById("ocjena");
  ocjena.innerHTML = "<b>" + rez + "</b> od maksimalno " + ukupno_moguce + " (<b>"+postotak+"</b>%)";

  $(".navigacija-pitanja").append(

  );
}


function showAll() {
  $(".visibility").removeClass("collapse");
}


function idToNumber(id) {
  var rez = parseInt(id.replace( /^\D+/g, ''));
  return rez;
}



function navigacija(id) {
  var id = idToNumber(id);
  var pitanje_id = "#pitanje_id_" + id;
  var pitanje_sel_id = "#sel_pitanje_id_" + id;

  $(".visibility").addClass("collapse");
  $(pitanje_id).removeClass("collapse");
  $(".navigacija-pitanje-box-selected").addClass("navigacija-pitanje-box");
  $(".navigacija-pitanje-box-selected").removeClass("navigacija-pitanje-box-selected");
  $(pitanje_sel_id).addClass("navigacija-pitanje-box-selected");
}



function checkAnswer(id) {
  var id_pitanja = document.getElementById("t"+id);
  var choosen = document.getElementById(id).value;
  var id = idToNumber(id);
  var id_pitanja2 = document.getElementById("todabir_t_"+id);
  var id_pitanja3 = document.getElementById("todabir_n_"+id);
  var odgovoreno_id = "odgovoreno_id_" + id;
  var choosen_odg_id = "choosen_odg_id_" + id;
  var pitanje_id = "#col_pitanje_id_" + id;
  var odg_id = "odg_pitanje_id_" + id;
  var bod_id = "bod_pitanje_id_" + id;
  var odg = document.getElementById(odg_id).innerHTML;
  document.getElementById(odgovoreno_id).innerHTML = "Odgovoreno";

  $("input[checked=false]").attr("disabled",false);

  $(pitanje_id).removeClass("navigacija-pitanje-color-red");
  $(pitanje_id).addClass("navigacija-pitanje-color-green");

  var bod =  parseInt(document.getElementById(bod_id).innerHTML);
  var rez = document.getElementById(choosen_odg_id);
  if (odg==choosen) {
    rez.innerHTML=bod;
    id_pitanja2.innerHTML = '';
    id_pitanja3.innerHTML = '';
    id_pitanja.innerHTML = '<b style="color:green;">✓</b>';
  }
  else {
    rez.innerHTML=0;
    id_pitanja2.innerHTML = '';
    id_pitanja3.innerHTML = '';
    id_pitanja.innerHTML = '<b style="color:red; font-weight:normal;">X</b>';
  }
}
