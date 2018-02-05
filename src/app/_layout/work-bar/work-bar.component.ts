import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-work-bar',
  templateUrl: './work-bar.component.html',
  styleUrls: ['./work-bar.component.scss']
})
export class WorkBarComponent implements OnInit {


  flag01 = false;
  flag02 = false;
  flag03 = false;
  flag04 = false;
  flag05 = false;
  flag06 = false;
  flag07 = false;
  flag08 = false;

  @Input()
  type;

  constructor() {
  }

  ngOnInit() {
    this.initFlag(this.type);
  }

  initFlag(type) {
    switch (type) {
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
      case 6: {
        this.flag06 = true;
        break;
      }
      case 7: {
        this.flag07 = true;
        break;
      }
      case 8: {
        this.flag08 = true;
        break;
      }

    }
  }

  getStyle(flag) {
    if (flag) {
      return {
        color: '#fff',
        background: '#42485B',
        borderBottom: '2px solid #1badd8',
        borderRadius: '0'
      };
    }
  }
}
