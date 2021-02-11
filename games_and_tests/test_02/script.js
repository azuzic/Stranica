function txt() {
    var print =  document.getElementById("list");
    var fileUrl = 'test.txt';
    fetch(fileUrl)
       .then( r => r.text() )
       .then( t => print.innerHTML=t )
}

function test() {
  var print =  document.getElementById("list");

  var manga = JSON.parse(print.innerHTML);

  manga.forEach((element, index) => {
      console.log(index + ". " + element.name + " Score:" + element.score + " Vol:" + element.vol);
  });
}
