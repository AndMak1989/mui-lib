// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MuiTabComponent } from './components';
import { MuiTabsContainer } from './containers';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [
      MuiTabComponent,
      MuiTabsContainer
    ],
    exports: [
      MuiTabComponent,
      MuiTabsContainer
    ]
})
export class MuiTabsModule { }
