import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation,GeolocationPosition } from '@capacitor/geolocation';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  capturedImage: string [] =[];
  currentPosition: GeolocationPosition | null = null;
  constructor() {}
  
  async takePicture() {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });

    if (image.dataUrl) {
      this.capturedImage.push(image.dataUrl);
    }  }

  deletePicture(index: number) {
    this.capturedImage.splice(index,1);
  }
  async getGeolocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
            this.currentPosition = position;
    } catch (error) {
      console.error('Error getting geolocation:', error);
    }
  }

}
