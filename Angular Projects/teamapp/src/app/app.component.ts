import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage = "";
  numberOfTeams: number | "" = "";
  teams: string[][] = [];

  onInput(member: string){
    this.newMemberName = member;
    
  }

  onNumberOfTeamsInput(value: string){
    
    this.numberOfTeams = Number(value)
  }

  generateTeams(){
    
    if (!this.numberOfTeams || this.numberOfTeams <=0){
      this.errorMessage = "Number of teams must be a whole number greater than 0";
      return;
    }

    if(this.members.length < this.numberOfTeams){
      
      this.errorMessage = "Not enough members to form that number of teams";
      return;
    }

    this.errorMessage = "";
    const allMembers = [...this.members];

    while (allMembers.length) {
      console.log('Helo');
      for (let i=0; i<this.numberOfTeams; i++){
        const randomIndex = Math.floor(Math.random() * allMembers.length)
        const member = allMembers.splice(randomIndex, 1)[0];

        if (!member) break;

        if (this.teams[i]){
          this.teams[i].push(member);
        }
        else {
          this.teams[i] = [member];
        }
      } //End of for loop
    } //End of while loop
    this.members = [];
    this.numberOfTeams = "";
  }

  addMember(){
    if(!this.newMemberName){
      this.errorMessage = "Name can not be empty";
      return
    }
    this.errorMessage = "";
    this.members.push(this.newMemberName);
    this.newMemberName = "";
    
  }

}
