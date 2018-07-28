import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from
'angularfire2/firestore';
import { Dev } from '../models/dev';
import { Observable } from '../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class DevService {
   devsCollection: AngularFirestoreCollection<Dev>;
   devs: Observable<Dev[]>;
  constructor(public lax: AngularFirestore) { }
}


