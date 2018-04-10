import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(db: AngularFireDatabase,
              private afAuth: AngularFireAuth) {

              afAuth.auth.onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
        } else {
            window.location.href = '#/login';
        }
    })
    }
  ngOnInit() {
  }

}
