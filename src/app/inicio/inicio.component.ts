import { iLoggin } from './../extras/loggin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';
import { NewUser } from '../sql/newUser.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router,private sql: NewUser) { }

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
    this.sql.newUser(this.oLoggin).subscribe();
  }

}
