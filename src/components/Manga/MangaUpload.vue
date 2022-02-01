<template>
  <div :id="'mangaCollectionCreator_'+collectionId" :class="manga.edit ? 'collection-edit pb-2' : 'collection'" class=" flex flex-wrap">
    <input v-if="manga.edit" type="text" class="collection-title-input" v-model="mangaTitle" @change="updateTitle">
    <p v-if="!manga.edit" class="collection-title">{{mangaTitle}}</p>
    <!--NEW IMG HERE-->
    
    <div 
    v-for="(z, i) of mangaCollection.img"
            :key="`key-${i}`"
            :id="'mangaDiv_'+collectionId+z.id" :class="z.file.length>0 ? 'manga' : 'invisible'"> 
      <img :id="'mangaImg_'+collectionId+z.id" class="manga-size" :src="z.file.length>0 ? z.file : ''"> 
      <div :id="'bind_'+collectionId+z.id" class="deleteManga invisible" @click="removeSelf(z)">x</div>
    </div>

    <div v-if="manga.edit"  :id="'mangaInsert_'+collectionId" :class="manga.edit ? 'manga-edit' : 'manga'">
      <div>
        <label :for="'manga-upload_'+this.collectionId" class="manga-upload">
          <input :id="'manga-upload_'+collectionId" type="file" @change="previewManga">
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
    <div v-if="manga.edit" class="collection-manga-btn flex">
      <div @click="createCollection()" class="text-center btn">Create Collection</div>
      <div @click="deleteCollection()" class="text-center btn">Delete Collection</div>
    </div>
  </div>
</template>

<script>
import manga from "@/manga";
import data from "@/data";
import { doc, db, setDoc, getStorage, deleteObject, updateDoc } from "@/firebase";
import { storage, ref, uploadBytes, getDownloadURL} from "@/firebase";

function removeSelf(id) {
  console.log(1);
  document.getElementById("mangaDiv_" + id).remove();
  let s = (element) => element.id == id;
  let index = this.newMangaCollection.img.find(s);
  this.newMangaCollection.img.splice(index);
}

export default {
  name: "mangaUpload",
  props: {
    mangaCollection: Object,
  },
  data() {
    return {
      //EPICIMG
      manga,
      data,

      collectionId: this.mangaCollection.title.replace(/\s/g, '').replace(/[^a-zA-Z ]/g, ""),
      mangaTitle: this.mangaCollection.title,
      collectionTitle: "",
      hideManga: true,
      r_mangaImg: null,
      mangaImg: null,
      mangaLoaded: false,
      newMangaCollection: this.mangaCollection,
    }
  },
  methods: {
    dummy() {},
    removeSelf: async function(z){
      try {
        document.getElementById("mangaDiv_" + this.collectionId + z.id).remove();
        
        for (var i = this.newMangaCollection.img.length - 1; i >= 0; --i) {
            if (this.newMangaCollection.img[i].id == z.id) {
                this.newMangaCollection.img.splice(i,1);
            }
        }
        console.log(this.mangaCollection.title);
        let updateRef = doc(db, "users", data.id, "mangaCollection", this.mangaCollection.title);
        
        await updateDoc(updateRef, {
          img: this.newMangaCollection.img
        });

        let storage = getStorage();
        const desertRef = ref(storage, z.place);
        await deleteObject(desertRef);
        console.log("Image: " + z.place + " deleted!");
      }
      catch(e) {
        console.error("Error:" + e);
      }
    },
    updateTitle() {
      this.newMangaCollection.title = this.mangaTitle;
    },
    bindingFunction(id) {
      document.getElementById('bind_'+id).onclick = function() {
        removeSelf(id);
      };
    },
    previewManga(event) {
      let img = document.getElementById("mangaID_"+this.collectionId);
      this.r_mangaImg = img.src;
      this.mangaImg = event.target.files[0]; 
      this.hideManga = false;
      img.src = URL.createObjectURL(event.target.files[0]);
      this.mangaLoaded = true;
    },
    mangaNO() {
      let img = document.getElementById("mangaID_"+this.collectionId);
      img.src = this.r_mangaImg;
      this.hideManga = true;
      this.mangaLoaded = false;
    },
    mangaYES() {
      let url = URL.createObjectURL(this.mangaImg);
      let mangaImages = this.newMangaCollection.img;
      let l = this.newMangaCollection.title.replace(/\s/g, '').replace(/[^a-zA-Z ]/g, "") + mangaImages.length;
      document.getElementById("mangaInsert_"+this.collectionId).insertAdjacentHTML("beforebegin", 
      '<div id="mangaDiv_'+l+'" class="manga-edit">' +
      '<img id="mangaImg_'+l+'" class="manga-size-edit" src="'+url+'">' +
      '<div id="bind_'+l+'" class="deleteManga">x</div>'+
      '</div>'
      );
      this.bindingFunction(l);
      let place = "images/" + "manga/" + data.username + "/collections/" + this.newMangaCollection.title + "/" + this.mangaImg.name;
      mangaImages.push({"id": l ,"place": place ,"file": this.mangaImg});
      let img = document.getElementById("mangaID_"+this.collectionId);
      img.src = '';
      this.hideManga = true;
      this.mangaLoaded = false;
    },
    async createCollection() {
      try {
        for (let el of this.newMangaCollection.img) {
          let imageName = "images/" + "manga/" + data.username + "/collections/" + this.newMangaCollection.title + "/" + el.file.name;
          const storageRef = ref(storage, imageName);
          await uploadBytes(storageRef, el.file);
          console.log("Image " + imageName + " uploaded!");
          let url = await getDownloadURL(ref(storage, imageName));
          el.file = url;
        }
        console.log(this.newMangaCollection.img);
        await setDoc(doc(db, "users/"+data.id+"/mangaCollection/", this.mangaTitle), {
          title: this.mangaTitle,
          img: this.newMangaCollection.img,
        });

        for (let el of this.newMangaCollection.img) {
          document.getElementById("mangaImg_"+el.id).src = el.file;
        }
        console.log("Added manga collection!");

      } catch (e) {
        console.error("Error: ", e);
      }
    },
  },
}
</script>

<style lang="scss" scoped>
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
  .collection-title-input {
    transition: 0.25s; 
    background-color: #151F2E;
    border-radius: 24px;
    margin: 8px;
    padding-left: 16px;
    width: 100%;
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
  }
  .manga-edit {
    transition: 0.5s;
    cursor: pointer;
    width: 140px;
    margin: 16px;
    height: 210px;
    position: relative;
    .manga-size-edit {
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
      height: 200px;
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
      .manga-hide {
        height: 0px;
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
  .btn {
    transition: .5s;
    width: 150px;
    background-color: rgba(35,38,67,.5);
    box-shadow: 0px 0px 8px -2px #0b1622b9;
    border-radius: 16px;
    color: #EDF1F5;
    margin: 0px 8px 8px 8px;
    padding: 4px 0px 4px 0px;
    &:hover {
      box-shadow: 0px 0px 10px -2px #0b1622;
      background-color: #030b16;
      color: #9FADBD;
      cursor: pointer;
    }
  }
}
.collection-title {
  width: 100%;
  font-size: 24px;
  margin-bottom: 18px;
  font-weight: bold;
  color: #9FADBD;
}
</style>
