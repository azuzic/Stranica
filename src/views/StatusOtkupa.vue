<template>
  <div>
    <!--==============LIST ============================-->
    <transition-group
      class="grid grid-rows-auto gap-5 pl-2 pr-2 pb-16 pt-16"
      name="fade"
      tag="div"
    >
      <CCard v-for="(z, i) of zahtjevi" :key="`key-${i}`" :zahtjev="z" />
    </transition-group>
    <!--==============LIST END=========================-->
  </div>
</template>

<script>
import store from "@/store";
//Komponente
import CTitle from "@/components/CTitle.vue";
import CButton from "@/components/CButton.vue";
import CCard from "@/components/CCard.vue";
//Firebase
import { collection, getDocs } from "@/firebase";
import { db } from "@/firebase";

export default {
  name: "StatusOtkupa",
  data() {
    return {
      state: this.readData("U razradi"),
      zahtjevi: [],
      store,
    };
  },
  components: {
    CTitle,
    CButton,
    CCard,
  },
    
  mounted() {
    this.readData();
  },
  methods: {
    async readData(state) {
      if (this.state != state && state) {
        const querySnapshot = await getDocs(collection(db, "zahtjevi"));
        var highestTimeoutId = setTimeout(";");
        for (var i = 0; i < highestTimeoutId; i++) {
          clearTimeout(i);
        }
        let b = 0;
        let delay = 250; //ADJUST TIME DELAY BETWEEN CARDS
        let time = 0 - delay;
        this.state = state;
        this.zahtjevi = [];
        this.canLoad = false;
        querySnapshot.forEach((doc) => {
          if (doc.data().korisnik === store.currentUser) {
              setTimeout(() => {
                this.$set(this.zahtjevi, b, {
                  instrument: [
                    `${doc.data().instrument[0]}`,
                    `${doc.data().instrument[1]}`,
                    `${doc.data().instrument[2]}`,
                    `${doc.data().instrument[3]}`,
                    `${doc.data().instrument[4]}`,
                    `${doc.data().instrument[5]}`,
                    `${doc.data().instrument[6]}`,
                  ],
                  slike:[
                    `${doc.data().slike[0]}`,
                    `${doc.data().slike[1]}`,
                    `${doc.data().slike[2]}`,
                    `${doc.data().slike[3]}`,
                    `${doc.data().slike[4]}`,
                    `${doc.data().slike[5]}`,
                  ],
                  korisnik: `${doc.data().korisnik}`,
                  napomena: `${doc.data().napomena}`,
                  preporucenaCijena: `${doc.data().preporucenaCijena}`,
                  status: `${doc.data().status}`,
                  date: `${doc.data().zahtjevPredan}`,
                  novaPreporucenaCijena: `${doc.data().novaPreporucenaCijena}`,
                  sifra: `${doc.id}`,
                });

                b++;
              }, (time += delay));
          }
        });
      }
    },
    dummy() {},
  },
};
</script>

<style>
.menu-item-selected p {
  transition: all;
  transition-timing-function: ease-in-out;
  transition: 1s;
  width: 100%;
  font-weight: bold;
  color: #3f2c28;
}
.menu-bottom2 {
  position: fixed;
  bottom: -1px;
  width: 100%;
  height: 50px;
  background-color: #3d3d3f;
  box-shadow: 0px -4px 4px var(--Transparent25__Transparent75);
}
.menu-item-grid0 {
  margin-left: 0%;
  background-color: var(--LimonFresco__Anime);
}
.menu-item-grid1 {
  margin-left: 100%;
  background-color: var(--SnowPea__RichGreen);
}
.menu-item-grid2 {
  margin-left: 200%;
  background-color: var(--SnowPea__RichGreen);
}
.menu-item-grid3 {
  margin-left: 300%;
  background-color: var(--ForbiddenFruit__RedPotion);
}
</style>
