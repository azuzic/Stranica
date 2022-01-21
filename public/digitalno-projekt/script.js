$(document).ready(function() {
            $('[data-toggle="tooltip"]').tooltip();
        });

function provjeraForme()
{
  
  if (document.getElementById('naslov').value=='')
  {
    alert('Niste upisali naslov');
    return false;
  }
  else if (document.getElementById('opis').value=='')
  {
    alert('Niste napisali kratak opis');
    return false;
  }
  else if (document.getElementById('sadrzaj').value=='')
  {
    alert('Niste napisali sadrzaj');
    return false;
  }
  else if (document.getElementById('cijena').value=='')
  {
    alert('Niste unijeli cijenu.');
    return false;
  }
  else if (document.getElementById('cijena').value<=0)
  {
    alert('Molimo unesite cijenu veću od 0');
    return false;
  }
  else if (document.getElementById('cijena').value<=0)
  {
    alert('Cijena je mora biti veca od 0.');
    return false;
  }
  else if (document.getElementById('klijent_ime').value=='')
  {
    alert('Niste unijeli ime.');
    return false;
  }
  else if (document.getElementById('klijent_prezime').value=='')
  {
    alert('Niste unijeli prezime.');
    return false;
  }
  else if (document.getElementById('klijent_email').value=='')
  {
    alert('Niste unijeli email.');
    return false;
  }
  else if (document.getElementById('klijent_broj_tel').value=='')
  {
    alert('Niste unijeli broj telefona.');
    return false;
  }
}

function provjeraForme2(){

oib = document.getElementById('klijent_oib').value.length;
console.log(oib);
checkbox = document.getElementById('customCheck');
if (document.getElementById('klijent_ime').value=='')
    {
    alert('Niste unijeli ime');
    return false;
    } 
if (document.getElementById('klijent_prezime').value=='')
    {
    alert('Niste unijeli prezime');
    return false;
    } 
if (document.getElementById('klijent_oib').value=='')
    {
    alert('Niste unijeli OIB');
    return false;
    } 
if (oib!=11)
    {
    alert('Unijeli ste neispravan OIB');
    return false;
    } 
if (document.getElementById('klijent_broj_tel').value=='')
    {
    alert('Niste unijeli broj telefona');
    return false;
    }    
if (document.getElementById('klijent_adresa').value=='')
    {
    alert('Niste unijeli adresu');
    return false;
    }   
if (document.getElementById('klijent_postanski_broj').value=='')
    {
    alert('Niste unijeli poštanski broj');
    return false;
    }   
if (document.getElementById('klijent_email').value=='')
    {
    alert('Niste unijeli email adresu');
    return false;
    } 
if (!checkbox.checked) 
    {
    alert('Niste prihvatili uvjete poslovanja!');
    return false;
    }

}

function odabir_duljine_kabla_xlr1(){
  
console.log("Promjena...")
var duljina= document.getElementById('duzina_kabla_xlr');
var odabrana_duljina= duljina.value;
odabrana_duljina= parseInt(odabrana_duljina)
console.log(odabrana_duljina)
var cijena= document.getElementById('promijena_cijene_xlr');
switch (odabrana_duljina){

  case 1:
    cijena.innerHTML='Cijena: 9.99 kn';
  break;

  case 3:
    cijena.innerHTML='Cijena: 19.99 kn';
  break;

  case 5:
    cijena.innerHTML='Cijena: 34.99 kn';
  break;

  case 7:
    cijena.innerHTML='Cijena: 49.99 kn';
  break;

  case 10:
    cijena.innerHTML='Cijena: 69.99 kn';
  break;

  case 15:
    cijena.innerHTML='Cijena: 100.00 kn';
  break;

  case 20:
    cijena.innerHTML='Cijena: 150.00 kn';
  break;

}
}

function odabir_duljine_kabla_xlr2(){
  
console.log("Promjena...")
var duljina= document.getElementById('duzina_kabla_xlr2');
var odabrana_duljina= duljina.value;
odabrana_duljina= parseInt(odabrana_duljina)
console.log(odabrana_duljina)
var cijena= document.getElementById('promijena_cijene_xlr2');
switch (odabrana_duljina){

  case 1:
    cijena.innerHTML='Cijena: 12.00 kn';
  break;

  case 3:
    cijena.innerHTML='Cijena: 19.99 kn';
  break;

  case 5:
    cijena.innerHTML='Cijena: 40.00 kn';
  break;

  case 7:
    cijena.innerHTML='Cijena: 59.99 kn';
  break;

  case 10:
    cijena.innerHTML='Cijena: 75.00 kn';
  break;

  case 15:
    cijena.innerHTML='Cijena: 115.00 kn';
  break;

  case 20:
    cijena.innerHTML='Cijena: 165.00 kn';
  break;

}
}
function odabir_kolicine_trzalica() {
  
console.log("Promjena...")
var duljina= document.getElementById('kolicina_trzalica');
var odabrana_duljina= duljina.value;
odabrana_duljina= parseInt(odabrana_duljina)
console.log(odabrana_duljina)
var cijena= document.getElementById('promijena_cijene_trzalica');
switch (odabrana_duljina){

  case 12:
    cijena.innerHTML='Cijena: 50.00 kn';
  break;

  case 24:
    cijena.innerHTML='Cijena: 79.99 kn';
  break;

  case 36:
    cijena.innerHTML='Cijena: 100.00 kn';
  break;

  case 48:
    cijena.innerHTML='Cijena: 139.99 kn';
  break;

  case 60:
    cijena.innerHTML='Cijena: 199.99 kn';
  break;

  case 96:
    cijena.innerHTML='Cijena: 279.00 kn';
  break;

  case 120:
    cijena.innerHTML='Cijena: 300.00 kn';
  break;

}

}

function odabirTrzalice(){
var slika_trzalice = document.getElementById('slika_trzalice');
var odabrana_slika = slika_trzalice.src;
console.log(odabrana_slika);



var velicina= document.getElementById('velicina_trzalice');
var velicina_odabrana= velicina.value;
velicina_odabrana= parseInt(velicina_odabrana);

var opis_trzalice = document.getElementById('opis_trzalice2');
console.log(velicina_odabrana);
console.log(opis_trzalice.innerHTML);
switch (velicina_odabrana){

  case 50:
    opis_trzalice.innerHTML='Odabrana veličina: 0.50mm';
    slika_trzalice.src='foto/Proizvodi/Istra music shop - Kategorija - Dodatna Oprema - Jim Dunlop trzalica - crvena.png';
    
  break;

  case 60:
    opis_trzalice.innerHTML='Odabrana veličina: 0.60mm';
    slika_trzalice.src='foto/Proizvodi/Istra music shop - Kategorija - Dodatna Oprema - Jim Dunlop trzalica - narančasta.png';
  break;

  case 73:
    opis_trzalice.innerHTML='Odabrana veličina: 0.73mm';
    slika_trzalice.src='foto/Proizvodi/Istra music shop - Kategorija - Dodatna Oprema - Jim Dunlop trzalica - žuta.png';
  break;

  case 88:
    opis_trzalice.innerHTML='Odabrana veličina: 0.88mm';
    slika_trzalice.src='foto/Proizvodi/Istra music shop - Kategorija - Dodatna Oprema - Jim Dunlop trzalica - zelena.png';
  break;

  case 100:
    opis_trzalice.innerHTML='Odabrana veličina: 1.00mm';
    slika_trzalice.src='foto/Proizvodi/Istra music shop - Kategorija - Dodatna Oprema - Jim Dunlop trzalica - plava.png';
  break;

  case 114:
    opis_trzalice.innerHTML='Odabrana veličina: 1.14mm';
    slika_trzalice.src='foto/Proizvodi/Istra music shop - Kategorija - Dodatna Oprema - Jim Dunlop trzalica - ljubičasta.png';
  break;

}

}

function odabir_duljine_kabla_inst(){

console.log("Promjena...");
var duljina= document.getElementById('duzina_kabla_inst');
var odabrana_duljina= duljina.value;
odabrana_duljina= parseInt(odabrana_duljina);
console.log(odabrana_duljina);
var cijena= document.getElementById('promijena_cijene_inst');
switch (odabrana_duljina){

  case 1:
    cijena.innerHTML='Cijena: 120.00 kn';
  break;

  case 3:
    cijena.innerHTML='Cijena: 199.99 kn';
  break;

  case 5:
    cijena.innerHTML='Cijena: 299.00 kn';
  break;

  case 7:
    cijena.innerHTML='Cijena: 399.99 kn';
  break;

  case 10:
    cijena.innerHTML='Cijena: 449.99 kn';
  break;

  case 15:
    cijena.innerHTML='Cijena: 600.00 kn';
  break;

  case 20:
    cijena.innerHTML='Cijena: 750.00 kn';
  break;

}


}

function odabir_kategorije_iznajmljivanje(){

  console.log("promjena...");
  var kategorija= document.getElementById('izn_kategorije');
  var odabrana_kategorija = kategorija.value;
  odabrana_kategorija= parseInt(odabrana_kategorija);
  console.log(odabrana_kategorija);
  var tekst = document.getElementById('izn_odabir');

  switch(odabrana_kategorija){
    case 1:
    tekst.innerHTML='Odabrali ste: <b>Gitara - Gibson Explorer</b>';
    break;
    case 2:
    tekst.innerHTML='Odabrali ste: <b>Gitara - Fender stratocaster 59 </b>';
    break;
    case 3:
    tekst.innerHTML='Odabrali ste: <b>Gitara - Gibson Les Paul </b>';
    break;
    case 4:
    tekst.innerHTML='Odabrali ste: <b>Gitara - Ibanez RG421 </b>';
    break;
    case 5:
    tekst.innerHTML='Odabrali ste: <b>Gitara - Gibson SG Standard </b>';
    break;
    case 6:
    tekst.innerHTML='Odabrali ste: <b>Gitara - Fender stratocaster classic </b>';
    break;
    case 7:
    tekst.innerHTML='Odabrali ste: <b>Bubnjevi - Pearl decade </b>';
    break;
    case 8:
    tekst.innerHTML='Odabrali ste: <b>Bubnjevi - Primes bubnjevi </b>';
    break;
    case 9:
    tekst.innerHTML='Odabrali ste: <b>Bubnjevi - Yamaha Rydeen 2F5 </b>';
    break;
    case 10:
    tekst.innerHTML='Odabrali ste: <b>Bubnjevi - Ludwig Accent LC1704 </b>';
    break;
    case 11:
    tekst.innerHTML='Odabrali ste: <b>Bubnjevi - Pearl Session Studio </b>';
    break;
    case 12:
    tekst.innerHTML='Odabrali ste: <b>Bubnjevi - Gear4music junior bubanj </b>';
    break;
    case 13:
    tekst.innerHTML='Odabrali ste: <b>Bass - Fender player jazz bass </b>';
    break;
    case 14:
    tekst.innerHTML='Odabrali ste: <b>Bass - Fender Deluxe Precision </b>';
    break;
    case 15:
    tekst.innerHTML='Odabrali ste: <b>Bass - Yamaha LH400 </b>';
    break;
    case 16:
    tekst.innerHTML='Odabrali ste: <b>Bass - Fender Squier </b>';
    break;
    case 17:
    tekst.innerHTML='Odabrali ste: <b>Bass - Höfner H500 Beatles CavernBass </b>';
    break;
    case 18:
    tekst.innerHTML='Odabrali ste: <b>Pojačala - Marshall studio vintage </b>';
    break;
    case 19:
    tekst.innerHTML='Odabrali ste: <b>Pojačala - Fender Twin Reverb </b>';
    break;
    case 20:
    tekst.innerHTML='Odabrali ste: <b>Pojačala - Orange TH30 </b>';
    break;
    case 21:
    tekst.innerHTML='Odabrali ste: <b>Pojačala - Fender 65 deluxe reverb </b>';
    break;
    case 22:
    tekst.innerHTML='Odabrali ste: <b>Pojačala - Vox AC30 </b>';
    break;
    case 23:
    tekst.innerHTML='Odabrali ste: <b>Pojačala - Engl E600 Ironball </b>';
    break;
    case 24:
    tekst.innerHTML='Odabrali ste: <b>Pojačala - Blackstar Studio 10 </b>';
    break;
    

  }

}

function odabir_sifre(){
  console.log('promjena...');
  var sifra = document.getElementById('izn_odabir_sifra');
  var upisana_sifra = sifra.value;

    var kategorija= document.getElementById('izn_kategorije');
  console.log(upisana_sifra);

  var tekst = document.getElementById('izn_odabir');

    if (upisana_sifra!=''){ 
  kategorija.disabled=true;

    {
      if (upisana_sifra=='#0001'){
        tekst.innerHTML='Odabrali ste: <b>Gitara - Gibson Explorer</b>';
        kategorija.value='1';
      }

      else if (upisana_sifra=='#0002'){
        tekst.innerHTML='Odabrali ste: <b>Gitara - Fender stratocaster 59 </b>';
        kategorija.value='2';
      }

      else if (upisana_sifra=='#0003'){
        tekst.innerHTML='Odabrali ste: <b>Gitara - Gibson Les Paul </b>';
        kategorija.value='3';
      }

      else if (upisana_sifra=='#0004'){
        tekst.innerHTML='Odabrali ste: <b>Gitara - Ibanez RG421 </b>';
        kategorija.value='4';
      }

      else if (upisana_sifra=='#0005'){
        tekst.innerHTML='Odabrali ste: <b>Gitara - Gibson SG Standard </b>';
        kategorija.value='5';
      }

      else if (upisana_sifra=='#0006'){
        tekst.innerHTML='Odabrali ste: <b>Gitara - Fender stratocaster classic </b>';
        kategorija.value='6';
      }

      else if (upisana_sifra=='#0007'){
        tekst.innerHTML='Odabrali ste: <b>Bubnjevi - Pearl decade </b>';
        kategorija.value='7';
      }

      else if (upisana_sifra=='#0008'){
        tekst.innerHTML='Odabrali ste: <b>Bubnjevi - Primes bubnjevi </b>';
        kategorija.value='8';
      }

      else if (upisana_sifra=='#0009'){
        tekst.innerHTML='Odabrali ste: <b>Bubnjevi - Yamaha Rydeen 2F5 </b>';
        kategorija.value='9';
      }

      else if (upisana_sifra=='#0001'){
        tekst.innerHTML='Odabrali ste: <b>Bubnjevi - Ludwig Accent LC1704 </b>';
        kategorija.value='10';
      }

      else if (upisana_sifra=='#0011'){
        tekst.innerHTML='Odabrali ste: <b>Bubnjevi - Pearl Session Studio </b>';
        kategorija.value='11';
      }

      else if (upisana_sifra=='#0012'){
        tekst.innerHTML='Odabrali ste: <b>Bubnjevi - Gear4music junior bubanj </b>';
        kategorija.value='12';
      }

      else if (upisana_sifra=='#0013'){
        tekst.innerHTML='Odabrali ste: <b>Bass - Fender player jazz bass </b>';
        kategorija.value='13';
      }

      else if (upisana_sifra=='#0014'){
        tekst.innerHTML='Odabrali ste: <b>Bass - Fender Deluxe Precision </b>';
        kategorija.value='14';
      }

      else if (upisana_sifra=='#0015'){
        tekst.innerHTML='Odabrali ste: <b>Bass - Yamaha LH400 </b>';
        kategorija.value='15';
      }

      else if (upisana_sifra=='#0016'){
        tekst.innerHTML='Odabrali ste: <b>Bass - Fender Squier </b>';
        kategorija.value='16';
      }

      else if (upisana_sifra=='#0017'){
        tekst.innerHTML='Odabrali ste: <b>Bass - Höfner H500 Beatles CavernBass </b>';
        kategorija.value='17';
      }

      else if (upisana_sifra=='#0018'){
        tekst.innerHTML='Odabrali ste: <b>Pojačala - Marshall studio vintage </b>';
        kategorija.value='18';
      }

      else if (upisana_sifra=='#0019'){
        tekst.innerHTML='Odabrali ste: <b>Pojačala - Fender Twin Reverb </b>';
        kategorija.value='19';
      }

      else if (upisana_sifra=='#0020'){
        tekst.innerHTML='Odabrali ste: <b>Pojačala - Orange TH30 </b>';
        kategorija.value='20';
      }

      else if (upisana_sifra=='#0021'){
        tekst.innerHTML='Odabrali ste: <b>Pojačala - Fender 65 deluxe reverb </b>';
        kategorija.value='21';
      }

      else if (upisana_sifra=='#0022'){
        tekst.innerHTML='Odabrali ste: <b>Pojačala - Vox AC30 </b>';
        kategorija.value='22';
      }

      else if (upisana_sifra=='#0023'){
        tekst.innerHTML='Odabrali ste: <b>Pojačala - Engl E600 Ironball </b>';
        kategorija.value='23';
      }

      else if (upisana_sifra=='#0024'){
        tekst.innerHTML='Odabrali ste: <b>Pojačala - Blackstar Studio 10 </b>';
        kategorija.value='24';
      }





    }


    }
    else{
      kategorija.disabled=false;
    }

}

//izn_odabir - paragraf
//izn_kategorije - kategorije u selectu
//izn_odabir_sifra


function odabir_boje(boja){
  console.log('promjena boje...');
var kategorija_boje= document.getElementById(boja);
var foto;
console.log(kategorija_boje.value);
if (boja=='boje1'){

  foto=document.getElementById('explorer_slika');

  if(kategorija_boje.value==1){
    foto.src='foto/Proizvodi/Istra music shop - Kategorija - Elektricne Gitare - Gibson Explorer.png';
  }

  else if (kategorija_boje.value==2){
    foto.src='foto/Proizvodi/boje/Istra music shop - Kategorija - Elektricne Gitare - Gibson Explorer bijela.png';
  }

  else if (kategorija_boje.value==3){
    foto.src='foto/Proizvodi/boje/Istra music shop - Kategorija - Elektricne Gitare - Gibson Explorer crna.png';
  }
}

else if (boja=='boje2'){

  foto=document.getElementById('gibsonLP_slika');
  if(kategorija_boje.value==1){
    foto.src='foto/Proizvodi/Istra music shop - Kategorija - Elektricne Gitare - Gibson Les Paul Standard.png';
  }
  else if (kategorija_boje.value==2){
    foto.src='foto/Proizvodi/boje/Istra music shop - Kategorija - Elektricne Gitare - Gibson Les Paul Standard zlatna.png';
  }
}
else if (boja=='boje3'){
  foto=document.getElementById('gibsonSG_slika');
  if (kategorija_boje.value==1){
    foto.src='foto/Proizvodi/Istra music shop - Kategorija - Elektricne Gitare - Gibson SG Standard.png';
  }
  else if (kategorija_boje.value==2){
    foto.src='foto/Proizvodi/boje/Istra music shop - Kategorija - Elektricne Gitare - Gibson SG Standard crvena.png'
  }
}
else if (boja=='boje4'){
  foto=document.getElementById('pearl_decade_Slika');
  if (kategorija_boje.value==1){
    foto.src='foto/Proizvodi/Istra music shop - Kategorija - Bubnjevi - Pearl decade.png'
  }
  else if (kategorija_boje.value==2){
    foto.src='foto/Proizvodi/boje/Istra music shop - Kategorija - Bubnjevi - Pearl decade smeda.png';
  }
}
else if(boja=='boje5'){
  foto=document.getElementById('yamaha_bubanj_slika');
  if (kategorija_boje.value==1){
    foto.src='foto/Proizvodi/Istra music shop - Kategorija - Bubnjevi - Ludwig Accent LC1704.png'
  }
  else if (kategorija_boje.value==2){
    foto.src='foto/Proizvodi/boje/Istra music shop - Kategorija - Bubnjevi - Yamaha Rydeen 2F5 zuti.png'
  }
  else if (kategorija_boje.value==3){
    foto.src='foto/Proizvodi/boje/Istra music shop - Kategorija - Bubnjevi - Yamaha Rydeen 2F5 crni.png'
  }
}
else if (boja=='boje6'){
  foto = document.getElementById('bas1_slika');
  if (kategorija_boje.value==1){
    foto.src='foto/Proizvodi/Istra music shop - Kategorija - Bas Gitare - Fender player jazz bass.png'
  }
  else if (kategorija_boje.value==2){
    foto.src='foto/Proizvodi/boje/Fender player jazz bass crveni.png'
  }
  else if (kategorija_boje.value==3){
    foto.src='foto/Proizvodi/boje/Fender player jazz bass plavi.png'
  }
}
else if (boja=='boje7'){
  foto = document.getElementById('bas4_slika');
  if (kategorija_boje.value==1){
    foto.src='foto/Proizvodi/Istra music shop - Kategorija - Bas Gitare - Fender Squier.png'
  }
  else if (kategorija_boje.value==2){
    foto.src='foto/Proizvodi/boje/Istra music shop - Kategorija - Bas Gitare - Fender Squier crna.png'
  }
  else if (kategorija_boje.value==3){
    foto.src='foto/Proizvodi/boje/Istra music shop - Kategorija - Bas Gitare - Fender Squier smeda.png'
  }
}

}//glavna funkcija