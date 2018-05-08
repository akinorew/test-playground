import { Overlay } from '@angular/cdk/overlay';
import * as angular from 'angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {downgradeComponent} from "@angular/upgrade/static";
import {AppComponent} from "./src/app/app.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  entryComponents: [
    AppComponent
  ],
  exports: [
    AppComponent
  ],
  providers: [
    { provide: '$scope', useFactory: i => i.get('$rootScope'), deps: ['$injector']}
  ]
})
export class PlaygroundCommonModule {
  public static ModuleName = 'play';

  constructor(
  ) {
  }

  public ngDoBootstrap() {

  }
}

const ngModule = angular.module(PlaygroundCommonModule.ModuleName, [
]);

ngModule.directive('appRoot', downgradeComponent({ component: AppComponent }) as angular.IDirectiveFactory);
