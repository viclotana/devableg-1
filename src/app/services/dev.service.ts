import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from
'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class DevService {
   devsCollection: AngularFirestoreCollection<Dev>

  constructor(public lax: AngularFirestore) { }
}

interface Dev {
  name?:string;
  twitter?:string;
  github?:string;
  stack?:string;
}
