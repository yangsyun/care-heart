import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  dimoTypes = [];
  settings = {
    actions: {
      add: false,
      delete: false,
      edit: false
    },
    columns: {
      id: {
        title: '姓名'
      },
      dataname: {
        title: '卡号'
      },
      datatype: {
        title: '开始时间'
      },
      name: {
        title: '结束时间'
      },
      chname: {
        title: '医师姓名'
      },
      desc: {
        title: '年龄'
      },
      sex: {
        title: '性别'
      },
      operation: {
        title: '操作'
      },

      // name: {
      //   title: '姓名'
      // },
      // ID: {
      //   title: '卡号'
      // },
      // starttime: {
      //   title: '开始时间'
      // },
      // endtime: {
      //   title: '结束时间'
      // },
      // doctername: {
      //   title: '医师姓名'
      // },
      // age: {
      //   title: '年龄'
      // },
      // sex: {
      //   title: '性别'
      // },
      // operation: {
      //   title: '操作'
      // },

    }
  };
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getJDKA('0').subscribe(response => {
      this.dimoTypes = response.rows;
      this.dimoTypes.forEach(dimType => {
        dimType['dataname'] = 'jkda';
        dimType['datatype'] = 'mysql';
        dimType['operation'] = '预览';
        dimType['sex'] = '男';
      });
    });
  }

  rowSelect() {
    this.router.navigateByUrl(`ecg-diagnosis`);
  }

}
