## A full featured tab component for Angular 9+.

If you like this, support the project by starring it!


## Example
To install the library:
```
npm install @makand1989/mui-tabs
```

Include the library into your app module-
```
import {MuiTabsModule} from "@makand1989/mui-tabs";
```

Add it to your @NgModule imports-
```
@NgModule({
  imports
    BrowserModule
    ...,
    ...,
    MuiTabsModule
  ],
  declarations: [...],
  ...
})
```

## Usage
```
<tabs>
  <tab tabTitle="Fist Tab">
    I am the fist content
  </tab>
  <tab tabTitle="Second Tab">
    I am the second content
  </tab>
<tabs>
```

## Options
* `tabTitle` (applicable to: `tab`, property): To set the title of that tab (required).
* `active` (applicable to: `tab`, property): To set any tab as by default active -
  Usage:
  ```
  <tabs>
    <tab tabTitle="First tab">
      I am the fist content
    </tab>
    <tab tabTitle="Second" active="true">
      I am the second content
    </tab>
  <tabs>
  ```
* `disabled` (applicable to: `tabs`, property): To set the tabs disabled.
  Usage:
  ```
  <tabs disabled="true">
    <tab tabTitle="First tab">
      I am the fist content
    </tab>
    <tab tabTitle="Second" active="true">
      I am the second content
    </tab>
  <tabs>
  ```
* `currentTabChange` (applicable to: `tabs`, event): Notifies every time the tab is switched with the tab component object.
  Usage:
  ```
  <tabs (currentTabChange)="notifyMe($event)">
    <tab tabTitle="First tab">
      I am the fist content
    </tab>
    <tab tabTitle="Second" active="true">
      I am the second content
    </tab>
  <tabs>
  ```
