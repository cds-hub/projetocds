import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { environment } from '../../environments/environment'
import { AngularFirestoreModule,AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  autenticacao: string;
  
  email: string;
  senha: string;

  constructor() { }

  ngOnInit() {
  }

}
