import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import IUser from '../models/user.model';
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators' 


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersCollection: AngularFirestoreCollection <IUser>
  public isAuthenticated$: Observable<boolean>


  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore
  ) { 
    this.usersCollection = db.collection('user')
    this.isAuthenticated$ = auth.user.pipe(
      map(user => !!user)
    )
  }

 public async createUser(userData: IUser) {
  if(!userData.password) {
    throw new Error("Password was not provided")
  }

  const userCred = await this.auth.createUserWithEmailAndPassword(
    userData.email as string, 
    userData.password as string
    )

if(!userCred.user) {
  throw new Error("User can not be found")
}

 await this.usersCollection.doc(userCred.user.uid).set({
    name: userData.name,
    email:userData.email,
    age: userData.age,
    phone_number: userData.phone_number
  })

await userCred.user.updateProfile({
  displayName: userData.name
})

 }

}