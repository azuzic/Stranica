<template>
  <div class="p-0 m-0">
    <div>
      <router-link v-if="store.theme=='Svijetla'" to="/"><img alt="Test logo" src="../assets/logo.svg" /></router-link>
      <router-link v-if="store.theme=='Tamna Plava'" to="/"><img alt="Test logo" src="../assets/logo_dark_blue.svg" /></router-link>
      <router-link v-if="store.theme=='Tamna Crvena'" to="/"><img alt="Test logo" src="../assets/logo_dark_red.svg" /></router-link>
    </div>
    <div class="grid auto-rows-auto gap-4">
      <br />
      <CTitle class="place-self-center" msg1="Resetiranje lozinke" />
      <div class="grid auto-rows-auto gap-4 pl-4 pr-4">
        <!--===================EMAIL=======================-->
        <div class="form-group">
          <p class="text-left text-18px m-0 p-0">Unesite vašu e-mail adresu</p>
          <input
            v-model="email"
            type="email"
            class="border rounded"
            id="emailInput"
            aria-describedby="emailHelp"
          />
          <hr />
        </div>
        <!--===================EMAIL END===================-->
        <CSuccess
          msg1="Poslano!"
          msg2="Na vašu email adresu dobit ćete poveznicu za resetiranje lozinke."
          v-if="sent"
        />
        <!--===================POTVRDI BUTTON==============-->
        <div
          class="place-self-center"
          :class="sendEmailCheck ? 'active' : 'inactive'"
        >
          <CButtonSingle
            btn="POŠALJI"
            :btnClickHandler="sendEmailCheck ? resetPassword : dummy"
          />
        </div>
        <router-link to="/prijava">
          <img class="arrow2" src="@/assets/arrow_icon.png" />
        </router-link>
        <!--===================POTVRDI BUTTON END==========-->
        <br />
      </div>
    </div>
  </div>
</template>
<script>
import CTitle from "@/components/CTitle.vue";
import CWarning from "@/components/CWarning.vue";
import CSuccess from "@/components/CSuccess.vue";
import CButtonSingle from "@/components/CButtonSingle.vue";
import router from "@/router";
import store from "@/store";
import { getAuth, sendPasswordResetEmail } from "@/firebase";
import { signOut } from "@/firebase";

let wait = function (seconds) {
  return new Promise((resolveFn) => {
    setTimeout(resolveFn, seconds * 1000);
  });
};

export default {
  name: "PasswordReset",
  data() {
    return {
      email: "",
      sent: false,
      store,
    };
  },
  components: {
    CTitle,
    CWarning,
    CSuccess,
    CButtonSingle,
  },
  computed: {
    sendEmailCheck() {
      return this.email.includes("@") && this.email.includes(".") ? 1 : 0;
    },
  },
  mounted() {
    if (store.currentUser) this.signout();
  },
  methods: {
    dummy() {},

    resetPassword() {
      const auth = getAuth();
      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          console.log("Uspjesno poslano!");
          this.sent = true;
          wait(4).then(() => {
            router.replace({ name: "Prijava" });
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    },
    signout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("Signed out!");
        })
        .catch((error) => {
          console.error("Signed out error!");
        });
    },
  },
};
</script>
<style>
.disabled-click {
  pointer-events: none;
}
.arrow2 {
  position: absolute;
  bottom: 0px;
  left: 0px;
  margin: 8px;
  width: 42px;
  transform: scaleX(-1);
}
</style>
