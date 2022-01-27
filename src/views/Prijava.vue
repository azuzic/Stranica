<template>
  <div class="p-0 m-0">
    <div>
      <router-link v-if="store.theme=='Svijetla'" to="/"><img alt="Test logo" src="../assets/logo.svg" /></router-link>
      <router-link v-if="store.theme=='Tamna Plava'" to="/"><img alt="Test logo" src="../assets/logo_dark_blue.svg" /></router-link>
      <router-link v-if="store.theme=='Tamna Crvena'" to="/"><img alt="Test logo" src="../assets/logo_dark_red.svg" /></router-link>
    </div>
    <div class="grid auto-rows-auto gap-4">
      <div>
        <h1 class="text-center text-22px">Prijavite se za nastavak</h1>
      </div>
      <div class="grid auto-rows-auto gap-4 pl-4 pr-4">
        <!--===================EMAIL=======================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Email adresa</p>
          <input
            v-model="email"
            type="email"
            class="border rounded"
            id="emailInput"
          />
          <hr />
          <h2
            v-if="!checkEmail(email) && email"
            class="CWarning"
            id="resultEmail"
          >
            Email nije točno napisan!
          </h2>
        </div>
        <!--===================/EMAIL===================-->
        <!--===================PASSWORD====================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Lozinka</p>
          <input
            type="password"
            v-model="password"
            class="border rounded"
            id="passInput"
          />
          <hr />
          <img
              v-if="store.darkToggle"
              id="eye1"
              @click="eye"
              class="eye"
              src="@/assets/eye_closed.png"
            />
            <img
              v-if="store.darkToggle"
              id="eye2"
              @click="eye"
              class="eye invisible"
              src="@/assets/eye_open.png"
            />
            <img
              v-if="!store.darkToggle"
              id="eye1"
              @click="eye"
              class="eye"
              src="@/assets/eye_closed_dark.png"
            />
            <img
              v-if="!store.darkToggle"
              id="eye2"
              @click="eye"
              class="eye invisible"
              src="@/assets/eye_open_dark.png"
            />

          <router-link
            class="font-14px float-right"
            to="/password-reset"
          >
            <u class="href-link">Zaboravili ste lozinku?</u>
          </router-link>
        </div>
        <!--================/PASSWORD===================-->
        <!--================WARNING========================-->
        <CWarning
          v-if="greska"
          msg1="Upozorenje!"
          :msg2="'Unijeli ste krivu lozinku/email.'
          "
        />
        <!--================WARNING END====================-->
        <!--==============PRIJAVI SE BUTTON================-->
        <div
          class="place-self-center"
          :class="email && password ? 'active' : 'inactive'"
        >
          <CButton
            btn="PRIJAVI SE"
            link_text="Nemate račun?"
            link_href_text="Registrirajte se."
            href_link="/registracija"
            href_btn="/prijava"
            :btnClickHandler="email && password ? login : dummy"
          />
        </div>
        <!--==============PRIJAVI SE BUTTON END============-->
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
//Komponente
import CTitle from "@/components/CTitle.vue";
import CWarning from "@/components/CWarning.vue";
import CButton from "@/components/CButton.vue";
import CSelect from "@/components/CSelect.vue";

//Firebase
import { getAuth, signInWithEmailAndPassword } from "@/firebase";
import { collection, getDocs } from "@/firebase";
import { db } from "@/firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      osoba: "Korisnik",
      greska: false,
      store,
    };
  },
  components: {
    CTitle,
    CWarning,
    CButton,
    CSelect,
  },

  methods: {
    
    //Radi promjene izgleda aplikacije
    async getUserData() {
          const querySnapshot = await getDocs(collection(db, "users"));
          querySnapshot.forEach((doc) => {
            if (store.currentUser === `${doc.data().email}`) {
              store.theme = `${doc.data().theme}`;
            }
          });
        },
    login() {
      console.log("logging in...");
      
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        //Koristi lambda/arrow funkcije u kombinaciji sa .then kako bi se sacuvao this iz parent konteksta
        .then((result) => {
          console.log("Uspješna prijava", result);
          this.greska = false;
          this.getUserData();
        })
        .catch((e) => {
          let error = e.message.slice(22, -2).replace(/-/g, " ");
          error = error.charAt(0).toUpperCase() + error.slice(1) + "!";
          this.greska = true;
        });
    },
    dummy() {},
    checkEmail(email) {
      let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    eye() {
      let x = document.getElementById("passInput");
      let y = document.getElementById("eye1");
      let z = document.getElementById("eye2");
      if (x.type === "password") {
        x.type = "text";
        y.classList.add("invisible");
        z.classList.remove("invisible");
      } else {
        x.type = "password";
        z.classList.add("invisible");
        y.classList.remove("invisible");
      }
    },
  },
};
</script>

<style>
.eye {
  float: right;
  margin-top: -28px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  height: 20px;
}
</style>
