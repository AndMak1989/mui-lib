import { Component, Input } from '@angular/core';

import { MuiTabsContainer } from '../../containers';

@Component({
  selector: 'tab',
  host: {
    '[class.hidden]': '!active',
  },
  templateUrl: './mui-tab.component.html',
  styleUrls: ['./mui-tab.component.scss'],
})
export class MuiTabComponent {
  @Input() active!: boolean;
  @Input() tabTitle!: string;

  constructor(tabs: MuiTabsContainer) {
    tabs.addTab(this);
  }
  getTabTitle() {
    return this.tabTitle;
  }
}
