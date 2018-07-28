import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { DevService } from '.././services/dev.service';
import { trigger,transition,query,style,stagger,animate,keyframes }
from '@angular/animations'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter', 
        [
          style({ opacity: 0, transform: 'translateY(-35px)' }),
          stagger('50ms', 
          animate('550ms ease-out',
        style({ opacity: 1, transform: 'translateY(0px)'})))
        ], {optional: true}),
        query(':leave', animate('50ms', style({ opacity: 0 })),{optional: true})
      ])
    ]) 
  ]
})
export class UsersComponent implements OnInit {
  
  users$: object;

  constructor(private data: DataService, dev: DevService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    );
    console.log('run run run');
  }

}
