function MaxView(id) {
  src = id.name;
  id = document.getElementById('change_img');
  id.src = src;
  $(".darken").addClass("darken2");
  $(".darken2").removeClass("darken");
  $(".show-img").addClass("show-img2");
  $(".show-img2").removeClass("show-img");
}

function MinView() {
  $(".darken2").addClass("darken");
  $(".darken").removeClass("darken2");
  $(".show-img2").addClass("show-img");
  $(".show-img").removeClass("show-img2");
}

function MaxViewSlike(id) {
  $(".active").removeClass("active");
  $("."+id).addClass("active");
  $(".darken").addClass("darken2");
  $(".darken2").removeClass("darken");
  $(".show-img-app").addClass("show-img-app2");
  $(".show-img-app2").removeClass("show-img-app");
}

function MinViewSlike() {
  $(".darken2").addClass("darken");
  $(".darken").removeClass("darken2");
  $(".show-img-app2").addClass("show-img-app");
  $(".show-img-app").removeClass("show-img-app2");
}
