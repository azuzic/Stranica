<template>
  <div class="body">

    <div class="body-div">
      <div class="div-reset">
        <p @click="name!='' && !gameExists && data.username!='' ? create(name) : dummy()" 
            class="reset" :class="name!='' && !gameExists && data.username!='' ? 'can' : 'cant'">CREATE GAME</p>
        <div class="div-gameName">
          <input v-model="name" class="c-input" type="text" maxlength="10">
          <p class="text-red" v-if="checkGameExists(name)">Game name already exists!</p>
        </div>
        <check-box @selected="retrieveValue"/>
      </div>

      <div class="board-data">
        <div class="game-list">
          <p class="title">GAME LIST:</p>
          <p class="li"
          v-for="(z, i) of games"
          :key="`key-${i}`"
          >
            <b v-if="data.email=='alesandro.zuzic@gmail.com'" class="x" @click="deleteGame(z.id)">X</b> - <i @click="joinGame(z.id)">{{z.name}}</i>
            
          </p>
        </div>

        <div class="board grid grid-rows-3 grid-cols-3">
          <div @click="move(0)" class="square white">
            <img v-if="board[0]=='o'" src="@/assets/TicTacToe/o.svg">
            <img v-if="board[0]=='x'" src="@/assets/TicTacToe/x.svg">
          </div>

          <div @click="move(1)" class="square black border-x-4 border-[#00000080]">
            <img v-if="board[1]=='o'" src="@/assets/TicTacToe/o.svg">
            <img v-if="board[1]=='x'" src="@/assets/TicTacToe/x.svg">
            <div v-if="end==1" class="line line-h"></div>
          </div>

          <div @click="move(2)" class="square white"> 
            <img v-if="board[2]=='o'" src="@/assets/TicTacToe/o.svg">
            <img v-if="board[2]=='x'" src="@/assets/TicTacToe/x.svg">
          </div>

          <div @click="move(3)" class="square black border-y-4 border-[#00000080]">
            <img v-if="board[3]=='o'" src="@/assets/TicTacToe/o.svg">
            <img v-if="board[3]=='x'" src="@/assets/TicTacToe/x.svg">
            <div v-if="end==4" class="line line-v"></div>
          </div>

          <div @click="move(4)" class="square white border-x-4 border-[#00000090] border-y-4 border-[#00000090]">
            <img v-if="board[4]=='o'" src="@/assets/TicTacToe/o.svg">
            <img v-if="board[4]=='x'" src="@/assets/TicTacToe/x.svg">
            <div v-if="end==2" class="line line-h"></div>
            <div v-if="end==5" class="line line-v"></div>
            <div v-if="end==7" class="line line-dl"></div>
            <div v-if="end==8" class="line line-dr"></div>
          </div>

          <div @click="move(5)" class="square black border-y-4 border-[#00000080]">
            <img v-if="board[5]=='o'" src="@/assets/TicTacToe/o.svg">
            <img v-if="board[5]=='x'" src="@/assets/TicTacToe/x.svg">
            <div v-if="end==6" class="line line-v"></div>
          </div>

          <div @click="move(6)" class="square white">
            <img v-if="board[6]=='o'" src="@/assets/TicTacToe/o.svg">
            <img v-if="board[6]=='x'" src="@/assets/TicTacToe/x.svg">
          </div>

          <div @click="move(7)" class="square black border-x-4 border-[#00000080]">
            <img v-if="board[7]=='o'" src="@/assets/TicTacToe/o.svg">
            <img v-if="board[7]=='x'" src="@/assets/TicTacToe/x.svg">
            <div v-if="end==3" class="line line-h"></div>
          </div>

          <div @click="move(8)" class="square white">
            <img v-if="board[8]=='o'" src="@/assets/TicTacToe/o.svg">
            <img v-if="board[8]=='x'" src="@/assets/TicTacToe/x.svg">
          </div>
        </div>
      </div>
      <div v-if="player1!='' && player2!='' && end==0" class="VS">
        {{player1}} <b class="red">VS</b> {{player2}}
      </div>
      <div v-if="end!=0" class="div-msg">
        <p class="msg">Winner is <b class="w-red">{{msg}}</b></p>
      </div>
      <div v-if="player1!='' && player2==''" class="div-msg">
        <p class="msg">Waiting for player 2 to join</p>
      </div>
    </div>
  </div>
</template>
<script>
import CheckBox from "@/components/CheckBox.vue";
import data from "@/data";

import { collection, addDoc, db, doc, updateDoc, onSnapshot, getDocs, deleteDoc } from "@/firebase";

export default {
  name: "TicTacToe",
  components: { 
    CheckBox,
  },
  data() {
    return {
      board: ['','','',
              '','','',
              '','',''],
      player: 'x',
      end: 0,
      msg: "",
      data,
      playerType: "",
      player1: "",
      player2: "",
      gameID: "",
      gameExists: false,
      games: [],
      name: "",
      getter: false,
      checked: false,
    }
  },
  created() {
    onSnapshot(collection(db, "TicTacToe"), () => {
        this.getGameData();
    });
  },
  methods: {
    joinGame(n) {
      if (this.gameID != n) {
        this.gameID = n; 
        this.end=0;
        this.msg="";
        this.playerType = "";
        this.player2=data.username;
        this.updatePlayer2();
      }
    },
    async getGameData() {
      const g = await getDocs(collection(db, "TicTacToe"));
      this.games=[];
      g.forEach((doc) => {
        if (this.gameID == `${doc.id}`) {
          if(this.board != `${doc.data().board}`) {
            for(let i=0; i<9; i++) {
              this.board[i] = `${doc.data().board[i]}`;
            }
            this.getter = true;
            this.check(this.board);
            this.player = `${doc.data().move}`;
          }
          if (this.player2=="") {
            this.player2 = `${doc.data().player2}`;
          }
          if (this.player1=="")
            this.player1 = `${doc.data().player1}`;
          if (this.playerType!='x' && this.playerType != 'o') 
            this.playerType = `${doc.data().playerType2}`;
        }
        this.games.push({"id": `${doc.id}`, "name": `${doc.data().id}`})
      });
    },
    async createGame(gameName) {
      if (this.gameID != "") 
        await deleteDoc(doc(db, "TicTacToe", this.gameID));
      let p1='o';
      let p2='x';
      this.playerType = p1;
      if (this.checked) {
        p1='x';
        p2='o';
        this.playerType = p1;
      }
      await addDoc(collection(db, "TicTacToe"), {
        board: this.board,
        player1: data.username,
        player2: "",
        playerType1: p1,
        playerType2: p2,
        move: this.player,
        id: gameName,
      })
      .then((docRef) => {
        this.gameID = docRef.id;
      })
      console.log('worked');
    },
    async updateGame(){
      const g = doc(db, "TicTacToe", this.gameID);
      await updateDoc(g, {
        board: this.board,
        move: this.player,
      })
    },
    async updatePlayer2(){
      const g = doc(db, "TicTacToe", this.gameID);
      await updateDoc(g, {
        player2: data.username,
      })
    },
    move(n) {
      if (this.board[n] != 'x' && this.board[n] != 'o' && this.end==0 && this.playerType==this.player && this.player2!="") {
        this.board[n] = this.player;
        this.check(this.board);
        this.player = this.player=='x' ? 'o' : 'x';
        this.updateGame();
      } 
    },
    async check(b) {
      let w = 0;
        if     (b[0]==b[1]&&b[1]==b[2]&&b[0]!=''&&b[1]!=''&&b[2]!='') {w=1; this.end=1;}
        else if(b[3]==b[4]&&b[4]==b[5]&&b[3]!=''&&b[4]!=''&&b[5]!='') {w=1; this.end=2;} 
        else if(b[6]==b[7]&&b[7]==b[8]&&b[6]!=''&&b[7]!=''&&b[8]!='') {w=1; this.end=3;}
        else if(b[0]==b[3]&&b[3]==b[6]&&b[0]!=''&&b[3]!=''&&b[6]!='') {w=1; this.end=4;} 
        else if(b[1]==b[4]&&b[4]==b[7]&&b[1]!=''&&b[4]!=''&&b[7]!='') {w=1; this.end=5;} 
        else if(b[2]==b[5]&&b[5]==b[8]&&b[2]!=''&&b[5]!=''&&b[8]!='') {w=1; this.end=6;} 
        else if(b[0]==b[4]&&b[4]==b[8]&&b[0]!=''&&b[4]!=''&&b[8]!='') {w=1; this.end=7;} 
        else if(b[2]==b[4]&&b[4]==b[6]&&b[2]!=''&&b[4]!=''&&b[6]!='') {w=1; this.end=8;}
        if (w) {
          let p1 = data.username==this.player1 ? this.player1 : this.player2;
          let p2 = data.username==this.player1 ? this.player2 : this.player1;
          if (this.player == this.playerType)
            this.msg = p1;
          else
            this.msg = p2;
          if (this.getter)
            await deleteDoc(doc(db, "TicTacToe", this.gameID));
        }
        this.getter = false;
    },
    create(name) {
      this.board = ['','','','','','','','',''];
      this.end = 0;
      this.msg = "";
      this.playerType = "";
      this.playerType2 = "";
      this.player1 = data.username;
      this.player2 = "";
      this.player = "x";
      this.name = "";
      this.createGame(name);
    },
    checkGameExists(gameName) {
      this.checkGameName(gameName); 
      return this.gameExists;
    },
    async checkGameName(gameName) {
      const g = await getDocs(collection(db, "TicTacToe"));
      this.gameExists = false;
      g.forEach((doc) => {
        if (gameName== `${doc.data().id}`) {
          this.gameExists = true;
        }
      });
    },
    retrieveValue(value) {
      this.checked=value;
    },
    async deleteGame(id) {
      await deleteDoc(doc(db, "TicTacToe", id));
    },
    dummy() {},
  },
}
</script>

<style lang="scss" scoped>
* {
  transition: all 0.25s;
}
.body {
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.07);
  .board {
    width: 60vh;
    height: 60vh;
    background-color: rgba(255, 255, 255, 0.09);
    .square {
      position: relative;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.04);
      &:hover {
        background-color: rgba(255, 255, 255, 0.09);
      }
      & img {
        width: 100%;
        height: 100%;
      }
      .line {
        position: absolute;
        background-color: #fff;
        border-radius: 16px;
        z-index: 100;
      }
      .line-h {
        height: 12px;
        width: 300%;
        bottom: 50%;
        right: -100%;
      }
      .line-v {
        width: 12px;
        height: 300%;
        left: 50%;
        top: -100%;
      }
      .line-dr {
        width: 12px;
        height: 400%;
        left: 47%;
        top: -150%;
        transform: rotate(45deg);
      }
      .line-dl {
        width: 12px;
        height: 400%;
        left: 47%;
        top: -150%;
        transform: rotate(-45deg);
      }
    }
  }
  .body-div {
    position: relative;
    justify-content: center;
    align-items: center;
    .div-reset {
      width: 100%;
      z-index: 150;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 16px;
      .reset {
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 48px;
        padding-right: 48px;
        border-radius: 48px;
        text-align: center;
        font-size: 24px;
        color: rgba(255, 255, 255, 0.75);
      }
      .can {
        background-color: rgba(0, 0, 0, 0.9);
        &:hover {
          background-color: rgba(255, 255, 255, 0.9);
          color: rgba(0, 0, 0, 0.75);
          font-weight: bold;
          cursor: pointer;
        }
      }
      .cant {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
    .div-msg {
      width: 100%;
      position: absolute;
      z-index: 150;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 16px;
      .msg {
        text-align: center;
        font-size: 36px;
        color: rgba(255, 255, 255, 0.75);
        .w-red {
          color: rgb(202, 44, 44);
        }
      }
    }
    .c-input {
      background-color: rgba(255, 255, 255, 0.1);
      color: var(--balticSea3) !important;
      border-radius: 32px;
      padding: 8px 16px 8px 16px;
      margin-left: 16px;
      width: 130px;
      &:focus {
        outline: none;
        background-color: rgba(255, 255, 255, 0.25);
      }
      &:hover {
        outline: none;
        background-color: rgba(255, 255, 255, 0.25);
      }
    }
  }
}
.board-data {
  display: flex;
  .game-list {
    background-color: rgba(255, 255, 255, 0.25);
    height: 100%;
    padding: 16px;
    margin-right: 16px;
    .title {
      font-weight: bold;
      font-size: 16px;
    }
    .li {
      & i {
        cursor: pointer;
        &:hover {
          color: white;
        }
      }
      .x {
        cursor: pointer;
        color: rgb(104, 31, 31);
        &:hover {
          color: rgb(236, 76, 76);
        }
      }
    }
  }
}

.VS {
  text-align: center;
  font-size: 36px;
  color: #fff;
  .red {
    color: rgb(202, 44, 44);
  }
}

.div-gameName {
  position: relative;
  & p {
    position: absolute;
    top: -25px;
    width: 200px;
    color: rgb(202, 44, 44);
  }
}
</style>