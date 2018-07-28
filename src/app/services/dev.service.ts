import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from
'angularfire2/firestore';
import { Dev } from '../models/dev';
@Injectable({
  providedIn: 'root'
})
export class DevService {
   devsCollection: AngularFirestoreCollection<Dev>

  constructor(public lax: AngularFirestore) { }
}


