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
  slides = [
    {image: '/assets/images/1.jpg'},
    {image: '/assets/images/2.jpg'},
    {image: '/assets/images/3.jpg'},
    {image: '/assets/images/4.jpg'}
  ];
  noWrapSlides = false;

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
