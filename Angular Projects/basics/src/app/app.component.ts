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
  images = ['https://picsum.photos/id/1/200/300',
  'https://picsum.photos/id/2/200/300',
  'https://picsum.photos/id/3/200/300'
];
  currentDate = new Date();
  blueClass = false;
  fontSize = 16;


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
