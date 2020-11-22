function mjestoPrebivalista() {
  var drzava = document.getElementById("#mp-drzava").value;
  var grad = document.getElementById("#mp-grad").value;
  var postanski_broj = document.getElementById("#mp-postanski_broj").value;
  var adresa = document.getElementById("#mp-adresa").value;
  var mjesto_prebivalista = ("INSERT INTO mjesto_prebivalista VALUES ( NULL, '" + drzava + "', '" + grad + "', '" + postanski_broj + "', '" + adresa + "');");
  document.getElementById("#mp-insert").innerHTML = mjesto_prebivalista;
}

function datum() {
  var dolazak = new Date(document.getElementById("#d-dolazak").value);
  var odlazak = new Date(document.getElementById("#d-odlazak").value);
  var trajanje = Math.ceil(Math.abs(dolazak - odlazak) / (1000 * 60 * 60 * 24));
  var sezona = document.getElementById("#d-odlazak").value;
  var datum = ("Dolazak: " + dolazak + " <br> Odlazak: " + odlazak + " <br> Trajanje: " + trajanje + " dana <br> Sezona: A" );
  document.getElementById("#d-insert").innerHTML = datum;
}

function gost() {
  var ime = document.getElementById("#g-ime").value;
  var prezime = document.getElementById("#g-prezime").value;
  var oib = document.getElementById("#g-oib").value;
  var broj_osobne = document.getElementById("#g-broj_osobne").value;
  var datum = new Date(document.getElementById("#g-datum_rodenja").value);
  var broj_gostiju = document.getElementById("#broj_gostiju").innerHTML;
  var index=1;
  var check;
  do {
    id = "#gost_" + index;
    check = document.getElementById(id);
    if (check == null) {
      $(".gosti").append(
          '<p id="' + id + '">' + index + '. INSERT INTO gost VALUES ( NULL, ' + ime + ' , ' + prezime + ' , ' + oib + ', ' + broj_osobne + ', NULL, ' + datum + ');<a class="w3-right w3-text-red delete" onclick="deleteGost(this)">X</a></p>'
      );
      document.getElementById("#broj_gostiju").innerHTML = parseInt(broj_gostiju) + 1;
      break;
    }
    else
      index++;
  } while(check != null);
}

function deleteGost(obj) {
  var broj_gostiju = document.getElementById("#broj_gostiju").innerHTML;
  var o = obj;
  while(!o.id) {
    o = o.parentNode;
  }
  var id = o.id;
  document.getElementById("#broj_gostiju").innerHTML = parseInt(broj_gostiju) - 1;
  document.getElementById(id).remove();
}
