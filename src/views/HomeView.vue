<template>
<!--MAIN BODY----------------------------------------------------------------->
  <div class="body grid grid-rows-auto pt-6 pb-32">
<!--NASLOV---------->
  <div class="container-fluid">
    <h1 class="text-center text-white projekt-naslov-h1 mt-4 mb-2">ALESANDRO ŽUŽIĆ
      <span class="version tooltip2">V2.3
        <span class="tooltiptext2 text-left">
          UPDATE 2.3 <br>
          added projekt iz poslovnih informacijskih sustava
        </span>
      </span>
    </h1>
  </div>
<!--NASLOV---------->
<!--DIV------------------------------------->
  <div class="container-fluid text-center pl-0 pr-0">
    <!--PODNASLOV--------->
    <h2 class="text-center text-white projekt-naslov-h2 mb-6 pb-6">PROJEKTI</h2>
    <!--PODNASLOV--------->
    <!--BUTTON------------------------------------->
    <a href="e_simulator\index.html" class="inactive text-decoration-none text-center m-2">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      E-UČENJE <br> TEST SIMULATOR <br>
      <u>ALESANDRO ŽUŽIĆ</u>
    </a>
    <!--BUTTON END--------------------------------->

    <!--BUTTON------------------------------------->
    <a href="pis-projekt\index.html" class="inactive text-decoration-none text-center m-2">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      POSLOVNI <br> INFORMACIJSKI SUSTAVI <br>
      <u>ALESANDRO ŽUŽIĆ</u>
    </a>
    <!--BUTTON END--------------------------------->

    <!--BUTTON------------------------------------->
    <a href="multimedija-projekt\index.html" class="inactive text-decoration-none text-center m-2">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      MULTIMEDIJALNI <br> SUSTAVI <br>
      <u>ALESANDRO ŽUŽIĆ</u>
    </a>
    <!--BUTTON END--------------------------------->
    <!--BUTTON------------------------------------->
    <a href="digitalno-projekt\index.html" class="inactive text-decoration-none text-center m-2">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      DIGITALNO <br> POSLOVANJE <br>
      <u>LUKA BLAŠKOVIĆ I ALESANDRO ŽUŽIĆ</u>
    </a>
    <!--BUTTON END--------------------------------->
    <!--BUTTON------------------------------------->
    <a href="multimedija-projekt-blaskovic\index.html" class="inactive text-decoration-none text-center m-2">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      MULTIMEDIJALNI <br> SUSTAVI <br>
      <u>LUKA BLAŠKOVIĆ</u>
    </a>
    <!--BUTTON END--------------------------------->
  </div>
<!--KRAJ DIV-A------------------------------------->
<!--DIV------------------------------------->
  <div class="container-fluid text-center pl-0 pr-0">
    <!--PODNASLOV--------->
    <h2 class="text-center text-white projekt-naslov-h2 mb-4 pb-4">HOBIJI I INTERESI</h2>
    <!--PODNASLOV--------->
    <!--BUTTON------------------------------------->
    <a href="anime_i_manga/index.html" class="inactive text-decoration-none text-center m-2">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      ANIME I MANGA
    </a>
    <!--BUTTON END--------------------------------->
    <!--BUTTON------------------------------------->
    <a href="blender_daily\index.html" class="inactive text-decoration-none text-center m-2">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      BLENDER DAILY
    </a>
    <!--BUTTON END--------------------------------->
    <!--BUTTON------------------------------------->
    <a href="crtezi_i_slike/index.html" class="inactive text-decoration-none text-center m-2">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      CRTEŽI I SLIKE
    </a>
    <!--BUTTON END--------------------------------->
    <!--BUTTON------------------------------------->
    <a href="#" class="inactive text-decoration-none text-center m-2">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <s>FIGURE I KOLEKCIJE</s>
    </a>
    <!--BUTTON END--------------------------------->
  </div>
  <!--
  <div class="container-fluid col-12 text-center pl-0 pr-0">
    <a class="text-decoration-none text-center mt-4 mr-2 ml-2 pause" id="myBtn1" onclick="pausevideo()">
      PAUSE VIDEO
    </a>
    <a class="text-decoration-none text-center mt-4 mr-2 ml-2 pause" id="myBtn2" onclick="unmutevideo()">
      UNMUTE VIDEO
    </a>
  </div>
  -->
  <div class="container-fluid col-12 text-center pl-0 pr-0">
    <a href="games_and_tests/index.html" class="text-decoration-none text-center mt-4 mr-2 ml-2 pause">
      GAMES AND TESTS
    </a>
  </div>
<!--KRAJ DIV-A------------------------------------->
  </div>
<!--MAIN BODY----------------------------------------------------------------->
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

.container-fluid {
  width: 100%;
}

html, body {
  overflow-x: hidden;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.row {
  margin-left: 0px !important;
  margin-right: 0px !important;
}

.body {
  background-color: black;
  background-size: 100%;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/foto/bg.jpg);
  background-size: cover;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
}

#myVideo {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1000;
  overflow: hidden;
  object-fit: fill;
  -webkit-filter: brightness(65%) blur(10px);
  -moz-filter: brightness(65%) blur(10px);
  -o-filter: brightness(65%) blur(10px);
  -ms-filter: brightness(65%) blur(10px);
  filter: brightness(65%) blur(10px);
}

.version {
  font-size: 25px;
  cursor: default;
}

/*-------------------------------------*/
@media screen and (min-width: 800px) {
  .projekt-naslov-h1 {
    font-weight: bold;
    font-size: 60px;
    text-shadow: 0 0 4px white, 0 0 16px white, 0 0 64px white;
  }
}

@media screen and (max-width: 800px) {
  .projekt-naslov-h1 {
    font-weight: bold;
    font-size: 40px;
    text-shadow: 0 0 4px white, 0 0 16px white, 0 0 64px white;
  }
}

/*-------------------------------------*/
/*-------------------------------------*/
@media screen and (min-width: 800px) {
  .projekt-naslov-h2 {
    margin-top: 8vh;
    font-weight: bold;
    font-size: 40px;
    text-shadow: 0 0 4px white, 0 0 16px white, 0 0 64px white;
  }
}

@media screen and (max-width: 800px) {
  .projekt-naslov-h2 {
    margin-top: 8vh;
    font-weight: bold;
    font-size: 30px;
    text-shadow: 0 0 4px white, 0 0 16px white, 0 0 64px white;
  }
}

/*-------------------------------------*/
/*NEON EFFECT------------------------------------*/
/*-------------------------------------*/
@media screen and (min-width: 800px) {
  a {
    position: relative;
    display: inline-block;
    padding: 25px 30px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #03e9f4;
    font-size: 17px;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    overflow: hidden;
    margin-right: 8px;
    text-shadow: 0 0 4px #03e9f4, 0 0 16px #03e9f4;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4),
      0 0 25px rgba(0, 0, 0, 0.8),
      0 0 100px rgba(0, 0, 0, 1);
  }

  a u {
    font-size: 10px;
  }
}

@media screen and (max-width: 800px) {
  a {
    position: relative;
    display: inline-block;
    padding: 20px 15px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #03e9f4;
    font-size: 12px;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    overflow: hidden;
    margin-right: 8px;
    text-shadow: 0 0 4px #03e9f4, 0 0 16px #03e9f4;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4),
      0 0 25px rgba(0, 0, 0, 0.8),
      0 0 100px rgba(0, 0, 0, 1);
  }

  a u {
    font-size: 7px;
  }
}

/*-------------------------------------*/
a:hover {
  background: #03e9f4;
  color: #050801;
  box-shadow: 0 0 5px #03e9f4,
    0 0 25px #03e9f4,
    0 0 100px #03e9f4;
  text-shadow: none;
}

/*-------------------------------------*/
@media screen and (min-width: 800px) {
  a.pause {
    position: relative;
    display: inline-block;
    padding: 20px 25px;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 15px;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    overflow: hidden;
    margin-right: 50px;
    text-shadow: 0 0 4px white, 0 0 16px white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4),
      0 0 25px rgba(0, 0, 0, 0.8),
      0 0 100px rgba(0, 0, 0, 1);
  }
}

@media screen and (max-width: 800px) {
  a.pause {
    position: relative;
    display: inline-block;
    padding: 15px 20px;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 10px;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    overflow: hidden;
    margin-right: 50px;
    text-shadow: 0 0 4px white, 0 0 16px white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4),
      0 0 25px rgba(0, 0, 0, 0.8),
      0 0 100px rgba(0, 0, 0, 1);
  }
}

/*-------------------------------------*/
a.pause:hover {
  background: white;
  color: #050801;
  cursor: pointer;
  box-shadow: 0 0 5px white,
    0 0 25px white,
    0 0 100px white;
  text-shadow: none;
}

a:nth-child(2) {
  filter: hue-rotate(0deg);
}

a:nth-child(3) {
  filter: hue-rotate(180deg);
}

a:nth-child(4) {
  filter: hue-rotate(240deg);
}

a:nth-child(5) {
  filter: hue-rotate(120deg);
}

a:nth-child(6) {
  filter: hue-rotate(300deg);
}

a span {
  position: absolute;
  display: block;
}

a span:nth-child(1) {
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: animate1 1s linear infinite;
}

@keyframes animate1 {
  0% {
    left: -100%;
  }

  50%, 100% {
    left: 100%;
  }
}

a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: animate2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes animate2 {
  0% {
    top: -100%;
  }

  50%, 100% {
    top: 100%;
  }
}

a span:nth-child(3) {
  bottom: 0;
  right: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: animate3 1s linear infinite;
  animation-delay: 0.50s;
}

@keyframes animate3 {
  0% {
    right: -100%;
  }

  50%, 100% {
    right: 100%;
  }
}

a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: animate4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes animate4 {
  0% {
    bottom: -100%;
  }

  50%, 100% {
    bottom: 100%;
  }
}

/*NEON EFFECT------------------------------------*/

.tooltip2 {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip2 .tooltiptext2 {
  visibility: hidden;
  background-color: black;
  color: #fff;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  top: 150%;
  left: 50%;
  padding: 8px;
}

.tooltip2 .tooltiptext2::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}

.tooltip2:hover .tooltiptext2 {
  visibility: visible;
}

.tooltiptext2 {
  font-size: 12px;
  width: 400px;
  margin-left: -200px;
  padding: 2px;
  text-shadow: none !important;
}
</style>
