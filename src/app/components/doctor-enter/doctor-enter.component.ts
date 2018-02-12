import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-doctor-enter',
  templateUrl: './doctor-enter.component.html',
  styleUrls: ['./doctor-enter.component.scss']
})
export class DoctorEnterComponent implements OnInit {

  inputSql;
  showTable = false;

  sqlTableHeaders = [];

  data;

  flag00 = true;
  flag01 = false;
  flag02 = false;
  flag03 = false;
  flag04 = false;
  flag05  = false;

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
      case 2: {
        this.flag02 = true;
        break;
      }
      case 3: {
        this.flag03 = true;
        break;
      }
      case 4: {
        this.flag04 = true;
        break;
      }
      case 5: {
        this.flag05 = true;
        break;
      }
    }


  }

  initFlag() {
    this.flag00 = false;
    this.flag01 = false;
    this.flag02 = false;
    this.flag03 = false;
    this.flag04 = false;
    this.flag05 = false;
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

  enter() {
    this.router.navigateByUrl(`extraction-data`);
  }

}
