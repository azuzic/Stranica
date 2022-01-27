<template>
  <div>
    <!--==============MENU====================================-->
    <div :class="darken ? 'darken-bg' : 'undarken-bg'">

    </div>
    <div class="menu grid grid-cols-3 mb-4">
      <div class="menu-item-active menu-highlight">
        <router-link :to="store.currentUser == 'djelatnik@gmail.com' ? 'djelatnik' : 'status-otkupa'">
          <img class="arrow ml-2" src="@/assets/arrow_icon.png" />
        </router-link>
        <p>
          <router-link :to="store.currentUser == 'djelatnik@gmail.com' ? 'djelatnik' : 'status-otkupa'"> Povratak </router-link>
        </p>
      </div>
      <div class="menu-item" :class="stanje=='U razradi' ? 'menu-item-yellow' :
                                     stanje=='Odbijeno' ? 'menu-item-red' : 'menu-item-green'">
        <p><a><p>{{stanje}}</p></a></p>  
      </div>
      <div class="menu-item">
        <p><a><p>{{ receivedFromNow }}</p></a></p>
      </div>
    </div>
    <!--==============MENU END================================-->
    <!--==============LIST ===================================-->
    <div class="grid grid-rows-auto gap-2 pl-2 pr-2 pb-16 pt-16">
      <div>
        <p><u class="text-20px">Šifra zahtjeva:</u></p>
        <p class="mt-1 text-18px"><b>{{store.zahtjev.sifra}}</b></p>
      </div>
      <div>
        <hr class="dotted mt-2 mb-2" />
      </div>
      <div>
        <p><u class="text-20px">Vrsta instrumenta:</u></p>
        <p class="mt-1 text-18px"><b>{{store.zahtjev.instrument[0]}}</b></p>
      </div>
      <div>
        <p><u class="text-20px">Proizvođač:</u></p>
        <p class="mt-1 text-18px"><b>{{store.zahtjev.instrument[1]}}</b></p>
      </div>
      <div>
        <p><u class="text-20px">Model:</u></p>
        <p class="mt-1 text-18px"><b>{{store.zahtjev.instrument[2]}}</b></p>
      </div>
      <div>
        <p><u class="text-20px">Podmodel:</u></p>
        <p class="mt-1 text-18px"><b>{{store.zahtjev.instrument[3]}}</b></p>
      </div>
      <div>
        <hr class="dotted mt-2 mb-2" />
      </div>
      <div>
        <p><u class="text-20px">Godina proizvodnje:</u></p>
        <p class="mt-1 text-18px"><b>{{store.zahtjev.instrument[4]}}.</b></p>
      </div>
      <div>
        <p><u class="text-20px">Vlasnik:</u></p>
        <p class="mt-1 text-18px"><b>{{store.zahtjev.instrument[5]}}.</b></p>
      </div>
      <div>
        <p><u class="text-20px">Stanje:</u></p>
        <p class="mt-1 text-18px"><b>{{store.zahtjev.instrument[6]}}</b></p>
      </div>
      <div>
        <hr class="dotted mt-2 mb-2" />
      </div>
      
      <div>
          <p class="text-left text-18px m-0 p-0">Slike</p>
          <div>
            <div class="grid grid-rows-2 grid-cols-3 gap-3 mt-2">

              <div class="ct">
                <p class="otkup-img-text">Gornja prednja</p>
                <div @click="enlarge('0')" class="square img_1-1 img-top-left">
                    <img :class="img[0] ?'square-img' : 'fullscreen-img'" :src="store.zahtjev.slike[0]"/>
                </div>
              </div> 

              <div>
                <p class="otkup-img-text">Gornja stražnja</p>
                <div @click="enlarge('1')" class="square img_1-1 img-top">
                    <img :class="img[1] ?'square-img' : 'fullscreen-img'" :src="store.zahtjev.slike[1]"/>
                </div>
              </div> 

              <div>
                <p class="otkup-img-text">Bočna desna</p>
                <div @click="enlarge('2')" class="square img_1-1 img-top-right">
                    <img :class="img[2] ?'square-img' : 'fullscreen-img'" :src="store.zahtjev.slike[2]"/>
                </div>
              </div> 

              <div>
                <p class="otkup-img-text">Bočna lijeva</p>
                <div @click="enlarge('3')" class="square img_1-1 img-bottom-left">
                    <img :class="img[3] ?'square-img' : 'fullscreen-img'" :src="store.zahtjev.slike[3]"/>
                </div>
              </div> 

              <div>
                <p class="otkup-img-text">Vrat gitare</p>
                <div @click="enlarge('4')" class="square img_1-1 img-bottom">
                    <img :class="img[4] ?'square-img' : 'fullscreen-img'" :src="store.zahtjev.slike[4]"/>
                </div>
              </div> 

              <div>
                <p class="otkup-img-text">Glava gitare</p>
                <div @click="enlarge('5')" class="square img_1-1 img-bottom-right">
                    <img :class="img[5] ?'square-img' : 'fullscreen-img'" :src="store.zahtjev.slike[5]"/>
                </div>
              </div> 
              
            </div>
          </div>
        </div>
      <div>
        <p><u class="text-20px">Napomena:</u></p>
        <textarea disabled class="resize-none otkup-textarea mt-2" v-model="opis">
        </textarea >
      </div>
      <hr class="dotted mt-2 mb-2" />
      <p v-if="store.currentUser != 'djelatnik@gmail.com' && cijenaUpdated"
      class="text-20px text-center">Nova predložena cijena: <b class="price">{{novaPreporucenaCijena}} kn</b></p>
      <!--===================ODBIJ OTKUP====================-->
      <div v-if="store.currentUser != 'djelatnik@gmail.com' && cijenaUpdated"
            class="place-self-center mt-4" 
            :class="stanje=='U razradi' ? 'active' : 'inactive'">
        <div @click="stanje=='U razradi' ? promijeniCijenu(1) : dummy()">
          <CButtonDecline btn="ODBIJ" :btnClickHandler="dummy" />
        </div>
      </div>
      <!--================/ODBIJ OTKUP======================-->
      <!--=================PRIHVATI OTKUP===================-->
      <div v-if="store.currentUser != 'djelatnik@gmail.com' && cijenaUpdated"
            class="place-self-center mt-4 mb-4" 
            :class="stanje=='U razradi' ? 'active' : 'inactive'">
        <div @click="stanje=='U razradi' ? promijeniCijenu(0) : dummy()">
          <CButtonAccept btn="PRIHVATI" :btnClickHandler="dummy" />
        </div>
      </div>
      <!--================/PRIHVATI OTKUP===================-->      

      <div v-if="store.currentUser == 'djelatnik@gmail.com'">
        <hr class="dotted mt-2 mb-2" />
      </div>
      <div v-if="store.currentUser == 'djelatnik@gmail.com'">
        <p class="text-center mb-2">
          <b class="text-24px">PODACI O KLIJENTU</b>
        </p>
      </div>
      <div v-if="store.currentUser == 'djelatnik@gmail.com'">
        <p><u class="text-20px">Ime i prezime:</u></p>
        <p class="mt-1 text-18px"><b>{{korisnik[0].imePrezime}}</b></p>
      </div>
      <div v-if="store.currentUser == 'djelatnik@gmail.com'">
        <p><u class="text-20px">Email:</u></p>
        <p class="mt-1 text-18px"><b>{{korisnik[0].email}}</b></p>
      </div>
      <div v-if="store.currentUser == 'djelatnik@gmail.com'">
        <p><u class="text-20px">OIB:</u></p>
        <p class="mt-1 text-18px"><b>{{korisnik[0].oib}}</b></p>
      </div>
      <div v-if="store.currentUser == 'djelatnik@gmail.com'">
        <p><u class="text-20px">Broj telefona:</u></p>
        <p class="mt-1 text-18px"><b>{{mob}}</b></p>
      </div>
      <div v-if="store.currentUser == 'djelatnik@gmail.com'">
        <hr class="dotted mt-2 mb-2" />
      </div>
      <!--==============NOVA CIJENA==============================-->
      <div v-if="store.currentUser == 'djelatnik@gmail.com'" :class="stanje=='U razradi' && !cijenaUpdated ? '' : 'tranparent'">
        <p class="text-left text-18px m-0 p-0 mt-6">Nova predložena cijena:</p>
        <input
          :disabled="stanje!='U razradi' || cijenaUpdated"
          type="text"
          name="oib"
          id="oib"
          v-model="novaCijena"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
        />
        <hr />
      </div>
      <!--==============/NOVA CIJENA==============================-->
      <!--==============PREDLOŽI==============================-->
      <div
        v-if="store.currentUser == 'djelatnik@gmail.com'"
        class="place-self-center mt-4"
        :class="novaCijena && stanje=='U razradi' ? 'active' : 'inactive'"
      >
      <div @click="novaCijena && stanje=='U razradi' ? predloziCijenu() : dummy()">
        <CButtonSingle
          btn="PREDLOŽI"
          :btnClickHandler="0 ? dummy : dummy"
        />
      </div>
        
      </div>
      <!--==============/PREDLOŽI=============================-->
      <!--===================ODBIJ OTKUP====================-->
      <div  v-if="store.currentUser == 'djelatnik@gmail.com'"
            class="place-self-center mt-8" 
            :class="stanje=='U razradi' && !cijenaUpdated ? 'active' : 'inactive'">
        <div @click="stanje=='U razradi' && !cijenaUpdated ? updateStatus('Odbijeno') : dummy()">
          <CButtonDecline btn="ODBIJ OTKUP" :btnClickHandler="dummy" />
        </div>
      </div>
      <!--================/ODBIJ OTKUP======================-->
      <!--=================PRIHVATI OTKUP===================-->
      <div  v-if="store.currentUser == 'djelatnik@gmail.com'"
            class="place-self-center mt-4" 
            :class="stanje=='U razradi' && !cijenaUpdated ? 'active' : 'inactive'">
        <div @click="stanje=='U razradi' && !cijenaUpdated ? updateStatus('Prihvaćeno') : dummy()">
          <CButtonAccept btn="PRIHVATI OTKUP" :btnClickHandler="dummy" />
        </div>
      </div>
      <!--================/PRIHVATI OTKUP===================-->
    </div>
    <!--==============LIST END================================-->
    <!--==============FOOTER==================================-->
    <div class="menu-bottom3 grid grid-cols-1 mt-4">
        <div class="bg-bottom"></div>
        <div class="menu-item5 text-left mx-auto">
          <img
            v-if="store.darkToggle"
            class="money"
            src="@/assets/money_icon.svg"
          />
          <img
            v-if="!store.darkToggle"
            class="money"
            src="@/assets/money_icon_dark.svg"
          />
          <p class="pl-4 price-size" >
            Predložena cijena:
            <b class="price">{{preporucenaCijena}} kn</b>
          </p>
        </div>
      </div>
    <!--==============FOOTER END==============================-->
  </div>
</template>

<script>
import store from "@/store";
//Komponente
import CTitle from "@/components/CTitle.vue";
import CButtonSingle from "@/components/CButtonSingle.vue";
import CButtonAccept from "@/components/CButtonAccept.vue";
import CButtonDecline from "@/components/CButtonDecline.vue";
import CCard from "@/components/CCard.vue";
//Firebase
import { db } from "@/firebase";
import { doc, collection, getDocs, updateDoc} from "@/firebase";
import { onSnapshot, where, query } from "@/firebase";

import emailjs from "@emailjs/browser";
export default {
  name: "PregledOtkupa",
  components: {
    CTitle,
    CButtonSingle,
    CButtonAccept,
    CButtonDecline,
    CCard,
  },
   beforeMount(){
    this.readData();
  },
  data() {
    return {
      novaCijena: "",
      preporucenaCijena: "",
      novaPreporucenaCijena: 0,
      cijenaUpdated: false,
      mob: "",
      korisnik: [{
            imePrezime: "",
            email: "",
            mob: "",
            oib: ""
      }],
      opis: "",
      stanje: "",
      store,
      darken: false,
      img: [true,true,true,true,true,true],
      
    };
  },
  created() {
    //Firestore event listener
    const q = query(collection(db, "zahtjevi"), where("novaPreporucenaCijena", "!=", null));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if(doc.id == store.zahtjev.sifra) {
          if(doc.data().novaPreporucenaCijena<=0) {
            this.cijenaUpdated = false;
            return;
          }
          this.novaPreporucenaCijena = doc.data().novaPreporucenaCijena;
          this.cijenaUpdated = true;
        }
        else this.cijenaUpdated = false;
      });
    });
  },
  methods: {
    sendEmail(){
      var params = {
        ime: this.korisnik[0].imePrezime,
        email: this.korisnik[0].email,
        status: this.stanje,
        sifra: store.zahtjev.sifra,
        cijena: this.preporucenaCijena,
      };
      emailjs.send("service_ox0wdn1", "promjenaStanjaZahtjeva", params).then(
        (result) => {
          console.log("Email sent! ", result.text);
        },
        (error) => {
          console.error();("Email NOT sent!", error.text);
        }
      );
    },
    async readData() {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        if (`${doc.data().email}` == store.zahtjev.korisnik) {
          this.$set(this.korisnik,0, {
            imePrezime: (`${doc.data().imePrezime}`),
            email: (`${doc.data().email}`),
            mob: (`${doc.data().mob}`),
            oib: (`${doc.data().oib}`)
          });
          this.opis = store.zahtjev.napomena;
          this.stanje = store.zahtjev.status;
          this.preporucenaCijena = store.zahtjev.preporucenaCijena;
          let m = this.korisnik[0].mob;
          this.mob = m.slice(0,3) + "-" + m.slice(3,6) + "-" + m.slice(6);
        }
      });
    },
    promijeniCijenu(rezultat) {
      let msg = "";
      if(rezultat == 1)
        msg = "Jeste li sigurni da želite odbiti promjenu cijene? Jednom kad se odbije ne može se prihvatiti.";
      else 
        msg = "Jeste li sigurni da želite prihvatiti promjenu cijene? Jednom kad se prihvati ne može se odbiti.";
      this.$dialog
      .confirm(
        msg
      )
      .then(() => {
        const g = doc(db, "zahtjevi", store.zahtjev.sifra);
        if(rezultat){
          updateDoc(g, {
            status: "Odbijeno"
          });
          this.stanje = "Odbijeno";
        }
        else {
          updateDoc(g, {
            preporucenaCijena: this.novaPreporucenaCijena,
            novaPreporucenaCijena: 0,
            status: "Prihvaćeno"
          });
          this.stanje = "Prihvaćeno";
          this.preporucenaCijena = this.novaPreporucenaCijena;
        }
        this.sendEmail();
      })
      .catch(() => {
      });
    },
    predloziCijenu() {
      this.$dialog
      .confirm(
        "Jeste li sigurni da želite predložiti novu cijenu? Više nećete moći predložiti novu cijenu."
      )
      .then(() => {
        const g = doc(db, "zahtjevi", store.zahtjev.sifra);
        updateDoc(g, {
          novaPreporucenaCijena: this.novaCijena,
        });
        this.novaPreporucenaCijena = this.novaCijena;
        this.preporucenaCijena = this.novaCijena;
        //this.cijenaUpdated = true;
        this.novaCijena = "";
      })
      .catch(() => {});
    },
    updateStatus(status) {
      let msg = "";
      if(status == "Odbijeno")
        msg = "Jeste li sigurni da želite odbiti otkup? Jednom kad se odbije ne može se prihvatiti.";
      else 
        msg = "Jeste li sigurni da želite prihvatiti otkup? Jednom kad se prihvati ne može se odbiti.";
      this.$dialog
      .confirm(
        msg
      )
      .then(() => {
        const g = doc(db, "zahtjevi", store.zahtjev.sifra);
        updateDoc(g, {
          status: status,
          novaPreporucenaCijena: 0,
        });
        this.stanje = status
        this.sendEmail();
        
      })
      .catch(() => {
       // NO
      });
    },
    enlarge(id) {
      this.darken = !this.darken;
      this.img[id] = !this.img[id];
    },
    dummy() {},
  },
  computed: {
    receivedFromNow() {
      return new Date(parseInt(store.zahtjev.date)).toLocaleDateString();
    },
  },
};
</script>

<style>
.menu-item-red {
  background-color: var(--ForbiddenFruit__RedPotion);
}
.menu-item-yellow {
  background-color: var(--LimonFresco__Anime);
}
.menu-item-green {
  background-color: var(--SnowPea__RichGreen);
}
.menu-item-red p {
  color: var(--GraniteBrown__Lead);
}
.menu-item-yellow p {
  color: var(--GraniteBrown__Lead);
}
.menu-item-green p {
  color: var(--GraniteBrown__Lead);
}
.menu-item-selected p {
  width: 100%;
  font-weight: bold;
  color: #3f2c28;
  font-size: 4.5vw;
  transition: 0.5s;
}
.arrow {
  width: 26px;
  opacity: 0.75;
  transform: scaleX(-1);
}
.menu-highlight {
  background-color: var(--FluorescentRed__FrenchWine);
}
.bg-bottom {
  position: absolute;
  width: 100%;
  background-color: var(--Transparent__BleachedSilk);
  height: 50px;
}
.menu-item5 p {
  color: var(--Snow__Lead) !important;
}
.otkup-textarea:focus {
  outline: none !important;
  border-color: var(--FluorescentRed__FrenchWine);
}

.square {
    background-color: var(--DustySky__Grey);
    overflow: hidden;
    float:left;
    position: relative;
    display: flex;
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
    padding-bottom: 100%;
    border-color: var(--StretchLimo__ChromaphobicBlack);
    box-shadow: 0px 0px 4px var(--Transparent25__Transparent75);
}

.square-img {
    position: absolute;
    width: 100%;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
}
.square-img2 {
    position: absolute;
    width: 100%;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    color: var(--BalticSea__Squant);
    font-size: 3.2vw; 
    letter-spacing: 0.25px;
}
.undarken-bg {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -100;
  background-color: hsl(0, 0%, 0%, 0%);
  backdrop-filter: blur(0px);
}

.darken-bg {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 40000000;
  background-color: hsl(0, 0%, 0%, 50%);
  backdrop-filter: blur(4px);
}

.fullscreen-img {
  position: absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  position: fixed !important;
  z-index: 50000000;
  width: 90% !important;
  border-radius: 16px;
  box-shadow: 0px 0px 8px hsl(0, 0%, 0%, 75%);
}
</style>
