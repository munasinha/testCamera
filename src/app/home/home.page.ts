import { Component } from '@angular/core';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private camera: Camera) { }

  pure_url = 'defalut';
  url = 'https://batsman-app-images.s3.ap-south-1.amazonaws.com/batsman-logos/upload.jpg'; // by default this will load and replaced by captured photo

openCam(){

    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.pure_url = imageData;
      this.url=(<any>window).Ionic.WebView.convertFileSrc(imageData);
      alert("error "+JSON.stringify(this.url))
    }, (err) => {
     // Handle error
     alert("error "+JSON.stringify(err))
    });

  }
}
