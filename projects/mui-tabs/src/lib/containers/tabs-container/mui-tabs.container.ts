import { Component, Input, EventEmitter, Output } from "@angular/core";

import { MuiTabComponent } from "../../components";

@Component({
  selector: "tabs",
  templateUrl: "./mui-tabs.container.html",
  styleUrls: ["./mui-tabs.container.scss"]
})
export class MuiTabsContainer {
  @Input() disabled!: boolean;
  @Output() currentTabChange = new EventEmitter<MuiTabComponent>();

  ifTabSelected: boolean = false;
  tabs: MuiTabComponent[] = [];

  addTab(tab: MuiTabComponent) {
    this.tabs.push(tab);
	}

  selectTab(tab: MuiTabComponent) {
    this.tabs.forEach(tab => {
      tab.active = false;
    });
    tab.active = true;
    this.currentTabChange.emit(tab);
	}

  isDisabled() {
    if (this.disabled) {
      return "block";
    } else return "none";
	}

  ngAfterViewInit() {
    this.tabs.forEach(tab => {
      if (tab.active) {
        this.selectTab(tab);
        this.ifTabSelected = true;
      }
    });
    if (!this.ifTabSelected) {
      this.selectTab(this.tabs[0]);
    }
  }
}
