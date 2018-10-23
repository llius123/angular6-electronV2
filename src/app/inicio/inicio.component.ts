import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { iLoggin } from '../extras/interfaces.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [AngularFirestore, AngularFireAuth]
})
export class InicioComponent implements OnInit {

  constructor(private router: Router,private db: AngularFirestore,private auth: AngularFireAuth) { }

  logginForm: FormGroup = new FormGroup({
    usuario: new FormControl(),
    pass: new FormControl()
  })
  ngOnInit() {
  }

  crearFactura(){
    this.router.navigate(["crearFactura"]);
  }

  oLoggin: iLoggin;
  logging(){
    this.oLoggin = {
      usuario: this.logginForm.get('usuario').value,
      contrasenya: this.logginForm.get('pass').value
    }
    this.auth.auth.signInWithEmailAndPassword(this.oLoggin.usuario,this.oLoggin.contrasenya);
    this.auth.auth.onAuthStateChanged(function (user){
      var email = user.email;
      var uid = user.uid;
      console.log(email,uid);
    })
  }
  registrar(){
    this.oLoggin = {
      usuario: this.logginForm.get('usuario').value,
      contrasenya: this.logginForm.get('pass').value
    }
  }
  items: any;
  loggout(){
    this.items = this.db.collection('usuarios');
    console.log(this.items);
  }

}
