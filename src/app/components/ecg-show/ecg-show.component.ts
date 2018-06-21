import { Component, OnInit } from '@angular/core';
import '../../../assets/js/external.js'
import * as $ from 'jquery';

declare let callEcgcanvas: {
  erha: (mess: string) => void;
};

@Component({
  selector: 'app-ecg-show',
  templateUrl: './ecg-show.component.html',
  styleUrls: ['./ecg-show.component.scss']
})
export class EcgShowComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // $(document).ready(function() {
      callEcgcanvas.erha('');
    // });

  }

}
