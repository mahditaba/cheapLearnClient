import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { Data } from '../../../data';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;
  data: any = Data;
  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userService: UserService,
    private router: Router,
    private themeService: NbThemeService,
    private analyticsService: AnalyticsService) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');

    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
    let search: any = document.querySelector('input.search-input');
    let searchInfo: any = document.querySelector('span.info');
    search.style.textAlign = 'right';
    search.style.fontFamily = 'vazirFont';
    searchInfo.style.fontFamily = 'vazirFont';
    search.placeholder = 'دنبال چی میگردی ؟';
    searchInfo.textContent = 'برای شروع دکمه اینتر را فشار دهید';
  }
}
