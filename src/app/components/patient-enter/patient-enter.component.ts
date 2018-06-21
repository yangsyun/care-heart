import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-patient-enter',
  templateUrl: './patient-enter.component.html',
  styleUrls: ['./patient-enter.component.scss']
})
export class PatientEnterComponent implements OnInit {

  showTable = false;

  sqlTableHeaders = [];

  data;

  flag00 = true;
  flag01 = false;

  selectedType;

  @Input()
  type;
  constructor(private router: Router, private router1: ActivatedRoute) { }

  ngOnInit() {
    this.router1.params.subscribe(params => {
      this.selectedType = params['type'];
      this.showContent(parseInt(this.selectedType));
    });
    this.showTable = true;
  }

  showContent(type) {
    this.initFlag();
    switch (type) {
      case 0: {
        this.flag00 = true;
        break;
      }
      case 1: {
        this.flag01 = true;
        break;
      }
    }


  }

  initFlag() {
    this.flag00 = false;
    this.flag01 = false;
  }

  getStyle(flag) {
    if (flag) {
      return {
        background: '#ccc'
      };
    }
  }


  getStyles() {
    const result = (this.sqlTableHeaders.length * 150 + 2) + 'px';
    return {
      width: result
    };
  }

  
}
