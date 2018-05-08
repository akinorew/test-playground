import * as angular from 'angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';
import {downgradeModule} from "@angular/upgrade/static";
import {PlaygroundCommonModule} from "../playground.common.module";

export const ng2BootstrapFn = (extraProviders: any[]) =>
  platformBrowserDynamic(extraProviders).bootstrapModule(PlaygroundModule);

angular.bootstrap(document.body, [
  downgradeModule(ng2BootstrapFn),
  PlaygroundCommonModule.ModuleName
]);

PlaygroundModule
  .configure({
    selector: 'app-root-playground',
    overlay: false,
    modules: [
      PlaygroundCommonModule
    ]
  });
