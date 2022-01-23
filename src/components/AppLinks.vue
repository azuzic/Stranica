<template>
  <div class="menu">
      <div class="home-link">
        <router-link to="/">
          HOME
        </router-link>
      </div>

      <hr class="menu-hr">

      <p class="menu-naslov">PROJEKTI</p>
      <div class="menu-link">
        <a href="e_simulator\index.html">
          E-UČENJE TEST SIMULATOR
        </a>
      </div>
      <div class="menu-link">
        <a href="pis-projekt\index.html">
          POSLOVNI INFORMACIJSKI SUSTAVI
        </a>
      </div>
      <div class="menu-link">
        <a href="multimedija-projekt\index.html">
          MULTIMEDIJALNI SUSTAVI 
        </a>
      </div>
      <div class="menu-link">
        <a href="digitalno-projekt\index.html">
          DIGITALNO POSLOVANJE
        </a>
      </div>
      <div class="menu-link">
        <a href="multimedija-projekt-blaskovic\index.html">
          MULTIMEDIJALNI SUSTAVI 
        </a>
      </div>
      
      <hr class="menu-hr">

      <p class="menu-naslov">HOBIJI I INTERESI</p>
      <div class="menu-link">
        <a href="anime_i_manga/index.html">
          ANIME I MANGA
        </a>
      </div>
      <div class="menu-link">
        <a href="blender_daily\index.html">
          BLENDER DAILY
        </a>
      </div>
      <div class="menu-link">
        <a href="crtezi_i_slike/index.html">
          CRTEŽI I SLIKE
        </a>
      </div>
      <div class="menu-link">
        <a href="">
          FIGURE I KOLEKCIJE
        </a>
      </div>
      <hr class="menu-hr">

      <p class="menu-naslov">GAMES AND TESTS</p>

      <div class="menu-pull">

      </div>

    </div>
</template>

<script>
export default {
  name: 'AppLinks',
}
</script>

<style lang="scss" scoped>
.menu {
  transition: all 0.5s;
  position: fixed;
  z-index: 10000000;
  background-color: rgba(8, 5, 5, 0.85);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.85);
  border-bottom-right-radius: 16px;
  padding: 8px;
  color: rgba(255, 255, 255, 0.75);
  width: 300px;
  left: -300px;
  .menu-link {
    margin: 12px;
    & a{
      transition: all 0.5s;
      padding: 6px;
      font-size: 14px;
      margin-left: 0px;
      background-color: rgba(255, 255, 255, 0.11);
      border-top-right-radius: 16px;
      border-bottom-left-radius: 16px;
      &:hover {
        animation: border;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        background-color: rgba(255, 255, 255, 0.75);
        margin-left: 8px;
        color: black;
        font-weight: bold;
      }
      @keyframes border {
        0%   {
          box-shadow: 0 0 2px rgba(255, 255, 255, 0.75),
          0 0 16px rgba(255, 255, 255, 0.75),
          0 0 64px rgba(255, 255, 255, 0.75);
        }
        50%  {
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.75),
          0 0 25px rgba(255, 255, 255, 0.75),
          0 0 100px rgba(255, 255, 255, 0.75);
        }
        100% {
          box-shadow: 0 0 2px rgba(255, 255, 255, 0.75),
          0 0 16px rgba(255, 255, 255, 0.75),
          0 0 64px rgba(255, 255, 255, 0.75);
        }
      }
    }
  }
  .home-link {
    text-align: center;
    margin-top: 8px;
    & a {
      font-size: 24px;
      font-weight: bold;
    }
  }
  .menu-hr {
    border-color: rgba(255, 255, 255, 0.11);
    border-width: 2px;
    border-radius: 32px;
    margin-bottom: 16px;
    margin-top: 8px;
    margin-left: 4px;
    margin-right: 4px;
  }
  .menu-naslov {
    font-size: 20px;
    text-align: center;
  }
  .menu-pull {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 15px solid rgba(0, 0, 0, 0.5);
    border-bottom: 10px solid transparent;
    right: -15px;
    top: 50%
  }
  &:hover {
    left: 0px;
  }
}
</style>
