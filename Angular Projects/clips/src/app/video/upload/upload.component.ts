import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {v4 as uuid} from 'uuid'
import { last , switchMap} from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'
import { ClipService } from 'src/app/services/clip.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  isDragover = false;
  isFormVisible = false;
  file: File | null = null;

  alertColor = 'blue'
  showAlert = false
  alertMsg = 'Please wait! your clip is being uploaded'
  inSubmission = false;
  percentage = 0
  showPercentage = false
  uploadState = '';
  user: firebase.User | null = null

  constructor(
    private storage: AngularFireStorage,
    private auth: AngularFireAuth,
    private clipsService: ClipService
    ) { 
      auth.user.subscribe( user => this.user = user)
    }

  ngOnInit(): void {
  }


    uploadTitle= new FormControl('', 
      {validators: 
        [
          Validators.required,
          Validators.minLength(3)
        ]
        , nonNullable: true})

    uploadForm = new FormGroup({
      uploadTitle: this.uploadTitle
    })

  storeFile($event: Event){
  this.isDragover = false

  this.file = ($event as DragEvent).dataTransfer?.files.item(0) ?? null

  if (!this.file || this.file.type !== 'video/mp4'){
    return
  }
  this.uploadTitle.setValue(
    this.file.name.replace(/\.[^/.]+$/, '')
  )
  this.isFormVisible = true

  }

  uploadFile() {
    this.showAlert = true;
    this.alertColor = 'blue'
    this.alertMsg = 'Please wait! your clip is being uploaded'
    this.inSubmission = true
    this.showPercentage = true

    const clipFileName = uuid()
    const clipPath = `clips/${clipFileName}.mp4`

    const task = this.storage.upload(clipPath, this.file)
    const clipRef = this.storage.ref(clipPath)
    task.percentageChanges().subscribe(
      progress => {
        this.percentage = progress as number / 100
      }
    )

    task.snapshotChanges().pipe(
      last(), switchMap(() => clipRef.getDownloadURL())
    ).subscribe({
      next: (url)=>{
        const clip = {
          uid: this.user?.uid as string,
          displayName: this.user?.displayName as string,
          title: this.uploadTitle.value,
          fileName: `${clipFileName}.mp4`,
          url

        }
        this.clipsService.createClip(clip)
        this.alertColor = 'green'
        this.alertMsg = 'Your clip was uploaded successfully'
        this.showPercentage = false
      },
      error: (error) => {
        this.alertColor = 'red'
        this.alertMsg = 'Upload failed. Please make sure your file is not corrupt'
        this.inSubmission = true
        this.showPercentage = false
      }
    })
    
  }
}
