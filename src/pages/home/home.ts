import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  image = 'button.png';
  runAudio = false;
  constructor(public navCtrl: NavController, public nativeAudio: NativeAudio) {

  }

  playSound() {
    this.image = 'button_click.png';
    if (this.runAudio) {
      this.nativeAudio.stop('uniqueId1');
    }
    this.nativeAudio.preloadSimple('uniqueId1', 'assets/audio/twa.mp3');
    this.nativeAudio.play('uniqueId1');
    this.runAudio = true;
    setTimeout(() => {
      this.image = 'button.png';
      this.runAudio = false;
     }, 2000);
  }

}
