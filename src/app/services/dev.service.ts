import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from
'angularfire2/firestore';
import { Dev } from '../models/dev';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DevService {
   devsCollection: AngularFirestoreCollection<Dev>;
   devs: Observable<Dev[]>;
  constructor(public lax: AngularFirestore) { 
    this.devs = this.lax.collection('devs').valueChanges();
  }

  getDevelopers(){
    return this.devs;
  }
}


