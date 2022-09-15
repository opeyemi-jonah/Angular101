import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics';
  name: string = 'Opeyemi';
  age: number = 21;
  imgURL = "https://picsum.photos/id/1/200/300";
  value = '';

  getName() : string {
    return this.name;
  }

  getAge(): string {
    return this.age.toString();
  }
  changeImage(e:KeyboardEvent){
    
   this.imgURL = (e.target as HTMLInputElement).value;
  }

}
