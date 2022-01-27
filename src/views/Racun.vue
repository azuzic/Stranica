<template>
  <div class="p-0 m-0 pt-16">
    <div class="grid auto-rows-auto gap-4">
      <div class="grid auto-rows-auto gap-4 pl-4 pr-4">
        <!--===================IME I PREZIME=======================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Ime i prezime:</p>
          <input
            type="text"
            class="border rounded"
            id="nameInput"
            v-model="imePrezime"
          />
          <hr />
        </div>
        <!--===================/IME I PREZIME===================-->
        <!--===================EMAIL=======================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Email</p>
          <input type="email" id="emailInput" v-model="email" />
          <hr />
          <h2
            v-if="!checkEmail(email) && email"
            class="CWarning"
            id="resultEmail"
          >
            Email nije točno napisan!
          </h2>
        </div>
        <!--===================EMAIL END===================-->
        <!--===================OIB=========================-->
        <div>
          <p class="text-left text-18px m-0 p-0">OIB</p>
          <input
            type="text"
            id="oibInput"
            v-model="oib"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
            maxlength="11"
          />
          <hr />
          <h2 v-if="oib.length != 11 && oib" class="CWarning" id="resultOIB">
            OIB mora sadržavati 11 brojeva!
          </h2>
        </div>
        <!--===================OIB END=====================-->
        <!--===================BROJ MOBITELA===============-->
        <div>
          <p class="text-left text-18px m-0 p-0">Broj mobitela</p>
          <div class="flex">
            <div class="mtc2" style="color: grey !important">09</div>
            <div class="w-full">
              <input
                type="text"
                name="mob"
                id="mobInput"
                v-model="UpdateMob"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                maxlength="10"
              />
              <hr />
            </div>
          </div>
          <h2
            v-if="UpdateMob.length != 9 && UpdateMob.length != 10 && UpdateMob"
            class="CWarning"
            id="resultMob"
          >
            Broj mobitela mora sadržavati 10 ili 11 brojeva!
          </h2>
        </div>
        <!--===================BROJ MOBITELA END===========-->
        <!--===================THEME===================-->
        <div @click="updateTheme()">
          <p class="text-left text-18px m-0 p-0 mb-1">Izgled aplikacije</p>
          <CSelect
            id="$THEME"
            :options="['Svijetla', 'Tamna Plava', 'Tamna Crvena']"
            :default="theme"
            v-model="theme"
          />
        </div>
        <!--===================/THEME===================-->
        <!--==============SPREMI================-->
        <div class="place-self-center mt-12" :class="IsAllFilled ? 'active' : 'inactive'">
          <CButtonAccept btn="AŽURIRAJ PODATKE" :btnClickHandler="IsAllFilled ? updateKorisnik : dummy" />
        </div>
        <!--==============/SPREMI============-->
        <CSuccess
          :class="!canSave ? 'hide2' : 'hide'"
           msg1="Spremljeno!"
          msg2="Uneseni podaci su spremljeni. Nakon nestanka ove obavijesti možete ponovno spremiti podatke."
        />
        <CWarning
          :class="!wrongPass ? 'hide2' : 'hide'"
           msg1="Upozorenje!"
          msg2="Unijeli ste krivu lozinku za promjenu emaila."
        />
        <!--===================RESETIRAJ LOZINKU====================-->
        <div class="place-self-center mt-6 mb-32"> 
          <router-link to="/password-reset">
            <CButtonDecline btn="RESETIRAJ LOZINKU" :btnClickHandler="dummy" />
          </router-link>
        </div>
        <!--================/RESETIRAJ LOZINKU===================-->
        
      </div>
    </div>
    <!--==============LOGUT================-->
    <button class="logout" @click="signout()">
      <p class="pr-2 pb-1">Odjava</p>
      <img class="exit-icon" src="@/assets/exit_icon.svg" />
    </button>
    <!--==============/LOGUT================-->
  </div>
</template>
<script>
import store from "@/store";
//Komponente
import CTitle from "@/components/CTitle.vue";
import CWarning from "@/components/CWarning.vue";
import CSelect from "@/components/CSelect.vue";
import CButtonAccept from "@/components/CButtonAccept.vue";
import CButtonDecline from "@/components/CButtonDecline.vue";
import CSuccess from "@/components/CSuccess.vue";
//Firebase
import { getAuth, signOut } from "@/firebase";
import { collection, getDocs } from "@/firebase";
import { doc, updateDoc } from "@/firebase";
import { db, } from "@/firebase";
import {updateEmail, reauthenticateWithCredential, EmailAuthProvider} from "@/firebase";
<<<<<<< HEAD
=======

function eye() {
  let x = document.getElementById("dg-input-elem");
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
}

function bindingFunction() {
  document.getElementById('eye1').onclick = function() {
    eye();
  };
  document.getElementById('eye2').onclick = function() {
    eye();
  };
}
>>>>>>> parent of b25c086 (test2)

export default {
  name: "Racun",
  data() {
    return {
      imePrezime: "",
      oldEmail: "",
      email: "",
      oib: "",
      mobTemp: "",
      mob: "",
      theme: store.theme,
      canSave: true,
      wrongPass: true
    };
  },
  components: {
    CTitle,
    CWarning,
    CButtonAccept,
    CButtonDecline,
    CSelect,
    CSuccess,
  },
  mounted() {
    this.readData();
  },
  methods: {
    async readData() {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        if (store.userID === `${doc.id}`) {
          if(store.currentUser != `${doc.data().email}`){
            this.updateEmail();
          }
          this.imePrezime = `${doc.data().imePrezime}`;
          this.oldEmail = store.currentUser;
          this.email = store.currentUser;
          this.oib = `${doc.data().oib}`;
          this.mobTemp = `${doc.data().mob}`;
          this.mobLoad();
          store.userID = `${doc.id}`;
        }
      });
    },
    //Potrebno kod poništavanja promjene preko emaila
    updateEmail(){
      const g = doc(db, "users", store.userID);
        updateDoc(g, {
          email: store.currentUser,
        });
    },
    async updateKorisnik() {
      if(this.email !== this.oldEmail) {
          setTimeout(() => {
            //Promjena 
<<<<<<< HEAD
            document.getElementById('dg-input-elem').type = 'password';
          }, 100);
=======
            document.getElementsByClassName("dg-form")[0].innerHTML = ('<label for="dg-input-elem" style="font-size: 13px;">Molimo unesite vašu lozinku:</label>' +
            '<input type="password" placeholder="" autocomplete="off" id="dg-input-elem" style="width: 100%; margin-top: 10px; padding: 5px 15px; font-size: 16px; border-radius: 4px; border: 2px solid rgb(238, 238, 238);" type = "password">' +
            ' <hr/>' +
            ' <img ' +
              'id="eye1"' +
              ' @click="eye"' +
              ' class="eye"' +
              ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/OOjs_UI_icon_eyeClosed.svg/1200px-OOjs_UI_icon_eyeClosed.svg.png"/>' +
              ' <img ' +
              'id="eye2"' +
              ' @click="eye"' +
              ' class="eye invisible"' +
              ' src="https://image.flaticon.com/icons/png/512/63/63568.png"/>'
            );
            bindingFunction();
          }, 200);
>>>>>>> parent of b25c086 (test2)
          this.$dialog
          .prompt({
            title: "Promjena email adrese",
          }, {
            promptHelp: 'Molimo unesite vašu lozinku:'
          })
          .then(dialog => {
            const credential = EmailAuthProvider.credential(
              store.currentUser,
<<<<<<< HEAD
              dialog.data
=======
              document.getElementById("dg-input-elem").value,
>>>>>>> parent of b25c086 (test2)
            );
            const auth = getAuth();
            const user = auth.currentUser;
            
            reauthenticateWithCredential(user, credential)
            .then(() => {
              updateEmail(user, this.email).then(() => {
                console.log("Email updated.");
                store.currentUser = this.email;
                this.saveData();
              })
              .catch((error) => {
                  console.log("Email not updated." + error);
              })
            })
<<<<<<< HEAD
            .catch((error) => {
              console.log("Wrong password!");
=======
            .catch(() => {
              console.log("Wrong password!");
              this.wrongPass = false;
              setTimeout(() => {
                this.wrongPass = true;
              }, 4000);
>>>>>>> parent of b25c086 (test2)
            });
            
          })
          .catch(() => {  
            console.log('Prompt closed');
          });
          
      }
      else this.saveData();
    },
    //Spremi korisničke podatke u firestore
    async saveData(){
      this.canSave = false;
      const g = doc(db, "users", store.userID);
        await updateDoc(g, {
          imePrezime: this.imePrezime,
          email: this.email,
          mob: this.mob,
          oib: this.oib,
          theme: this.theme,
        })
        .then(() => {
          console.log("Podaci o korisniku spremljeni!");
          setTimeout(() => {
            this.canSave = true;
          }, 5000);
        })
        .catch((error) => {
          console.error("Neuspješno spremanje podataka o korisniku!" + error);
        });
      },
    dummy() {},
    signout() {
      store.theme="Svijetla"; //Theme reset
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("Signed out!");
        })
        .catch((error) => {
          console.error("Error signing out!" + error);
        });
    },
    checkEmail(email) {
      let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    updateTheme() {
      store.theme=this.theme;
    },
    mobLoad() {
          let br = this.mobTemp.slice(2);
          this.mob = this.mobTemp;
          let l = br.length;
          if (l >= 1 && l < 5 && br)
            this.mobTemp = br.slice(0, 1) + "-" + br.slice(1);
          else if (l >= 5)
            this.mobTemp =
              br.slice(0, 1) + "-" + br.slice(1, 4) + "-" + br.slice(4);
    },
  },
  computed: {
    IsAllFilled() {
      return this.imePrezime &&
        this.checkEmail(this.email) &&
        this.email &&
        this.oib &&
        this.oib.length == 11 &&
        this.UpdateMob.length > 8 &&
        this.UpdateMob &&
        this.canSave
        ? true
        : false;
    },
    UpdateMob: {
      get() {
        return `${this.mobTemp}`;
      },
      set() {
        let br = document.getElementById("mobInput").value.replace(/-/g, "");
        if (br == "") {
          this.mob = "";
          this.mobTemp = "";
        }
        this.mob = "09" + br;
        let l = br.length;
        if (l >= 1 && l < 5 && br)
          this.mobTemp = br.slice(0, 1) + "-" + br.slice(1);
        else if (l >= 5)
          this.mobTemp =
            br.slice(0, 1) + "-" + br.slice(1, 4) + "-" + br.slice(4);
      },
    },
  },
};
</script>

<style>
.logout {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1500;
  filter: drop-shadow(0px -4px 4px rgba(0, 0, 0, 0.25));
  background: var(--FluorescentRed__FrenchWine);
}

.logout p {
  font-family: Alike;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #000000d0;
  font-weight: bold;
}

.exit-icon {
  width: 32px;
  height: 32px;
  opacity: 0.75;
}

.mtc2 {
  margin-top: 3px;
}

.hide {
  overflow: hidden;
  height: 0px;
}

.hide2 {
  overflow: hidden;
  height: 106px;
}
.eye {
  float: right;
  margin-top: -28px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  height: 20px;
}
</style>
