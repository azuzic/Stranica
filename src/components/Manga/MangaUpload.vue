<template>
  <div :id="'mangaCollectionCreator_'+collectionId" :class="manga.edit ? 'collection-edit pb-2' : 'collection'" class="grid grid-flow-col auto-cols-auto grid-flow-row-dense mr-24">
    <input :disabled="$store.state.isUploading" v-if="manga.edit" type="text" class="collection-title-input" :class="{ 'input-title-ongoing': ongoing, 'input-title-finished': finished}" v-model="mangaTitle" @change="updateTitle">
    <p v-if="!manga.edit" class="collection-title" :class="{ 'title-ongoing': ongoing, 'title-finished': finished}">{{mangaTitle}}</p>
    <!--NEW IMG HERE-->
    
    <transition-group class="flex flex-wrap" name="list" tag="div" :id="'mangaInsert_'+collectionId">
      <div 
      v-for="(z, i) of mangaCollection2"
              :key="`key-${i}`"
              :id="'mangaDiv_'+z.id" :class="z.file.length>0 ? manga.edit ? 'manga-edit': 'manga' : 'invisible'"> 
        <img :id="'mangaImg_'+z.id" :class="manga.edit ? 'manga-size-edit': 'manga-size'" :src="z.file.length>0 ? z.file : ''"> 
        <div :id="'bind_'+z.id" class="deleteManga" :class="manga.edit ? '': 'invisible'" @click="removeSelf(z)">x</div>
      </div>

      <div v-if="manga.edit && !$store.state.isUploading && mangaTitle == oldMangaTitle  && !$store.state.multiple" :class="manga.edit ? 'manga-edit' : 'manga'">
        <div>
          <label :for="'manga-upload_'+this.collectionId" class="manga-upload">
            <input :id="'manga-upload_'+collectionId" type="file" @change="previewManga" multiple="multiple">
            <img :id="'mangaID_'+collectionId" :class="!hideManga ? 'manga-size-edit' : 'manga-hide'">
            <div :class="hideManga ? 'manga-upload-text' : 'manga-hide'">
              Upload manga 
              <p class="big">+</p>
            </div>

          </label>

          <div v-if="mangaLoaded" class="manga-prevent"> </div>

          <div v-if="mangaLoaded" class="manga-keep">
            <div class="text-center mt-2 mb-2">Keep image?</div>
            <div class="grid grid-cols-2">
              <div @click="mangaYES()" class="text-center yes-no">YES</div>
              <div @click="mangaNO()" class="text-center yes-no">NO</div>
            </div>
          </div>

        </div>
      </div>
    </transition-group>

    <div v-if="manga.edit" class="collection-manga-btn flex">
      <div @click="$store.state.isUploading ? dummy() : createCollection()" class="text-center btn" :class="!$store.state.isUploading && mangaTitle != oldMangaTitle ? '':'opacity-25'">Update Title</div>
      <div @click="$store.state.isUploading ? dummy() : deleteCollection()" class="text-center btn" :class="!$store.state.isUploading ? '':'opacity-25'">Delete Collection</div>
      <div @click="updateState('ongoing')" class="ml-3 mr-1 icon" :class="ongoing ? 'ongoing-active' : 'ongoing'"></div>
      <div @click="updateState('finished')" class="icon" :class="finished ? 'finished-active' : 'finished'"></div>
    </div>

  </div>
</template>

<script>
import manga from "@/manga";
import data from "@/data";
import { doc, db, setDoc, getStorage, deleteObject, updateDoc, deleteDoc } from "@/firebase";
import { storage, ref, uploadBytesResumable, getDownloadURL} from "@/firebase";

let wait = function (seconds) {
  return new Promise((resolveFn) => {
    setTimeout(resolveFn, seconds * 1000);
  });
};

export default {
  name: "mangaUpload",
  emits: ["deleteFromList"],
  props: {
    mangaCollection: Object,
  },
  data() {
    return {
      //EPICIMG
      manga,
      data,

      collectionId: this.mangaCollection.title.replace(/\s/g, ''),
      mangaTitle: this.mangaCollection.title,
      oldMangaTitle: this.mangaCollection.title,
      collectionTitle: "",

      hideManga: true,
      r_mangaImg: null,
      mangaImg: null,
      mangaLoaded: false,

      newMangaCollection: this.mangaCollection,
      addedManga: [],
      mangaCollection2: [],

      ongoing: false,
      finished: false,
    }
  },
  mounted() {
    if (this.mangaCollection.img.length == 0)
      this.createCollection();
    if (!manga.edit)
      this.loadData();
    else 
      this.mangaCollection2=this.mangaCollection.img;
    if (this.mangaCollection.state=="ongoing") this.ongoing = true;
    else this.finished = true;
  },
  methods: {
    dummy() {},
    async loadData() {
      for (let i=0; i<this.mangaCollection.img.length; i++) {
        this.mangaCollection2.push(this.mangaCollection.img[i]);
        await wait(0.1);
      }
    },
    removeSelf: async function(z){
      try {
        document.getElementById("mangaDiv_" + z.id).remove();
        
        for (var i = this.newMangaCollection.img.length - 1; i >= 0; --i) {
            if (this.newMangaCollection.img[i].id == z.id) {
                this.newMangaCollection.img.splice(i,1);
            }
        }
        let updateRef = doc(db, "users", data.id, "mangaCollection", this.mangaCollection.title);
        
        await updateDoc(updateRef, {
          img: this.newMangaCollection.img
        });

        let storage = getStorage();
        const desertRef = ref(storage, z.place);
        await deleteObject(desertRef);
        console.log("Manga: " + z.place + " deleted!");
      }
      catch(e) {
        console.error("Error:" + e);
      }
    },
    updateTitle() {
      this.newMangaCollection.title = this.mangaTitle;
    },
    async updateState(state) {
      const ref = doc(db, "users/"+data.id+"/mangaCollection/", this.mangaTitle);
      await updateDoc(ref, {
        state: state
      });
      if (state == "ongoing") {
        this.ongoing = true;
        this.finished = false;
      }
      else {
        this.ongoing = false;
        this.finished = true;
      }
      console.log("Status updated!");
    },
    bindingFunction(id) {
      document.getElementById('bind_'+id).onclick = () => {
        document.getElementById("mangaDiv_" + id).remove();
        for (var i = this.addedManga.length - 1; i >= 0; --i) {
            if (this.addedManga[i].id == id) {
                this.addedManga.splice(i,1);
            }
        }
        console.log("Manga: " + id + " deleted!");
      };
    },
    async previewManga(event) {
      if (event.target.files.length == 1) {
        let img = document.getElementById("mangaID_"+this.collectionId);
        this.r_mangaImg = img.src;
        this.mangaImg = event.target.files[0]; 
        this.hideManga = false;
        img.src = URL.createObjectURL(event.target.files[0]);
        this.mangaLoaded = true;
      }
      else {
        this.$store.state.multiple = true;
        for (let el of event.target.files) {
          this.mangaImg = el; 
          this.hideManga = false;
          await this.mangaYES();
        }
        this.$store.state.multiple = false;
      }
    },
    mangaNO() {
      let img = document.getElementById("mangaID_"+this.collectionId);
      img.src = '';
      this.hideManga = true;
      this.mangaLoaded = false;
    },
    async mangaYES() {
      let url = URL.createObjectURL(this.mangaImg);
      let length = Date.now().toString();
      let l = this.newMangaCollection.title.replace(/\s/g, '').replace(/[^a-zA-Z ]/g, "") + length;
      document.getElementById("mangaInsert_"+this.collectionId).insertAdjacentHTML("beforeend", 
      '<div id="mangaDiv_'+l+'" class="manga-edit">' +
      '<img id="mangaImg_'+l+'" class="manga-size-edit" src="'+url+'">' +
      '<div id="bind_'+l+'" class="deleteManga">x</div>'+
      '<div id=divloader_'+l+' class="loading-container">'+
        '<div class="loading-bar">'+
          '<div id=loader_'+l+' class="loading-bar-loader"></div>'+
        '</div>'+
      '</div>'+
      '</div>'
      );
      this.bindingFunction(l);
      let place = "images/" + "manga/" + data.username + "/collections/" + this.newMangaCollection.title + "/" + this.mangaImg.name;
      this.addedManga.push({"id": l ,"place": place ,"file": this.mangaImg});
      if (!this.$store.state.multiple) {
        let img = document.getElementById("mangaID_"+this.collectionId);
        img.src = '';
      }
      this.hideManga = true;
      this.mangaLoaded = false;
      await this.createCollection();
    },
    async uploadTaskPromise(el) {
      return new Promise((resolve, reject) => {
        let loader = document.getElementById("loader_"+el.id);
        let divloader = document.getElementById("divloader_"+el.id);
        let imageName = "images/" + "manga/" + data.username + "/collections/" + this.newMangaCollection.title + "/" + el.file.name;
        const storageRef = ref(storage, imageName);
        let uploadTask = uploadBytesResumable(storageRef, el.file);
        uploadTask.on('state_changed', 
          (snapshot) => {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            loader.style.width = (progress.toString() + "%");
          }, 
          (error) => {
            console.error("Error: " + error);
            reject();
          }, 
          () => {
            loader.style.width = ("100%");
            setTimeout(() => {
              divloader.remove();
            }, 100);
            console.log("Image " + imageName + " uploaded!");
            resolve(getDownloadURL(ref(storage, imageName)));
          }
        )
      })
    },
    async createCollection() {
      try {
        this.$store.state.isUploading = true;
        let elements = document.getElementsByClassName("deleteManga");
        for (let el of elements) {
          el.classList.add("invisible");
        }
        for (let el of this.addedManga) {
          el.file = await this.uploadTaskPromise(el);
          this.mangaCollection2.push({"id": el.id ,"place": el.place ,"file": el.file});
        }

        let newImg = this.newMangaCollection.img.concat(this.addedManga);

        if (this.mangaCollection.img.length == 0 || this.oldMangaTitle!=this.mangaTitle) {
          await deleteDoc(doc(db, "users/"+data.id+"/mangaCollection/", this.oldMangaTitle));
          console.log("Changed title!");
        }
        await setDoc(doc(db, "users/"+data.id+"/mangaCollection/", this.mangaTitle), {
          title: this.mangaTitle,
          img: newImg,
        });

        for (let el of this.addedManga) {
          document.getElementById("mangaDiv_"+el.id).remove();
        }
        this.newMangaCollection.img = newImg;
        this.addedManga = [];
        console.log("Updated manga collection!");
        this.oldMangaTitle = this.mangaTitle;
        this.$store.state.isUploading = false;
        elements = document.getElementsByClassName("deleteManga");
        for (let el of elements) {
          el.classList.remove("invisible");
        }
      } catch (e) {
        console.error("Error: ", e);
      }
    },
    async deleteCollection() {
      console.log("Deleting collection...");
      this.$emit('deleteFromList', this.oldMangaTitle.replace(/\s/g, ''));
      let elements = document.getElementsByClassName("deleteManga");
      for (let el of elements) {
        el.classList.add("invisible");
      }
      this.$store.state.isUploading = true;

      let storage = getStorage();
      for (let el of this.newMangaCollection.img) {
        const desertRef = ref(storage, el.place);
        await deleteObject(desertRef);
        document.getElementById("mangaDiv_"+el.id).remove();
        console.log("Manga: " + el.place + " deleted!");
      }
      await deleteDoc(doc(db, "users/"+data.id+"/mangaCollection/", this.oldMangaTitle));
      
      console.log("Collection deleted!");
      document.getElementById("mangaCollectionCreator_"+this.collectionId).remove();
      this.$store.state.isUploading = false;
      elements = document.getElementsByClassName("deleteManga");
      for (let el of elements) {
        el.classList.remove("invisible");
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.collection-edit {
  transition: 0.25s; 
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
  .collection-title-input {
    transition: 0.25s; 
    background-color: #151F2E;
    border-radius: 24px;
    margin: 8px;
    padding-left: 16px;
    width: calc(100% - 16px);
    font-size: 24px;
    margin-bottom: 18px;
    font-weight: bold;
    color: #9FADBD;
    border: solid 2px #151F2E;
    &:focus {
      outline: none !important;
      border: solid 2px #3DB4F2 !important;
    }
    &:hover {
      outline: none !important;
      border: solid 2px #223044;
    }
    &:disabled {
      color: #9fadbd2f;
      border: solid 2px #223044 !important;
    }
  }
  .input-title-finished {
    color: #5cb831;
  }
  .input-title-ongoing {
    color: #c28c28;
  }
  .manga-edit {
    transition: 0.5s;
    cursor: pointer;
    width: 140px;
    margin: 16px;
    height: 210px;
    position: relative;
    .manga-size-edit {
      transition: 0s !important;
      position: absolute;
      width: 140px;
      z-index: 200;
      transition: 0.75s;
      border-radius: 4px;
    }
    .manga-upload {
      transition: 0.25s; 
      text-align: center;
      background-color: #151F2E;
      position: absolute;
      color: #9FADBD;
      width: 140px;
      overflow: hidden;
      height: 210px;
      border-radius: 4px;
      z-index: 200;
      font-weight: bold;
      border: solid 2px #151F2E;
      cursor:pointer;
      .big {
        font-size: 48px;
        font-weight: bold;
        margin-top: -18px;
      }
      .manga-upload-text {
        margin-top: 50%;
      }
      &:hover {
        border: solid 2px #3DB4F2;
      }
    }
  }  
  .manga-keep {
    position: absolute;
    margin-top: 50%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #151f2ea9;
    z-index: 300;
    color: #EDF1F5;
    cursor:auto;
    .yes-no {
      background-color: rgba(35,38,67,.5);
      box-shadow: 0px 0px 8px -2px #0b1622b9;
      border-radius: 16px;
      color: #EDF1F5;
      margin: 0px 8px 8px 8px;
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
.manga-prevent {
  z-index: 200;
  position: absolute;
  width: 100%;
  height: 200px;
  background-color: transparent;
  cursor:auto;
}
.collection-manga-btn {
  width: 100%;
  display: flex;
  align-items: center;
  .btn {
    transition: .5s;
    width: 150px;
    height: 30px;
    background-color: rgba(35,38,67,.5);
    box-shadow: 0px 0px 8px -2px #0b1622b9;
    border-radius: 16px;
    color: #EDF1F5;
    margin: 0px 8px 0px 8px;
    padding: 4px 0px 4px 0px;
    &:hover {
      box-shadow: 0px 0px 10px -2px #0b1622;
      background-color: #030b16;
      color: #9FADBD;
      cursor: pointer;
    }
  }
  .icon {
    width: 30px;
    height: 30px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 90%;
    &:hover {
      opacity: 75%;
      cursor: pointer;
    }
  }
  .ongoing {
    background-image: url(@/assets/manga/ongoing.svg);
  }
  .finished {
    background-image: url(@/assets/manga/finished.svg);
  }
  .ongoing-active {
    background-image: url(@/assets/manga/ongoing_active.svg);
  }
  .finished-active {
    background-image: url(@/assets/manga/finished_active.svg);
  }
}
.collection-title {
  width: 100%;
  font-size: 24px;
  margin-bottom: 18px;
  font-weight: bold;
  color: #9FADBD;
}
.title-ongoing {
  color: #c28c28;
}
.title-finished {
  color: #5cb831;
}

.list-enter-active,
.list-leave-active {
  transition: opacity 1s ease-in-out, margin-top 1s  ease-in-out;
  z-index: 500;
  margin-top: 0px;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  z-index: 500;
  margin-top: -100px;
}
</style>
