import { Component } from '@angular/core';
import { Api } from '../../api';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
    .vazir-font {
      font-family: vazirFont;
    }
    .input-danger:focus {
      border-color: #ff386a;
    }
    .input-danger {
      border-color: #ff386a;
    }
    .ng-touched.input-success:focus {
      border-color: #00d977;
    }
    .ng-touched.input-success {
      border-color: #00d977 !important;
    }
    .drtl {
      direction: rtl
    }
    .main-text-header {
      font-family: adobeShinFont;
      margin-top: 19px;
      font-size: 75px;
    }
    .course-image { transition: all .5s ease-in-out;border-radius: 5px; margin-bottom: 5px; }
    .course-image:hover { transform: scale(1.05); border-radius: 5px; }
  `]
})
export class DashboardComponent {

  courseList: any[];

  constructor() {
    // Api.getCourses((response) => {
    //   this.courseList = response;
    // })
  }
}
