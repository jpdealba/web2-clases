import { Component, ViewChild } from '@angular/core';
import { toJpeg } from 'html-to-image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meme-generator';
  upper: string = "";
  lower: string = "";
  color: string = "";
  size: number = 16;
  dataUrl: string = "https://img2.rtve.es/imagenes/fotografia-se-convirtio-meme-conocido-como-disaster-girl/1620920852564.jpg";
  @ViewChild("imageElement") imageElement: any;

  doOnChange(target: any) {
    const reader = new FileReader()
    reader.onload = (e:any) => {
      console.log("archivo cargado", e)
      this.dataUrl = e.srcElement.result
    };

    reader.readAsDataURL(target.files[0])

  }

  saveImage() {
    const node: any = document.getElementById("meme")
    toJpeg(node).then((e: any) => {
      var link = document.createElement('a');
      link.download = 'new-meme.jpeg';
      link.href = e;
      link.click();
    })
  }

}
