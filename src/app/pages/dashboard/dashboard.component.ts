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
      padding: 0;
      font-size: 75px;
    }

    header {
      position: relative;
      height: 300px;
      background-image: linear-gradient(90deg, #f1dd28, #26d7ff);
    }
    
    h1 {
      padding: 100px 0;
      font: 44px "Arial";
      text-align: center;
    }
    
    header h1 {
      color: white;
    }
    
    svg {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100px;
    }
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
