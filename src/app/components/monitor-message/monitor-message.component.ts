import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-monitor-message',
  templateUrl: './monitor-message.component.html',
  styleUrls: ['./monitor-message.component.scss']
})
export class MonitorMessageComponent implements OnInit {

  constructor(private router: Router, ) { }

  ngOnInit() {
  }
  cancel() {
    this.router.navigateByUrl('monitoring-record');
  }
}
