import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAzwXuN9_AeRT_toKVOFJK_c1Sl5iBxfhk",
      authDomain: "recipe-book-ng5-jack.firebaseapp.com",
    })

  }
  // loadedFeature: string = 'shopping-list';
  // loadedFeature: string = 'recipe';
  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  //
  // }
}
