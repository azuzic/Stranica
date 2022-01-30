function txt(id) {
    var print =  document.getElementById("list");
    var odabir =  document.getElementById("odabran-test");
    var fileUrl = 'test'+id.innerHTML+'.txt';
    fetch(fileUrl)
       .then( r => r.text() )
       .then( t => print.innerHTML=t )
    odabir.innerHTML = id.innerHTML;
}

var trenutno_vrijeme, endtimer=0,  total_pitanja=0;


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
  if (print.innerHTML!=0) {
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
      else if (seconds2<=30)
        timer2.innerHTML = '<b style="color:red; font-weight:normal;"> Preostalo vrijeme: ' + seconds2 + " s <b/>";
      else
        timer2.innerHTML = '<b style="font-weight:normal;"> Preostalo vrijeme: ' + seconds2 + " s <b/>";
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
else
alert("Odaberi test!");
}



function zapocni() {
  var print =  document.getElementById("list");
  if (print.innerHTML!=0) {
  $('.dropdown-toggle').prop('disabled', true);
  var trenutno_pitanje = document.getElementById("trenutno_pitanje");
  trenutno_pitanje.innerHTML = 1;
  $(".zapocni2").remove();
  $("#proteklo").empty();
  $(".zapocni-div").prepend('<button class="btn zapocni zavrsi2" type="button" name="button" onclick="zavrsi();">Završi</button>');


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
          '<div id="choosen_odg_id_'+element.id+'" class="collapse">-1'+
          '</div>'
          );
          $(".navigacija-pitanja").append(
            '<a id="nav_pitanje_id_'+element.id+'" class="navigacija-pitanje" onclick="navigacija(this.id);">'+
              '<div id="sel_pitanje_id_'+element.id+'" class="'+selected+' text-center">'+
                '<span class="navigacija-pitanje-number">'+element.id+'</span>'+
                '<div id="col_pitanje_id_'+element.id+'" class="navigacija-pitanje-color-grey"></div>'+
              '</div>'+
            '</a>'
          );
        }
        var ponude = [];
        if(element.vrsta == "MULTI" && element.id!=-1) {
          for (var i=0, k=0; i<element.ponude.length; i++) {
            if (Number.isInteger(element.ponude[i])) {
                ponude[k] = element.ponude[i];
                k++;
            }
          }
          var bodovi_total = 0;
          for (var i=0; i<element.bodovi.length; i++) {
            if (element.bodovi[i]>0)
              bodovi_total+=element.bodovi[i];
          }
          $(".pitanja2").append(
          '<div id="pitanje_id_'+element.id+'" class="row container-fluid p-0 mb-4 visibility '+collapse+'">'+
            '<div class="pitanje-bodovi pitanje_bodovi_'+element.id+'">'+
                '<h3 class="pitanje-bodovi-naslov mt-2 mb-2">Pitanje<span class="pitanje-bodovi-naslov-broj"> '+element.id+'</span></h3>'+
                '<div id="odgovoreno_id_'+element.id+'" class=" mt-2 mb-2 ">Nije odgovoreno</div>'+
                '<div id="d_bod_pitanje_id_'+element.id+'" class=" mt-2 mb-2 ">Broj bodova od <b style="font-weight:normal;" id="bod_pitanje_id_'+element.id+'">'+bodovi_total+',00</b></div>'+
            '</div>'+

            '<div class="pitanje-okvir p-3">'+
              '<p class="pitanje-text">'+element.pitanje+'</p>'+
              '<img class="mb-2" src="'+element.slika+'" height="400px;">'+
              '<div class="vrsta-MULTI">'+
                '<div class="form-check pl-0">'+
                  '<form class="form_id_'+element.id+'">'+
                  '</form>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'
          );
          $(".navigacija-pitanja").append(
            '<a id="nav_pitanje_id_'+element.id+'" class="navigacija-pitanje" onclick="navigacija(this.id);">'+
              '<div id="sel_pitanje_id_'+element.id+'" class="'+selected+' text-center">'+
                '<span class="navigacija-pitanje-number">'+element.id+'</span>'+
                '<div id="col_pitanje_id_'+element.id+'" class="navigacija-pitanje-color-grey"></div>'+
              '</div>'+
            '</a>'
          );
          for (var i=0; i<element.ponude.length; i++) {
            $('.form_id_'+element.id).append(
              '<input id="odabir_id_'+element.id+i+'" class="mr-2 odabir" type="checkbox" name="check" value="'+element.ponude[i]+'" onchange="checkAnswerMulti(this.id);">'+
                '<label class="mb-0"> '+element.ponude[i]+' <b id="todabir_id_'+element.id+i+'" class="collapse label"></b></label>'+
              '<br>'
            );
            $(".pitanja2").append(
            '<div id="odg_pitanje_id_'+element.id+i+'" class="collapse">'+
              element.odgovor[i]+
            '</div>'+
            '<div id="choosen_odg_id_'+element.id+i+'" class="collapse">-2'+
            '</div>'
            );
            $(".pitanje_bodovi_"+element.id).append(
              '<div id="d_bod_pitanje_id_'+element.id+i+'" class="collapse"><b style="font-weight:normal;" id="bod_pitanje_id_'+element.id+i+'">'+element.bodovi[i]+'</b></div>'
            );
          }
        }
        if(element.vrsta == "WORD" && element.id!=-1) {
          if(element.velicina == "SMALL") {
            $(".pitanja2").append(
            '<div id="pitanje_id_'+element.id+'" class="row container-fluid p-0 mb-4 visibility '+collapse+'">'+
              '<div class="pitanje-bodovi">'+
                  '<h3 class="pitanje-bodovi-naslov mt-2 mb-2">Pitanje<span class="pitanje-bodovi-naslov-broj"> '+index+'</span></h3>'+
                  '<div id="odgovoreno_id_'+element.id+'" class=" mt-2 mb-2 ">Nije odgovoreno</div>'+
                  '<div id="d_bod_pitanje_id_'+element.id+'" class=" mt-2 mb-2 ">Broj bodova od <b style="font-weight:normal;" id="bod_pitanje_id_'+element.id+'">'+element.bodovi+',00</b></div>'+
              '</div>'+
              '<div class="pitanje-okvir p-3">'+
                '<p class="pitanje-text">'+element.pitanje+'</p>'+
                '<img class="mb-2" src="'+element.slika+'" height="400px;">'+
                '<div class="vrsta-WORD">'+
                  '<div class="form-check pl-0">'+
                    '<form>'+
                      '<input id="odabir_text_'+element.id+'" class="mr-2 odabir input-text" type="text" id="male" name="check" value="" oninput="checkAnswerWord(this.id);" style="text-transform:lowercase">'+
                      '<label for="točno" class="mb-0"><b id="odabir_label_'+element.id+'" class="collapse label"></b></label><br>'+
                    '</form>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<div id="odg_pitanje_id_'+element.id+'" class="collapse">'+
              element.odgovor+
            '</div>'+
            '<div id="choosen_odg_id_'+element.id+'" class="collapse">-1'+
            '</div>'
            );
            $(".navigacija-pitanja").append(
              '<a id="nav_pitanje_id_'+element.id+'" class="navigacija-pitanje" onclick="navigacija(this.id);">'+
                '<div id="sel_pitanje_id_'+element.id+'" class="'+selected+' text-center">'+
                  '<span class="navigacija-pitanje-number">'+index+'</span>'+
                  '<div id="col_pitanje_id_'+element.id+'" class="navigacija-pitanje-color-grey"></div>'+
                '</div>'+
              '</a>'
            );
          }
          else if(element.velicina == "BIG") {
            $(".pitanja2").append(
            '<div id="pitanje_id_'+element.id+'" class="row container-fluid p-0 mb-4 visibility '+collapse+'">'+
              '<div class="pitanje-bodovi">'+
                  '<h3 class="pitanje-bodovi-naslov mt-2 mb-2">Pitanje<span class="pitanje-bodovi-naslov-broj"> '+index+'</span></h3>'+
                  '<div id="odgovoreno_id_'+element.id+'" class=" mt-2 mb-2 ">Nije odgovoreno</div>'+
                  '<div id="d_bod_pitanje_id_'+element.id+'" class=" mt-2 mb-2 ">Broj bodova od <b style="font-weight:normal;" id="bod_pitanje_id_'+element.id+'">'+element.bodovi+',00</b></div>'+
              '</div>'+
              '<div class="pitanje-okvir p-3">'+
                '<p class="pitanje-text">'+element.pitanje+'</p>'+
                '<img class="mb-2" src="'+element.slika+'" height="400px;">'+
                '<div class="vrsta-WORD">'+
                  '<div class="form-check pl-0">'+
                    '<form>'+
                      '<textarea id="odabir_text_'+element.id+'" class="mr-2 odabir input-text2" type="textarea" id="male" name="check" value="" oninput="checkAnswerWord(this.id);" style="text-transform:lowercase" rows="10"></textarea>'+
                      '<label for="točno" class="mb-0"><b id="odabir_label_'+element.id+'" class="collapse label"></b></label><br>'+
                    '</form>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<div id="odg_pitanje_id_'+element.id+'" class="collapse">'+
              element.odgovor+
            '</div>'+
            '<div id="choosen_odg_id_'+element.id+'" class="collapse">-1'+
            '</div>'
            );
            $(".navigacija-pitanja").append(
              '<a id="nav_pitanje_id_'+element.id+'" class="navigacija-pitanje" onclick="navigacija(this.id);">'+
                '<div id="sel_pitanje_id_'+element.id+'" class="'+selected+' text-center">'+
                  '<span class="navigacija-pitanje-number">'+index+'</span>'+
                  '<div id="col_pitanje_id_'+element.id+'" class="navigacija-pitanje-color-grey"></div>'+
                '</div>'+
              '</a>'
            );
          }
        }
        if(element.vrsta == "WORDS" && element.id!=-1) {
            var bodovi_total = 0;
            for (var i=0; i<element.bodovi.length; i++) {
              if (element.bodovi[i]>0)
                bodovi_total+=element.bodovi[i];
            }
            $(".pitanja2").append(
            '<div id="pitanje_id_'+element.id+'" class="row container-fluid p-0 mb-4 visibility '+collapse+'">'+
              '<div class="pitanje-bodovi">'+
                  '<h3 class="pitanje-bodovi-naslov mt-2 mb-2">Pitanje<span class="pitanje-bodovi-naslov-broj"> '+index+'</span></h3>'+
                  '<div id="odgovoreno_id_'+element.id+'" class=" mt-2 mb-2 ">Nije odgovoreno</div>'+
                  '<div id="d_bod_pitanje_id_'+element.id+'" class=" mt-2 mb-2 ">Broj bodova od <b style="font-weight:normal;" id="bod_pitanje_id_'+element.id+'">'+bodovi_total+',00</b></div>'+
              '</div>'+
              '<div class="pitanje-okvir p-3">'+
                '<p class="pitanje-text-'+element.id+'"></p>'+
              '</div>'+
            '</div>'
            );
            for (var i=0; i<element.text.length; i++) {
                  $(".pitanje-text-"+element.id).append(
                    element.text[i] + " "
                  );
                  if (i!=element.text.length-1)
                  $(".pitanje-text-"+element.id).append(
                    '<div class="tooltip2 class_odabir_text_'+element.id+i+'">'+
                      '<input id="odabir_text_'+element.id+i+'" class="mr-2 odabir input-text3 " type="text" id="male" name="check" value="" oninput="checkAnswerWords(this.id);" style="text-transform:lowercase">'+
                      '<label for="točno" class="mb-0"><b id="odabir_label_'+element.id+i+'" class="collapse label"></b></label>'+
                      '<span class="tooltiptext2 collapse tooltip_'+element.id+i+'">'+
                        'Netočno <br>'+
                        'Ispravan odgovor je: <b>'+ element.odgovor[i] +'</b><br>' +
                        'Broj bodova: 0,00 od 1,00' +
                      '</span>'+
                    '</div>'+
                    '<div id="odg_pitanje_id_'+element.id+i+'" class="collapse">'+
                      element.odgovor[i]+
                    '</div>'+
                    '<div id="choosen_odg_id_'+element.id+i+'" class="collapse">-1'+
                    '</div>'
                  );
            }
            $(".navigacija-pitanja").append(
              '<a id="nav_pitanje_id_'+element.id+'" class="navigacija-pitanje" onclick="navigacija(this.id);">'+
                '<div id="sel_pitanje_id_'+element.id+'" class="'+selected+' text-center">'+
                  '<span class="navigacija-pitanje-number">'+index+'</span>'+
                  '<div id="col_pitanje_id_'+element.id+'" class="navigacija-pitanje-color-grey"></div>'+
                '</div>'+
              '</a>'
            );
          }
        var ponude = [];
        if(element.vrsta == "CHOOSE" && element.id!=-1) {
          for (var i=0, k=0; i<element.ponude.length; i++) {
            if (Number.isInteger(element.ponude[i])) {
                ponude[k] = element.ponude[i];
                k++;
            }
          }
          var bodovi_total = 0;
          for (var i=0; i<element.bodovi.length; i++) {
            bodovi_total+=element.bodovi[i];
          }
          $(".pitanja2").append(
          '<div id="pitanje_id_'+element.id+'" class="row container-fluid p-0 mb-4 visibility '+collapse+'">'+
            '<div class="pitanje-bodovi pitanje_bodovi_'+element.id+'">'+
                '<h3 class="pitanje-bodovi-naslov mt-2 mb-2">Pitanje<span class="pitanje-bodovi-naslov-broj"> '+element.id+'</span></h3>'+
                '<div id="odgovoreno_id_'+element.id+'" class=" mt-2 mb-2 ">Nije odgovoreno</div>'+
                '<div id="d_bod_pitanje_id_'+element.id+'" class=" mt-2 mb-2 ">Broj bodova od <b style="font-weight:normal;" id="bod_pitanje_id_'+element.id+'">'+bodovi_total+',00</b></div>'+
            '</div>'+
            '<div class="pitanje-okvir p-3">'+
              '<p class="pitanje-text">'+element.pitanje+'</p>'+
              '<div class="vrsta-CHOOSE">'+
                '<div class="form-check pl-0 form_id_'+element.id+'">'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'
          );

          for (var i=0, h=0; i<element.povez.length; i++) {
            $('.form_id_'+element.id).append(
              '<b class="povez_style">'+element.povez[i]+'</b>'+
              '<select id="odabir_choose_'+element.id+i+'" class="mr-2 odabir input-select select_id_'+element.id+i+'" type="" id="male" name="check" value="" onchange="checkAnswerChoose(this.id);">'+
              '<option label="Odaberi" class="grey-text" disabled selected value>  </option></select><label for="točno" class="mb-0"><b id="odabir_label_'+element.id+i+'" class="collapse label"></b></label><br>'
            );
            for (var j=0; j<ponude[i]; j++) {
              $('.select_id_'+element.id+i).append(
                '<option value="'+element.ponude[h+1]+'">'+element.ponude[h+1]+'</option>'
              );
              h++;
            }
            h++;
            $(".pitanja2").append(
            '<div id="odg_pitanje_id_'+element.id+i+'" class="collapse">'+
              element.odgovor[i]+
            '</div>'+
            '<div id="choosen_odg_id_'+element.id+i+'" class="collapse">-1'+
            '</div>'
            );
            $(".pitanje_bodovi_"+element.id).append(
              '<div id="d_bod_pitanje_id_'+element.id+i+'" class="collapse"><b style="font-weight:normal;" id="bod_pitanje_id_'+element.id+i+'">'+element.bodovi[i]+'</b></div>'
            );
          }


          $(".navigacija-pitanja").append(
            '<a id="nav_pitanje_id_'+element.id+'" class="navigacija-pitanje" onclick="navigacija(this.id);">'+
              '<div id="sel_pitanje_id_'+element.id+'" class="'+selected+' text-center">'+
                '<span class="navigacija-pitanje-number">'+element.id+'</span>'+
                '<div id="col_pitanje_id_'+element.id+'" class="navigacija-pitanje-color-grey"></div>'+
              '</div>'+
            '</a>'
          );
        }
      total_pitanja = element.id;
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
}



function zavrsi() {
  $('.dropdown-toggle').prop('disabled', false);
  endtimer = 1;
  $(".zavrsi2").remove();
  $(".zapocni-div").prepend('<button class="btn zapocni zapocni2" type="button" name="button" onclick="zapocni();  timer();">Započni</button>');
  var print =  document.getElementById("list");
  $("input[name=check]").attr('disabled', true);
  $("select[name=check]").attr('disabled', true);
  $("textarea").attr('disabled', true);

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
  var bod = 0;
  var bod3 = 0;
  var ukupno_moguce = 0;
  var bodovi_total_choose = 0;
  var choosen_odg_id;
  $(".visibility").removeClass("collapse");
  $(".tooltipshow").removeClass("collapse");
  $(".label").removeClass("collapse");
  var timer2 =  document.getElementById("timer2");
  timer2.innerHTML = '<a class="showAll" onclick="showAll()">Prikaži sva pitanja na jednoj stranici</a>';
  pitanja.forEach((element, index) => {
    if (element.id !=-1) {
      var id = element.id;
      if (element.vrsta=="CHOOSE") {
        for (var i=0; i<element.povez.length; i++) {
          choosen_odg_id = "choosen_odg_id_" + id + i;
          var bod2 = parseInt(document.getElementById(choosen_odg_id).innerHTML);
          bod3+=bod2;
          if(bod2==-1) bod2 = 0;
          bod+=bod2;
          bodovi_total_choose+=element.bodovi[i];
        }
        if (bod3==(0-bodovi_total_choose)) {
          bod=-1;
        }
      }
      else if (element.vrsta=="WORDS") {
        for (var i=0; i<element.bodovi.length; i++) {
          choosen_odg_id = "choosen_odg_id_" + id + i;
          var bod2 = parseInt(document.getElementById(choosen_odg_id).innerHTML);
          bod3+=bod2;
          if(bod2==-1) bod2 = 0;
          bod+=bod2;
          bodovi_total_choose+=element.bodovi[i];
        }
        if (bod3==(0-bodovi_total_choose)) {
          bod=-1;
        }
      }
      else if (element.vrsta=="MULTI") {
        var multi_check = 1;
        for (var i=0; i<element.ponude.length; i++) {
          choosen_odg_id = "choosen_odg_id_" + id + i;
          multi_odabir = document.getElementById("odabir_id_" + id + i);
          if (multi_odabir.checked == true)
            multi_check = 0;
          var bod2 = parseInt(document.getElementById(choosen_odg_id).innerHTML);
          if(bod2==-2) bod2 = 0;
          bod3+=bod2;
          bod+=bod2;
          if (element.bodovi[i] > 0)
            bodovi_total_choose+=element.bodovi[i];
        }
        if (bod3==0 && multi_check)
          bod=-1;
        else if (bod3 < 0)
          bod=0;
      }
      else {
        choosen_odg_id = "choosen_odg_id_" + id;
        bod = parseInt(document.getElementById(choosen_odg_id).innerHTML);
        bodovi_total_choose=element.bodovi;
      }

      var col_pitanje_id = "#col_pitanje_id_" + id;
      var col_pitanje_id2 = document.getElementById("col_pitanje_id_" + id);
      var bod_pitanje_id = document.getElementById("d_bod_pitanje_id_" + id);

      if (bod==0) {
        $(col_pitanje_id).addClass("navigacija-pitanje-color-red");
        $(col_pitanje_id).removeClass("navigacija-pitanje-color-grey");
        $(col_pitanje_id).removeClass("navigacija-pitanje-color-green");
        bod_pitanje_id.innerHTML = 'Broj bodova: '+0+',00 <br> od '+bodovi_total_choose+',00'
      }
      else if (bod==-1) {
        $(col_pitanje_id).addClass("navigacija-pitanje-color-grey");
        $(col_pitanje_id).removeClass("navigacija-pitanje-color-green");
        bod_pitanje_id.innerHTML = 'Broj bodova: '+0+',00 <br> od '+bodovi_total_choose+',00'
      }
      else if (bod==bodovi_total_choose){
        $(col_pitanje_id).addClass("navigacija-pitanje-color-green");
        $(col_pitanje_id).removeClass("navigacija-pitanje-color-grey");
        col_pitanje_id2.innerHTML = '<b class="checkmark">✓</b>';
        bod_pitanje_id.innerHTML = 'Broj bodova: '+bod+',00 <br> od '+bodovi_total_choose+',00'
      }

      else {
        $(col_pitanje_id).addClass("navigacija-pitanje-color-yellow");
        $(col_pitanje_id).removeClass("navigacija-pitanje-color-grey");
        col_pitanje_id2.innerHTML = '<b class="checkmark2">●</b>';
        bod_pitanje_id.innerHTML = 'Broj bodova: '+bod+',00 <br> od '+bodovi_total_choose+',00'
      }
      if (bod==-1) bod = 0;
      rez+=bod;
      ukupno_moguce += bodovi_total_choose;
      bodovi_total_choose = 0;
      bod=0;
      bod2=0;
      bod3=0;
    }
  });
  var postotak = rez/ukupno_moguce*100;
  rez = rez.toFixed(2);
  ukupno_moguce = ukupno_moguce.toFixed(2)
  var ocjena = document.getElementById("ocjena");
  ocjena.innerHTML = "<b>" + rez + "</b> od maksimalno " + ukupno_moguce + " (<b>"+postotak.toFixed(2)+"</b>%)";
  $(".rezultati").append(postotak.toFixed(2) + "% | ");

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
  var trenutno_pitanje = document.getElementById("trenutno_pitanje");
  trenutno_pitanje.innerHTML = id;
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

  $(pitanje_id).removeClass("navigacija-pitanje-color-grey");
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
    id_pitanja2.innerHTML = '';
    id_pitanja3.innerHTML = '';
    id_pitanja.innerHTML = '<b style="color:red; font-weight:normal;">X</b>';
  }
}


function checkAnswerWord(id) {
  var choosen = document.getElementById(id).value;
  var choosen2 = document.getElementById(id).type;
  var id = idToNumber(id);
  var id_pitanja2 = document.getElementById("odabir_text_"+id);
  var id_pitanja = document.getElementById("odabir_label_"+id);
  var odgovoreno_id = "odgovoreno_id_" + id;
  var choosen_odg_id = "choosen_odg_id_" + id;
  var pitanje_id = "#col_pitanje_id_" + id;
  var odg_id = "odg_pitanje_id_" + id;
  var bod_id = "bod_pitanje_id_" + id;
  var odg = document.getElementById(odg_id).innerHTML;
  document.getElementById(odgovoreno_id).innerHTML = "Odgovoreno";

  $(pitanje_id).removeClass("navigacija-pitanje-color-grey");
  $(pitanje_id).addClass("navigacija-pitanje-color-green");

  var bod =  parseInt(document.getElementById(bod_id).innerHTML);
  var rez = document.getElementById(choosen_odg_id);
  if (choosen2!="textarea") {
    if (stringSimilarity.compareTwoStrings(odg,choosen)>0.79) {
      rez.innerHTML=bod;
      id_pitanja.innerHTML = '<b style="color:green;">✓</b>';
    }
    else {
      rez.innerHTML=0;
      id_pitanja.innerHTML = '<b style="color:red; font-weight:normal;">X '+ odg +'</b>';
    }
  }
  else {
    if (stringSimilarity.compareTwoStrings(odg,choosen)>0.90) {
      rez.innerHTML=bod;
      id_pitanja.innerHTML = '<b style="color:green;">✓</b>';
    }
    else if (stringSimilarity.compareTwoStrings(odg,choosen)>0.10) {
      rez.innerHTML=(bod*stringSimilarity.compareTwoStrings(odg,choosen)).toFixed(2);
      id_pitanja.innerHTML = '<b style="color:orange; font-weight:normal;">• '+ odg +'</b>';
    }
    else {
      rez.innerHTML=0;
      id_pitanja.innerHTML = '<b style="color:red; font-weight:normal;">X '+ odg +'</b>';
    }
  }
}

function checkAnswerWords(id) {
  var choosen = document.getElementById(id).value;
  var choosen2 = document.getElementById(id).type;
  var id = idToNumber(id);
  var id_pitanja2 = document.getElementById("odabir_text_"+id);
  var id_pitanja = document.getElementById("odabir_label_"+id);
  if (id>100) {
    var odgovoreno_id = ("odgovoreno_id_" + id).slice(0, -2);
    var pitanje_id = ("#col_pitanje_id_" + id).slice(0, -2);
  }
  else {
    var odgovoreno_id = ("odgovoreno_id_" + id).slice(0, -1);
    var pitanje_id = ("#col_pitanje_id_" + id).slice(0, -1);
  }
  var choosen_odg_id = "choosen_odg_id_" + id;
  var odg_id = "odg_pitanje_id_" + id;
  var bod_id = "bod_pitanje_id_" + id;
  var odg = document.getElementById(odg_id).innerHTML;
  document.getElementById(odgovoreno_id).innerHTML = "Odgovoreno";

  $(pitanje_id).removeClass("navigacija-pitanje-color-grey");
  $(pitanje_id).addClass("navigacija-pitanje-color-green");

  var bod = 1;
  var rez = document.getElementById(choosen_odg_id);
    if (stringSimilarity.compareTwoStrings(odg,choosen)==1) {
      rez.innerHTML=bod;
      $('.tooltip_'+id).removeClass("tooltipshow");
      id_pitanja.innerHTML = '<b style="color:green;">✓ &nbsp</b>';
    }
    else {
      rez.innerHTML=0;
      $('.tooltip_'+id).addClass("tooltipshow");
      id_pitanja.innerHTML = '<b style="color:red; font-weight:normal;">X &nbsp</b>';
    }
}

function checkAnswerChoose(id) {
  var choosen = document.getElementById(id).value;
  var id = idToNumber(id);
  var id_pitanja2 = document.getElementById("odabir_choose_"+id);
  var id_pitanja = document.getElementById("odabir_label_"+id);
  var odgovoreno_id = ("odgovoreno_id_" + id).slice(0, -1);
  var choosen_odg_id = "choosen_odg_id_" + id;
  var pitanje_id = ("#col_pitanje_id_" + id).slice(0, -1);
  var odg_id = "odg_pitanje_id_" + id;
  var bod_id = "bod_pitanje_id_" + id;
  var odg = document.getElementById(odg_id).innerHTML;

  document.getElementById(odgovoreno_id).innerHTML = "Odgovoreno";

  $(pitanje_id).removeClass("navigacija-pitanje-color-grey");
  $(pitanje_id).addClass("navigacija-pitanje-color-green");

  var bod =  parseInt(document.getElementById(bod_id).innerHTML);
  var rez = document.getElementById(choosen_odg_id);
  if (odg==choosen) {
    rez.innerHTML=bod;
    id_pitanja.innerHTML = '<b style="color:green;">✓</b>';
  }
  else {
    rez.innerHTML=0;
    id_pitanja.innerHTML = '<b style="color:red; font-weight:normal;">X</b>';
  }
}

function checkAnswerMulti(id) {
  var choosen = document.getElementById(id).value;
  var id = idToNumber(id);
  var id_pitanja2 = document.getElementById("odabir_choose_"+id);
  var id_pitanja = document.getElementById("todabir_id_"+id);
  var odgovoreno_id = ("odgovoreno_id_" + id).slice(0, -1);
  var choosen_odg_id = "choosen_odg_id_" + id;
  var pitanje_id = ("#col_pitanje_id_" + id).slice(0, -1);
  var odg_id = "odg_pitanje_id_" + id;
  var bod_id = "bod_pitanje_id_" + id;
  var odg = document.getElementById(odg_id).innerHTML;

  document.getElementById(odgovoreno_id).innerHTML = "Odgovoreno";

  $(pitanje_id).removeClass("navigacija-pitanje-color-grey");
  $(pitanje_id).addClass("navigacija-pitanje-color-green");

  var bod =  parseInt(document.getElementById(bod_id).innerHTML);
  var rez = document.getElementById(choosen_odg_id);
  if (odg==choosen) {
    if (id_pitanja.innerHTML == '<b style="color:green;">✓</b>') {
      id_pitanja.innerHTML = '';
      rez.innerHTML=0;
    }
    else {
      id_pitanja.innerHTML = '<b style="color:green;">✓</b>';
      rez.innerHTML=bod;
    }
  }
  else {
    rez.innerHTML=0;
    if (id_pitanja.innerHTML == '<b style="color:red; font-weight:normal;">X</b>') {
      id_pitanja.innerHTML = '';
      rez.innerHTML=0;
    }
    else {
      id_pitanja.innerHTML = '<b style="color:red; font-weight:normal;">X</b>';
      rez.innerHTML=bod;
    }
  }
}

function pretPitanje() {
  var trenutno_pitanje = document.getElementById("trenutno_pitanje");
  var id = trenutno_pitanje.innerHTML;
  id = parseInt(id);
  if (id!=1) {
    var pitanje_id = "#pitanje_id_" + (id-1);
    $(".visibility").addClass("collapse");
    $(pitanje_id).removeClass("collapse");
    trenutno_pitanje.innerHTML = id-1;
    var pitanje_sel_id = "#sel_pitanje_id_" + (id-1);
    $(".navigacija-pitanje-box-selected").addClass("navigacija-pitanje-box");
    $(".navigacija-pitanje-box-selected").removeClass("navigacija-pitanje-box-selected");
    $(pitanje_sel_id).addClass("navigacija-pitanje-box-selected");
  }
}

function sljedPitanje () {
  var trenutno_pitanje = document.getElementById("trenutno_pitanje");
  var id = trenutno_pitanje.innerHTML;
  id = parseInt(id);
  if (id!=total_pitanja) {
    var pitanje_id = "#pitanje_id_" + (id+1);
    $(".visibility").addClass("collapse");
    $(pitanje_id).removeClass("collapse");
    trenutno_pitanje.innerHTML = id+1;
    var pitanje_sel_id = "#sel_pitanje_id_" + (id+1);
    $(".navigacija-pitanje-box-selected").addClass("navigacija-pitanje-box");
    $(".navigacija-pitanje-box-selected").removeClass("navigacija-pitanje-box-selected");
    $(pitanje_sel_id).addClass("navigacija-pitanje-box-selected");
  }
}


/*
[
  //vrijeme
  {"id": -1 , "vrijeme": 300},

  //točno - netočno
  {"id": 1 , "vrsta": "TN" , "pitanje": "2+2=7" , "odgovor": "netočno" ,   "bodovi": 1},

  //upisivanje riječi
  {"id": 2 , "vrsta": "WORD" , "velicina": "SMALL" , "pitanje": "Što znači skraćenica AFK?" , "odgovor": "away from keyboard" ,   "bodovi": 1, "slika": "slike/01.png"},

  //povezivanje
  {"id": 3 , "vrsta": "CHOOSE" , "pitanje": "Poveži odgovore." ,
  "povez": ["OS", "RM"] ,
  "ponude": [2, "operacijski sustavi" , "računalne mreže" , 2 , "operacijski sustavi" , "računalne mreže"] ,
  "odgovor": ["operacijski sustavi" , "računalne mreže"] ,
  "bodovi": [1, 1]},

  //odabir
  {"id": 4 , "vrsta": "MULTI" , "pitanje": "Odaberi točno." ,
  "ponude": ["operacijski sustavi" , "računalne mreže" , "programiranje" , "baze podataka"] ,
  "odgovor": ["operacijski sustavi" , "računalne mreže" , "netočno" , "netočno"] ,
  "bodovi": [1, 1, -1, -1], "slika": "slike/01.png"}
]
*/
