import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {v4 as uuid} from 'uuid'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  isDragover = false;
  isFormVisible = false;
  file: File | null = null;

  constructor(private storage: AngularFireStorage) { }

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
    const clipFileName = uuid()
    const clipPath = `clips/${clipFileName}.mp4`

    this.storage.upload(clipPath, this.file)
    
  }
}
