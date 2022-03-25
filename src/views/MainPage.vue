<template>
  <div class="main-bg">
    <div class="bgbg"></div>
    <!--=================EDIT==================-->
    <div v-if="!$store.state.isUploading && !loading && false">
      <div v-if="username == 'mod959' && !edit" @click="styleManga(0), edit=true, manga.edit=true" class="edit"></div>
      <div v-if="username == 'mod959' && edit" @click="styleManga(1), edit=false, manga.edit=false" class="edit2"></div>
    </div>
    <!--=================/EDIT=================-->
    <!--=================EPICBG================-->
    <EpicBg edit="edit"/>
    <!--=================/EPICBG==============-->
    <!--=================MENU=================-->
    <div class="menu-bg sticky top-0">
      <div @click="$store.state.isUploading || loading ? dummy() : changeLayout()" class="edit-btn mr-2" :class="!$store.state.isUploading && !loading ? '' : 'opacity-25'">
        Change layout
      </div>
      <div v-if="edit" @click="$store.state.isUploading ? dummy() : createMangaUpload()" class="edit-btn" :class="!$store.state.isUploading ? '' : 'opacity-25'">
        Add Collection
      </div>
      <div @click="$store.state.isUploading || loading ? dummy() : mangaSort(1)" class="edit-btn mr-2" :class="!$store.state.isUploading && !loading ? '' : 'opacity-25'">
        Sort <b v-if="az">Z - A</b> <b v-else>A - Z</b>
      </div>
      <div :class="!$store.state.isUploading && !loading ? '' : 'opacity-25'">
        <select :disabled="$store.state.isUploading || loading" class="edit-btn" v-model="sort" @change="$store.state.isUploading || loading ? dummy() : mangaSort(2)">
          <option value="none">Show all</option>
          <option value="finished">Show completed</option>
          <option value="ongoing">Show ongoing</option>
        </select>
      </div>
    </div>
    <!--=================/MENU================-->
    <!--=================COLLECTIONS==========-->
    <div class="main-content flex items-center justify-center w-full relative">

      <transition-group id="addMangaUpload" class="flex flex-grow flex-wrap justify-center p-8" name="list" tag="div">
        <MangaUpload
          v-for="(z) of newMangaCollection"
            :key="z.id"
            :mangaCollection = z 
            @deleteFromList="deleteFromList"  
            />
      </transition-group>

      <MangaOpen v-if="$store.state.mangaOpen" :mangaCollection=$store.state.mangaShow />

    </div>
    <!--================/COLLECTIONS==========-->
    <div class="img-top"></div>
  </div>
</template>

<script>
import data from "@/data";
import manga from "@/manga";
import EpicBg from '@/components/Manga/EpicBg.vue';
import { db, collection, getDocs } from "@/firebase";
import MangaUpload from '@/components/Manga/MangaUpload.vue';
import MangaOpen from '@/components/Manga/MangaOpen.vue';

let wait = function (seconds) {
  return new Promise((resolveFn) => {
    setTimeout(resolveFn, seconds * 1000);
  });
};

export default {
  name: "MainManga",
  components: {
    EpicBg,
    MangaUpload,
    MangaOpen
  },
  data() {

    return {
      //EPICIMG
      edit: false,
      data,
      manga,
      username: "",
      layout: false,
      loading: true,

      sort: "none",
      az: true,

      newMangaCollection: [],
      saveNewMangaCollection: [],
      date: ""
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    dummy() {},
    async mangaSort(s) {
      switch(s) {
        case 1: {
          this.az = !this.az;
          this.newMangaCollection.sort((a, b) => {
            const nameA = a.title.toUpperCase(); // ignore upper and lowercase
            const nameB = b.title.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return this.az ? -1 : 1;
            }
            if (nameA > nameB) {
              return this.az ? 1 : -1;
            }
            // names must be equal
            return 0;
          })
          break;
        }
        case 2: {
          if (this.saveNewMangaCollection.length == 0) {
            this.newMangaCollection.forEach(e => {
              this.saveNewMangaCollection.push(e);
            });
            this.$store.state.tmangaTotal = this.$store.state.mangaTotal;
          }
          else {
            for (let j = 0; j < this.saveNewMangaCollection.length; j++) {
              let f = false;
              this.newMangaCollection.forEach(e => {
                if(e.title==this.saveNewMangaCollection[j].title) {
                  f = true;
                  console.log("yes");
                }       
              });
              if (!f) {
                this.newMangaCollection.push(this.saveNewMangaCollection[j]);
                await wait(0.05);
              }
            }
            var i = 0;
            while (i < this.newMangaCollection.length && this.sort!='none') {
              if (this.newMangaCollection[i].state != this.sort) 
                this.newMangaCollection.splice(i, 1);
              else 
                i++;
              await wait(0.05);
            }
          }
          break;
        }
      }  
    },
    createMangaUpload() {
      this.date = Date.now();
      let id = this.date.toString();
      console.log(this.newMangaCollection);
      this.newMangaCollection.unshift({"img": [], "title": id, "id": id, "mal_id": '', "state": 'ongoing'});
    },
    deleteFromList(value) {
      console.log(value);
      for (var i = this.newMangaCollection.length - 1; i >= 0; --i) {
          if (this.newMangaCollection[i].title == value) {
              this.newMangaCollection.splice(i,1);
          }
      }
    },
    async loadData() {
      try {
        let querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          if (data.email === `${doc.data().email}`) {
            data.epicImg = `${doc.data().epicImg}`;
            this.username = `${doc.data().username}`;
          }
        })
        const messageRef = await getDocs(collection(db, "users", data.id, "mangaCollection"));
        this.newMangaCollection = [];
        for(let i = 0; i<messageRef.docs.length; i++) {
          let doc = messageRef.docs[i]._document.data.value.mapValue.fields;
          let imgs = doc.img.arrayValue.values;
          let img = [];
          if (imgs !== undefined)
            for (let k=0; k<imgs.length; k++) {
              let t = imgs[k].mapValue.fields;
              img.push({"file": t.file.stringValue, "id": t.id.stringValue, "place": t.place.stringValue});
            }
          this.date = Date.now();
          let id = this.date.toString();
          let title = doc.title.stringValue;
          let mal_id = doc.mal_id.integerValue.toString();
          this.$store.state.mangaDatalist.push(title);
          let state = '';
          if (doc.state != undefined)
            state = doc.state.stringValue;
          this.newMangaCollection.push({"img": img, "title": title, "id": id, "mal_id": mal_id, "state": state});
          await wait(0.1);
        }
        console.log(this.$store.state.mangaDatalist);
        this.$store.state.mangaShow = this.newMangaCollection[0];
        this.loading = false;
      }
      catch (e) {
        console.error(e);
      }
      await wait(0.1);
      this.edit = true;
      this.edit = false;
    },
    async styleManga(n) {
      if (n) {
        await wait(0.01);
        let customGridID = document.getElementsByClassName("customGridID");
        let deleteManga = document.getElementsByClassName("deleteManga");
        let mangaID = document.getElementsByClassName("mangaID");
        let mangasizeID = document.getElementsByClassName("mangasizeID");
        let titleID = document.getElementsByClassName("titleID");
        let insertID = document.getElementsByClassName("insertID");
        for (let el of titleID) {
          el.classList.remove("ml-14");
        }
        for (let el of customGridID) {
          el.classList.remove("custom-grid");
          el.classList.add("custom-grid2");
        }
        for (let el of deleteManga) {
          el.classList.add("invisible");
        }
        for (let el of mangaID) {
          el.classList.remove("manga-edit");
          el.classList.add("manga2");
        }
        for (let el of mangasizeID) {
          el.classList.remove("manga-size-edit");
          el.classList.add("manga-size2");
        }
        for (let el of insertID) {
          el.classList.remove("justify-center");
        }
      }
      else {
        await wait(0.01);
        let customGridID = document.getElementsByClassName("customGridID");
        let deleteManga = document.getElementsByClassName("deleteManga");
        let mangaID = document.getElementsByClassName("mangaID");
        let mangasizeID = document.getElementsByClassName("mangasizeID");
        let insertID = document.getElementsByClassName("insertID");
        for (let el of customGridID) {
          el.classList.remove("custom-grid2");
          el.classList.add("custom-grid");
        }
        for (let el of deleteManga) {
          el.classList.remove("invisible");
        }
        for (let el of mangaID) {
          el.classList.remove("manga");
          el.classList.add("manga-edit");
        }
        for (let el of mangasizeID) {
          el.classList.remove("manga-size");
          el.classList.add("manga-size-edit");
        }
        for (let el of insertID) {
          el.classList.add("justify-center");
        }
      }
    },
    async changeLayout() {
      this.layout = !this.layout;
      if (this.layout) {
        await wait(0.01);
        let customGridID = document.getElementsByClassName("customGridID");
        let mangahideID = document.getElementsByClassName("mangahideID");
        let mangaID = document.getElementsByClassName("mangaID");
        let mangasizeID = document.getElementsByClassName("mangasizeID");
        let titleID = document.getElementsByClassName("titleID");
        let insertID = document.getElementsByClassName("insertID");
        for (let el of titleID) {
          el.classList.remove("manga-hide");
          el.classList.add("ml-14");
        }
        for (let el of customGridID) {
          el.classList.remove("custom-grid2");
          el.classList.add("custom-grid");
        }
        for (let el of mangaID) {
          el.classList.remove("manga2");
          el.classList.add("manga");
        }
        for (let el of mangasizeID) {
          el.classList.remove("manga-size2");
          el.classList.add("manga-size");
        }
        for (let el of mangahideID) {
          el.classList.remove("manga-hide");
        }
        for (let el of insertID) {
          el.classList.add("justify-center");
        }
      }
      else {
        await wait(0.01);
        let customGridID = document.getElementsByClassName("customGridID");
        let mangahideID = document.getElementsByClassName("mangahideID");
        let mangaID = document.getElementsByClassName("mangaID");
        let mangasizeID = document.getElementsByClassName("mangasizeID");
        let titleID = document.getElementsByClassName("titleID");
        let insertID = document.getElementsByClassName("insertID");
        for (let el of titleID) {
          el.classList.add("manga-hide");
          el.classList.remove("ml-14");
        }
        for (let el of customGridID) {
          el.classList.remove("custom-grid");
          el.classList.add("custom-grid2");
        }
        for (let el of mangaID) {
          el.classList.remove("manga");
          el.classList.add("manga2");
        }
        for (let el of mangasizeID) {
          el.classList.remove("manga-size");
          el.classList.add("manga-size2");
        }
        for (let el of mangahideID) {
          el.classList.add("manga-hide");
        }
        for (let el of insertID) {
          el.classList.remove("justify-center");
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.main-bg {
  position: absolute;
  width: 100%;
  .bgbg {
    z-index: -1;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #0B1622;
  }
  .edit {
    z-index: 500;
    width: 40px;
    height: 40px;
    background-image: url(@/assets/manga/edit_icon.png);
    background-position: center;
    background-size: 90%;
    background-repeat: no-repeat;
    position: fixed;
    margin: 8px;
    right: 0px;
    top: 0px;
    &:hover {
      opacity: 75%;
      cursor: pointer;
    }
  }
  .edit2 {
    z-index: 500;
    width: 40px;
    height: 40px;
    background-image: url(@/assets/manga/edit_icon2.png);
    background-position: center;
    background-size: 90%;
    background-repeat: no-repeat;
    position: fixed;
    margin: 8px;
    right: 0px;
    top: 0px;
    &:hover {
      opacity: 75%;
      cursor: pointer;
    }
  }
  .epic-bg {
    height: 300px;
    display: flex;
    overflow: hidden;
    position: relative;
    width: 100%;
    overflow: hidden;
    .epic-img {
      position: absolute;
      width: 100%;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
      pointer-events: none;
    }
    .gradient  {
      z-index: 10;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(180deg, #0b162200, #0b162273);
    }
    .center-edit-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .edit-bg {
        transition: .5s;
        position: absolute;
        background-color: rgba(35,38,67,.5);
        box-shadow: 0px 0px 8px -2px #0b1622b9;
        padding: 4px 16px 4px 16px;
        border-radius: 16px;
        color: #EDF1F5;
        z-index: 20;
        &:hover {
          box-shadow: 0px 0px 10px -2px #0b1622;
          background-color: #151F2E;
          color: #9FADBD;
          cursor: pointer;
        }
      }
      .epic-keep {
        z-index: 150;
        background-color: rgba(35,38,67,.5);
        box-shadow: 0px 0px 8px -2px #0b1622b9;
        padding: 8px 48px 8px 48px;
        border-radius: 48px;
        color: #EDF1F5;
        .yes-no {
          background-color: rgba(35,38,67,.5);
          box-shadow: 0px 0px 8px -2px #0b1622b9;
          padding: 2px 16px 2px 16px;
          border-radius: 16px;
          color: #EDF1F5;
          z-index: 150;
          &:hover {
            box-shadow: 0px 0px 10px -2px #0b1622;
            background-color: #3DB4F2;
            font-weight: bold;
            cursor: pointer;
          }
        }
        &:hover {
          box-shadow: 0px 0px 10px -2px #0b1622;
          background-color: #151F2E;
          color: #9FADBD;
        }
      }
    }
  }
  .menu-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: #151F2E;
    z-index: 260;
    .edit-btn {
      transition: .5s;
      text-align: center;
      background-color: rgba(35,38,67,.5);
      box-shadow: 0px 0px 8px -2px #0b1622b9;
      padding: 4px 16px 4px 16px;
      border-radius: 16px;
      color: #EDF1F5;
      z-index: 20;
      &:hover {
        box-shadow: 0px 0px 10px -2px #0b1622;
        background-color: #030b16;
        color: #9FADBD;
        cursor: pointer;
      }
    }
  }
}

.main-content {
  .body {
    height: 100%;
    margin: 36px 24px 36px 24px;
    .collection-edit {
      border: solid 2px #151F2E;
      border-radius: 24px;
      margin-bottom: 12px;
      .collection-title {
        margin: 8px;
        padding-left: 16px;
        width: 100%;
        font-size: 24px;
        margin-bottom: 18px;
        font-weight: bold;
        color: #9FADBD;
      }
      .manga-edit {
        transition: 0.5s;
        cursor: pointer;
        width: 140px;
        margin: 16px;
        height: 200px;
        position: relative;
        .manga-size-edit {
          position: absolute;
          width: 140px;
          z-index: 200;
          transition: 0.75s;
          border-radius: 4px;
        }
      }     
    }
  }
}
.collection {
  .collection-title {
    width: 100%;
    font-size: 24px;
    margin-bottom: 18px;
    font-weight: bold;
    color: #9FADBD;
  }
  .manga {
    transition: 0.5s;
    cursor: pointer;
    width: 50px;
    height: 240px;
    .manga-size {
      z-index: 200;
      transition: 0.75s;
      position: absolute;
      border-left: groove white 15px;
      border-top: inset white 5px;
      border-top-right-radius: 5px;
      border-top-left-radius: 1px;
      border-bottom-left-radius: 10px;
      height: 200px;
      transform: skewY(-10deg) scaleX(0.8);
      &:hover {
        z-index: 250;
        transition: 0.5s;
        position: absolute;
        border-left: outset white 10px;
        border-top: inset white 5px;
        border-top-right-radius: 5px;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 5px;
        margin-top: -200px;
        height: 300px;
        transform: skewY(0deg) scaleX(1);
      }
    }
  } 
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(0px);
}
.collection2 {
  .collection-title {
    width: 100%;
    font-size: 24px;
    margin-bottom: 18px;
    font-weight: bold;
    color: #9FADBD;
  }
  .manga {
    transition: 0.5s;
    cursor: pointer;
    width: 50px;
    height: 240px;
    .manga-size {
      z-index: 200;
      transition: 0.75s;
      position: absolute;
      border-left: groove white 15px;
      border-top: inset white 5px;
      border-top-right-radius: 5px;
      border-top-left-radius: 1px;
      border-bottom-left-radius: 10px;
      height: 200px;
      transform: skewY(-10deg) scaleX(0.8);
      &:hover {
        z-index: 250;
        transition: 0.5s;
        position: absolute;
        border-left: outset white 10px;
        border-top: inset white 5px;
        border-top-right-radius: 5px;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 5px;
        margin-top: -200px;
        height: 300px;
        transform: skewY(0deg) scaleX(1);
      }
    }
  } 
}
</style>

