import { Injectable } from '@angular/core';


@Injectable()
export class ImageService{
    visibleImages = [];

    getImages(){
        return this.visibleImages= IMAGES.slice(0);
    }
    getImage(id : number){
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

const IMAGES = [
{"id": 1, "category": "birds",
 "caption": "red bird",
  "url" : "assets/img/bird1.jpg"},
{"id": 2, "category": "birds",
 "caption": "green bird",
  "url" : "assets/img/bird2.jpg"},
{"id": 3, "category": "birds",
 "caption": "blue bird",
  "url" : "assets/img/bird3.jpg"},
{"id": 4, "category": "birds",
 "caption": "white bird",
  "url" : "assets/img/bird4.jpg"},
{"id": 5, "category": "bears",
 "caption": "brown bear",
  "url" : "assets/img/bear1.jpg"},
{"id": 6, "category": "bears",
 "caption": "panda bear",
  "url" : "assets/img/bear2.jpg"},
{"id": 7, "category": "bears",
 "caption": "white bear",
  "url" : "assets/img/bear3.jpg"},
{"id": 8, "category": "bears",
 "caption": "koala",
  "url" : "assets/img/bear4.jpg"},
{"id": 9, "category": "cats",
 "caption": "white cat",
  "url" : "assets/img/cat1.jpg"},
{"id": 10, "category": "cats",
 "caption": "brown cat",
  "url" : "assets/img/cat2.jpg"},
{"id": 11, "category": "cats",
 "caption": "black cat",
  "url" : "assets/img/cat3.jpg"},
{"id": 12, "category": "cats",
 "caption": "kitten",
  "url" : "assets/img/cat4.jpg"},
{"id": 13, "category": "dogs",
 "caption": "brown dog",
  "url" : "assets/img/dog1.jpg"},
{"id": 14, "category": "dogs",
 "caption": "white dog",
  "url" : "assets/img/dog2.jpg"},
{"id": 15, "category": "dogs",
 "caption": "black dog",
  "url" : "assets/img/dog3.jpg"},
{"id": 16, "category": "dogs",
 "caption": "puppy",
  "url" : "assets/img/dog4.jpg"},
]