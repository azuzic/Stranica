<template>
  <div class="MO-body-position">
    <div class="MO-data-position">
      <div class="MO-data-relative flex">
        <div class="MO-img-div">
          <carousel :items-to-show="1" :wrapAround="true" class="carousel"> 
            <slide v-for="(z, i) of mangaCollection.img"
              :key="`key-${i}`"
              :id="'mangaShow_'+z.id">
              <img class="MO-img carousel__item" :src="z.file">
            </slide>

            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
        </div>
        <div class="MO-data-div grow">
          <div v-if="mangaDetails.title" class="MO-data-align">

            <div class="deleteManga" @click="$store.state.mangaOpen=false">x</div>
            <p>
              <a v-if="mangaDetails.title_english" :href="mangaDetails.url">{{mangaDetails.title_english}} </a>
              <a v-if="mangaDetails.title_english && (mangaDetails.title || mangaDetails.title_japanese)"> | </a>
              <a v-if="mangaDetails.title" :href="mangaDetails.url">{{mangaDetails.title}} </a>
              <a v-if="mangaDetails.title && mangaDetails.title_japanese"> | </a>
              <a v-if="mangaDetails.title_japanese" :href="mangaDetails.url">{{mangaDetails.title_japanese}}</a>
            </p> 
            <hr class="MO-data-hr"/>

            <div class="flex flex-wrap">
              <div>
                <p class="authors">Authors: <a v-for="(z, i) of mangaDetails.authors"
                :key="`key-${i}`" class="author mr-2" :href="z.url"><u>{{z.name}}</u></a></p>
              </div>
              <div>
                <p class="authors">Volumes: <b v-if="mangaDetails.volumes" class="vol">{{mangaDetails.volumes}}</b> <b v-else class="vol">?</b> </p>
              </div>
              <div>
                <p class="authors">Chapters: <b v-if="mangaDetails.chapters" class="vol">{{mangaDetails.chapters}}</b> <b v-else class="vol">?</b> </p>
              </div>
              <div>
                <p class="authors">Score: <b class="vol">{{mangaDetails.score}}</b> </p>
              </div>
              <div>
                <p class="authors">Status: <b class="vol">{{mangaDetails.status}}</b> </p>
              </div>
              <div>
                <p class="authors">Published: <b class="vol">{{published.string}}</b> </p>
              </div>
              <div>
                <p class="authors">Publishing: <b v-if="mangaDetails.publishing" class="vol">Yes</b> <b v-else class="vol">No</b> </p>
              </div>
            </div>

            <div class="flex flex-wrap grow">
              <div  v-if="mangaDetails.genres != ''">
                <p class="authors">Genres: <a v-for="(z, i) of mangaDetails.genres"
                :key="`key-${i}`" class="author mr-2" :href="z.url"><u>{{z.name}}</u> </a></p>
              </div>
              <div v-if="mangaDetails.themes != ''">
                <p class="authors">Themes: <a v-for="(z, i) of mangaDetails.themes"
                :key="`key-${i}`" class="author mr-2" :href="z.url"><u>{{z.name}}</u> </a></p>
              </div>
            </div>

            <hr class="MO-data-hr"/>
            <p v-if="mangaDetails.synopsis" class="synopsis">Synopsis:</p>
            <p class="synopsis-data">{{mangaDetails.synopsis}}</p>
            
          </div>
          <div v-else class="MO-data-align flex align-center items-center justify-center">
            <div class="deleteManga" @click="$store.state.mangaOpen=false">x</div>
            
            
              <svg role="status" class="inline -mr-4 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#3DB4F2"/>
              </svg>
              <p>Loading...</p> 

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'MangaOpen',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  mounted() {
    this.loadData();
  },
  data() {
    return {
      mangaDetails: "",
      published: "",
    }
  },
  props: {
    mangaCollection: Object,
  },
  methods: {
    loadData() {
      let request = new XMLHttpRequest();
      let self = this;
      if (!this.mangaTitleCheck) {
        request.open('GET', 'https://api.jikan.moe/v3/manga/' + this.mangaCollection.mal_id);
        
        request.onreadystatechange = function () {
          if (this.readyState === 4) {
            self.mangaDetails = JSON.parse(this.responseText);
            self.published = self.mangaDetails.published;
          }
        };

        request.send();
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.MO-body-position {
  z-index: 500;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  .MO-data-position {
    background-color: #151f2ea2;
    backdrop-filter: blur(6px);
    z-index: 600;
    top: 50px;
    width: 100%;
    position: sticky;
    height: calc(100vh - 50px);
    .MO-data-relative {
      position: absolute;
      left: 10%;
      top: 10%;
      height: 80%;
      width: 80%;
      .MO-img-div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 10%;
        .MO-img {
          border-radius: 8px !important;
          height: 91%;
        }
      }
      .MO-data-div {
        position: relative;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .MO-data-align {
          position: absolute;
          top: 20%;
          width: 100%;
          height: 60%;
          margin-left: 32px;
          background-color: #151f2ece;
          overflow-y: auto;
          border-radius: 8px;
          .MO-data-hr {
            border-radius: 32px;
            border-width: 2px;
            margin: 0px 16px;
          }
          & p {
            color: #EDF1F5;
            margin: 8px 32px;
            font-size: 32px;
            & a {
              transition: 0.25s;
              &:hover {
                color: #3DB4F2;
              }
            }
          }
          .title_japanese {
            font-size: 18px;
            margin-top: -8px;
            & a {
              transition: 0.25s;
              &:hover {
                color: #3DB4F2;
              }
            }
          }
          .authors {
            font-size: 16px;
          }
          .vol {
            color: #3DB4F2;
          }
          .author {
            font-size: 12px;
          }
          .synopsis{
            font-size: 16px;
          }
          .synopsis-data{
            font-size: 12px;
          }
        }
      }
    }
  }
}
.carousel {
  z-index: 500;
  background-color: #151F2E;
  border-radius: 8px;
  height: 60%;
  width: 280px;
}

.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}

/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border: 3px solid #3db3f23a;
  border-radius: 32px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  border: 3px solid #3DB4F2;
  border-radius: 32px;
}
</style>

