<template>
  <div>
    <!--==============LIST ============================-->
    <transition-group class="grid grid-rows-auto gap-5 pl-2 pr-2 pb-16 pt-16" name="fade" tag="div">
    <CCard  
      v-for="(z, i) of zahtjevi"
          :key="`key-${i}`"
          :zahtjev = z
    />
    </transition-group>
    <!--==============/LIST=========================-->
    <!--==============FOOTER===========================-->
    <div class="menu-bottom2 grid grid-cols-4 mt-4">
      <div 
      class="menu-item2" 
      :class="state == 'U razradi'  ? 'menu-item-selected menu-item-grid0' : 
              state == 'Prihvaćeno' ? 'menu-item-selected menu-item-grid1' : 
              state == 'Riješeno'   ? 'menu-item-selected menu-item-grid2' :
              state == 'Odbijeno'   ? 'menu-item-selected menu-item-grid3' : ''">
      </div>
    </div>
    <!--=======================-->
    <div class="menu-bottom grid grid-cols-4 mt-4">

      <div 
      class="menu-item" 
      :class="state == 'U razradi' ? 'menu-item-selected' : ''"
      @click="readData('U razradi')">
        <p><a><p>U razradi</p></a></p>
      </div>

      <div 
      class="menu-item" 
      :class="state == 'Prihvaćeno' ? 'menu-item-selected' : ''"
      @click="readData('Prihvaćeno')">
        <p><a><p>Prihvaćeno</p></a></p>
      </div>

      <div 
      class="menu-item" 
      :class="state == 'Riješeno' ? 'menu-item-selected' : ''"
      @click="readData('Riješeno')">
        <p><a><p>Riješeno</p></a></p>
      </div>

      <div 
      class="menu-item" 
      :class="state == 'Odbijeno' ? 'menu-item-selected' : ''"
      @click="readData('Odbijeno')">
        <p><a><p>Odbijeno</p></a></p>
      </div>

    </div>
    <!--==============/FOOTER========================-->
  </div>
</template>

<script>
//Komponente
import CTitle from "@/components/CTitle.vue";
import CButton from "@/components/CButton.vue";
import CCard from "@/components/CCard.vue";
//Firebase
import { collection, getDocs, query, orderBy } from "@/firebase";
import { db } from "@/firebase";

export default {
  name: "Djelatnik",
  data() {
    return {
      state: this.readData('U razradi'),
      zahtjevi: [],
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
        const q = query(collection(db, "zahtjevi"), orderBy("zahtjevPredan", "desc"));
        const querySnapshot = await getDocs(q);
        var highestTimeoutId = setTimeout(";");
        for (var i = 0 ; i < highestTimeoutId ; i++) {
            clearTimeout(i); 
        }
        let b = 0;
        let delay = 250; //ADJUST TIME DELAY BETWEEN CARDS
        let time = 0-delay;
        this.state = state;
        this.zahtjevi = [];
        this.canLoad = false;
        querySnapshot.forEach((doc) => {
          if (`${doc.data().status}` == this.state) {
            setTimeout(() => {
              this.$set(this.zahtjevi, b, {
                instrument: 
                [
                  (`${doc.data().instrument[0]}`),
                  (`${doc.data().instrument[1]}`),
                  (`${doc.data().instrument[2]}`),
                  (`${doc.data().instrument[3]}`),
                  (`${doc.data().instrument[4]}`),
                  (`${doc.data().instrument[5]}`),
                  (`${doc.data().instrument[6]}`),
                ],
                slike:
                [
                  (`${doc.data().slike[0]}`),
                  (`${doc.data().slike[1]}`),
                  (`${doc.data().slike[2]}`),
                  (`${doc.data().slike[3]}`),
                  (`${doc.data().slike[4]}`),
                  (`${doc.data().slike[5]}`),
                ],
                korisnik: (`${doc.data().korisnik}`),
                napomena: (`${doc.data().napomena}`),
                preporucenaCijena: (`${doc.data().preporucenaCijena}`),
                novaPreporucenaCijena: `${doc.data().novaPreporucenaCijena}`,
                status: (`${doc.data().status}`),
                date: (`${doc.data().zahtjevPredan}`),
                sifra: `${doc.id}`,
            });
            b++;
            },
            time += delay);
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
  transition: 0.5s;
  width: 100%;
  font-weight: bold;
  font-size: 4.5vw;
  color: var(--DwarfFortress__Belladonna);
}
.menu-bottom2 {
  position: fixed;
  bottom: -1px;
  width: 100%;
  height: 50px;
  background-color: var(--BalticSea__EerieBlack);
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
.menu-item-card {
  display: flex;
  align-items: center;
  text-align: center;
  background-color: var(--Transparent__BleachedSilk);
}
</style>
