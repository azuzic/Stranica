<template>
  <div @click="store.zahtjev=zahtjev">
    <router-link class="CCard flex" to="pregled-otkupa">
      <div class="CCard-image flex-none">
        <div class="square-card img_1-1">
          <img class="square-img-card" :src="zahtjev.slike[0]"/>
        </div>
      </div>

      <div class="CCard-data">

        <div v-if="zahtjev.novaPreporucenaCijena > 0 && zahtjev.status == 'U razradi' && store.currentUser != 'istramusicshop@gmail.com'">
          <div class="ping animate-ping"></div>
          <div class="ping"> </div>
        </div>

        <div class="CCard-header">
          <p class="CCard-title pl-1 pt-1 pb-2 font-bold">
            {{ zahtjev.instrument[1] }} {{ zahtjev.instrument[2] }}
            <b class="CCard-date float-right pr-1">
              {{ receivedFromNow }}
            </b>
          </p>
          <p class="CCard-subtitle pl-1">
            {{ zahtjev.instrument[3] }}
            <b class="CCard-price float-right pr-1">
              {{ zahtjev.preporucenaCijena }} kn
            </b>
          </p>
        </div>

        <div class="CCard-footer grid" :class="zahtjev.status != 'Riješeno' ? 'grid-cols-3' : 'grid-cols-1'" >

          <div
            v-if="zahtjev.status != 'Riješeno'"
            class="CCard-icon-1"
            :class="zahtjev.status != 'Odbijeno' ? 'tranparent-10' : ''" >
            <img class="CCard-svg mx-auto mt-2" src="@/assets/deny_icon.png" />
            <p class="CCard-icontext">ODBIJENO</p>
          </div>

          <div 
            v-if="zahtjev.status != 'Riješeno'"
            class="CCard-icon-2"
            :class="zahtjev.status != 'U razradi' ? 'tranparent-10' : ''" >
            <img v-if="zahtjev.novaPreporucenaCijena > 0 && zahtjev.status == 'U razradi' && store.currentUser == 'istramusicshop@gmail.com'"
            class="CCard-svg mx-auto mt-2" src="@/assets/email_sent.png" />
            <img v-else class="CCard-svg mx-auto mt-2" src="@/assets/load_icon.png" />
            <p class="CCard-icontext">U RAZRADI</p>
          </div>

          <div 
            v-if="zahtjev.status != 'Riješeno'"
            class="CCard-icon-3"
            :class="zahtjev.status != 'Prihvaćeno' ? 'tranparent-10' : ''">
            <img class="CCard-svg mx-auto mt-2" src="@/assets/accept_icon.png" />
            <p class="CCard-icontext">PRIHVAĆENO</p>
          </div>

          <div v-if="zahtjev.status == 'Riješeno'" class="CCard-icon-3">
            <img class="CCard-svg2 mx-auto mt-1" src="@/assets/deal_icon.png" />
            <p class="CCard-icontext2">RIJEŠENO</p>
          </div>

        </div>

      </div>
    </router-link>
  </div>
</template>
<script>
//Data
import moment from "moment";
import store from "@/store";
//Firebase
import {db, query, where, onSnapshot, collection } from "@/firebase";

export default {
  name: "CCard",
  props: {
    zahtjev: "",
  },
  data() {
    return {
      store
    };
  },
  created() {
    //Firestore event listener
    const q = query(collection(db, "zahtjevi"), where("novaPreporucenaCijena", "!=", null));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if(doc.id == this.zahtjev.sifra)
        this.zahtjev.novaPreporucenaCijena = doc.data().novaPreporucenaCijena;
      });
    });
  },
  computed: {
    receivedFromNow() {
      return moment(parseInt(this.zahtjev.date)).fromNow();
    },
  },
};
</script>
<style>
.CCard {
  width: 100%;
  height: 32vw;
  background: transparent !important;
  box-shadow: 0px 4px 4px var(--Transparent25__Transparent75);
  border-radius: 8px;
}
.CCard-image {
  width: 30%;
  background: var(--BalticSea__Lead);
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  overflow: hidden;
}
.CCard-img {
  height: 100% !important;
  width: auto !important;
}
.CCard-data {
  position: relative;
  width: 70%;
  height: 100%;
  background: var(--DustySky__Lead);
  background-color: transparent !important;
  border-color: transparent !important;
  border-radius: 0%;
}
.CCard-header {
  width: 100%;
  height: 40%;
  background: var(--White__DarkGrey);
  border-top-right-radius: 8px;
  overflow: scroll;
}
.CCard-footer {
  width: 100%;
  height: 60%;
  background: var(--BalticSea__DarkToneInk);
  border-bottom-right-radius: 8px;
  overflow: scroll;
}
.CCard-icon-1 {
  height: 100%;
  background: var(--ForbiddenFruit__RedPotion);
}
.CCard-icon-2 {
  height: 100%;
  background: var(--LimonFresco__Anime);
}
.CCard-icon-3 {
  height: 100%;
  background: var(--SnowPea__RichGreen);
  border-bottom-right-radius: 8px;
}
.CCard-icontext {
  position: relative;
  text-align: center;
  font-size: 3.2vw;
  margin-top: 1.5vw;
  font-weight: bold;
  letter-spacing: -1px;
  color: var(--DwarfFortress__Belladonna);
}
.CCard-svg {
  position: relative;
  height: 10vw;
}
.CCard-icontext2 {
  position: relative;
  text-align: center;
  font-size: 3.2vw;
  margin-top: 4px;
  font-weight: bold;
  letter-spacing: -1px;
  color: var(--DwarfFortress__Belladonna);
}
.CCard-svg2 {
  position: relative;
  height: 10vw;
}
.CCard-title {
  position: relative;
  letter-spacing: -1px;
  font-size: 4.4vw;
  color: var(--BalticSea__Lead);
}
.CCard-subtitle {
  position: relative;
  font-size: 3.6vw;
  bottom: 4px;
  letter-spacing: 0.25px;
  color: var(--BalticSea__Squant);
}
.CCard-date {
  position: relative;
  bottom: -4px;
  font-size: 3.2vw;
  font-weight: normal !important;
  letter-spacing: 0.25px;
  color: var(--BalticSea__BlackMana);
}
.CCard-price {
  position: relative;
  font-size: 3.6vw;
  color: var(--Flushed__LingonberryRed) !important;
}

.square-card {
    background-color: var(--DustySky__Grey);
    overflow: hidden;
    float:left;
    position: relative;
    display: flex;
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    padding-bottom: 100%;
    border-color: var(--StretchLimo__ChromaphobicBlack);
    box-shadow: 0px 0px 4px var(--Transparent25__Transparent75);
}

.square-img-card {
    position: absolute;
    background-color: var(--DustySky__Grey);
    width: 100%;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    pointer-events: none;
}

.ping {
  position: absolute;
  width: 3.2vw;
  height: 3.2vw;
  right: -1.2vw;
  background-color: var(--ForbiddenFruit__RedPotion);
  border-radius: 100%;
  margin-top: -1.4vw;
}
</style>
