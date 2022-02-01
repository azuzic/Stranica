<template>
  <div v-if="dataUsername==''" class="menu">

      <div class="home-link">
        <a @click="mode=true;" :class="mode ? 'active' : 'inactive'">
          SIGN UP
        </a>
        <a class="ml-4 mr-4">|</a>
        <a @click="mode=false;" :class="!mode ? 'active' : 'inactive'">
          LOG IN
        </a>
      </div>

      <hr class="menu-hr">
      
      <div v-if="mode" class="p-2">
        <p class="mb-1">Email:</p>
        <input class="c-input" type="email" v-model="email">
        <p class="mb-1 mt-4">Username:</p>
        <input class="c-input" type="text" v-model="username" maxlength="20">
        <p class="text-red" v-if="checkUsername()">Username already exists!</p>
        <p class="mb-1 mt-4">Password:</p>
        <input class="c-input" type="password" v-model="password">
        <p class="mb-1 mt-4">Password repeat:</p>
        <input class="c-input" type="password" v-model="passwordRepeat">
        <div class="div-btn">
          <button @click="isFilled() ? signup() : dummy()" class="btn" :class="isFilled() ? 'btn-active' : 'btn-inactive'">
            SIGN UP
          </button>
        </div>
      </div>

      <div v-else class="p-2">
        <p class="mb-1">Email:</p>
        <input class="c-input" type="email" v-model="email">
        <p class="mb-1 mt-4">Password:</p>
        <input class="c-input" type="password" v-model="password">
        <div class="div-btn">
          <button @click="isFilled2() ? login() : dummy()" class="btn" :class="isFilled2() ? 'btn-active' : 'btn-inactive'">
            LOG IN
          </button>
        </div>
      </div>

    <div class="menu-pull"></div>
  </div>

  <div v-else class="menu">

      <div class="home-link">
        <a>
          LOGGED IN AS: <br> {{dataUsername}}
        </a>
      </div>

      <hr class="menu-hr">
      
      <div class="p-2">
        <div class="div-btn">
          <button @click="logout()" class="btn btn-active">
            LOG OUT
          </button>
        </div>
      </div>

    <div class="menu-pull"></div>
  </div>
</template>

<script>
import data from "@/data";

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "@/firebase";
import { collection, addDoc, getDocs } from "@/firebase";
import { db } from "@/firebase";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("LOGGED IN: " + user.email);
    data.email = user.email;
  } else {
    console.log("NO USER");
    data.email = '';
  }
});

export default {
  name: 'SignLogIn',
  data() {
    return {
      username: "",
      email: "",
      password: "",
      passwordRepeat: "",
      usernameCheck: false,
      data,
      mode: true,
      dataUsername: '',
    }
  },
  mounted() {
    this.getUserData();
  },
  methods: {
    async signup() {
      if (this.password !== this.passwordRepeat) {
        return;
      } else {
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then(async () => {
            // Signed in
            console.log("Uspjesna registracija!");
            this.registered = true;
            try {
              const docRef = await addDoc(collection(db, "users"), {
                username: this.username,
                email: this.email,
              });
              console.log("Document written with ID: ", docRef.id);
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          })
          .catch((e) => {
            let error = e.message.slice(22, -2).replace(/-/g, " ");
            error = error.charAt(0).toUpperCase() + error.slice(1) + "!";
            console.error(error);
          });
      }
    },
    login() {
      console.log("login..." + this.email);
      
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((result) => {
          console.log("Uspješna prijava", result);
          this.getUserData();
        })
        .catch((e) => {
          let error = e.message.slice(22, -2).replace(/-/g, " ");
          error = error.charAt(0).toUpperCase() + error.slice(1) + "!";
          console.error(error);
        });
    },
    logout() {
      signOut(auth)
        .then(() => {
          console.log("Signed out!");
          data.username = "";
          data.email = "";
          this.dataUsername = "";
        })
        .catch(() => {
          console.error("Signed out error!");
        });
    },
    isFilled() {
      return this.username && this.email && this.password == this.passwordRepeat && this.passwordRepeat && this.password && !this.checkUsername() ? true : false;
    },
    isFilled2() {
      return this.email && this.password;
    },
    checkUsername() {
      this.loadData();
      return this.usernameCheck;
    },
    async loadData() {
      const querySnapshot = await getDocs(collection(db, "users"));
      this.usernameCheck = false;
      querySnapshot.forEach((doc) => {
        if (this.username === `${doc.data().username}`)
          this.usernameCheck = true;
      });
    },
    async getUserData() {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          if (data.email === `${doc.data().email}`) {
            data.email = `${doc.data().email}`;
            data.username = `${doc.data().username}`;
            data.id = `${doc.id}`;
            this.dataUsername = `${doc.data().username}`;
          }
        });
      },
    dummy() {},
  },
}
</script>

<style lang="scss" scoped>
* {
  transition: all 0.25s;
}
.menu {
  transition: all 0.5s;
  position: fixed;
  z-index: 10000000;
  background-color: rgba(8, 5, 5, 0.85);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.85);
  border-bottom-left-radius: 16px;
  padding: 8px;
  color: rgba(255, 255, 255, 0.75);
  width: 300px;
  right: -300px;
  .home-link {
    text-align: center;
    margin-top: 8px;
    & a {
      font-size: 24px;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.75);
    }
    .active {
      color: rgba(255, 255, 255, 1);
      &:hover {
        color: rgba(255, 255, 255, 0.75);
      }
    }
    .inactive {
      color: rgba(255, 255, 255, 0.25);
      &:hover {
        color: rgba(255, 255, 255, 0.75);
      }
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
  .menu-pull {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-right: 15px solid rgba(0, 0, 0, 0.5);
    border-bottom: 10px solid transparent;
    left: -15px;
    top: 50%
  }
  &:hover {
    right: 0px;
  }
}

.c-input {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--balticSea3) !important;
  width: 100%;
  border-radius: 32px;
  padding: 4px 8px 4px 8px;
  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.25);
  }
  &:hover {
    outline: none;
    background-color: rgba(255, 255, 255, 0.25);
  }
}

.div-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  .btn {
    padding: 4px 24px 4px 24px;
    margin-top: 16px;
    border-radius: 32px;
  }
  .btn-active {
    background-color: rgba(255, 255, 255, 0.25);
    &:hover {
      outline: none;
      background-color: rgba(255, 255, 255, 0.75);
      color: black;
      font-weight: bold;
      box-shadow: 0 0 1px rgba(255, 255, 255, 0.75),
          0 0 8px rgba(255, 255, 255, 0.75),
          0 0 48px rgba(255, 255, 255, 0.75);
    }
  }
  .btn-inactive {
    background-color: rgba(255, 255, 255, 0.05);
  }
}
.text-red {
  color: rgb(231, 62, 62);
  font-weight: bold;
}
</style>
