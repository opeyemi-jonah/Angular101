import { Component } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics';
  name: string = 'opeyemi';
  age: number = 21;
  imgURL = "https://picsum.photos/id/1/200/300";
  imgURLTwo = 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk';
  currentDate = new Date();
  blueClass = false;


  getName() : string {
    return this.name.concat(' jonah');
  }

  getAge(): string {
    return this.age.toString().concat(' years old');
  }
  changeImage(e:KeyboardEvent){
    
   this.imgURL = (e.target as HTMLInputElement).value;
  }

  logImg(event: string){
    console.log(event);
  }

}
