export default {
  mode: false,
  guitarPictures: [
    {
      id: 0,
      name: "",
      text: "Prednju",
      uploaded: false,
      url: "",
    },
    {
      id: 1,
      name: "",
      text: "Stražnju",
      uploaded: false,
      url: "",
    },
    {
      id: 2,
      name: "",
      text: "Bočnu desnu",
      uploaded: false,
      url: "",
    },
    {
      id: 3,
      name: "",
      text: "Bočnu lijevu",
      uploaded: false,
      url: "",
    },
    {
      id: 4,
      name: "",
      text: "Serijski broj",
      uploaded: false,
      url: "",
    },
    {
      id: 5,
      name: "",
      text: "Glavu gitare",
      uploaded: false,
      url: "",
    },
  ],
  checkIfUploaded(){
    return this.guitarPictures.every(picture => !picture.uploaded);
  },
  resetData: function (){
    this.guitarPictures.forEach(picture => picture.uploaded = false);
    this.guitarPictures.forEach(picture => picture.url = "");
    this.guitarPictures.forEach(picture => picture.name = "");
    this.mode = false;
  }
};
