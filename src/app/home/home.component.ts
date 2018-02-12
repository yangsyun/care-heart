import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  currentPic = 0;

  data = [];

  constructor(private router: Router, public http: Http) {
    setInterval(() => {
      const id = (this.currentPic + 1) % 4;
      this.currentPic = id;
    }, 3000 );
  }
  changebanner(id) {
    console.log(id);
    this.currentPic = id;
  }


  ngOnInit() {
  }

  gotoDoctor() {
    this.router.navigateByUrl('/doctor-enter/0');
  }
  gotoPatient() {
    this.router.navigateByUrl('/patient-enter/0');
  }





}
