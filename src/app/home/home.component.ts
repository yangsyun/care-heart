import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  data = [];


  constructor(private router: Router, public http: Http) {
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
