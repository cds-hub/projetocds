import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class User {
  email: string;
  password: string;
}

export class RegistroPage  {
  public user:User = new User();
  
  constructor(public navCtrl: NavController, public navParams,public fAuth: AngularFireAuth){
  }

  async register(){
    try {
      var r = await this.fAuth.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
     if (r) {
      console.log("registrado com sucesso");
       // this.navCtrl.setDirection('LoginPage');
      }

    } catch (err) {
console.error(err);
    }
  }
}
    
