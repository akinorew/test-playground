import { sandboxOf } from 'angular-playground';
import {AppComponent} from './app.component';

export default sandboxOf(AppComponent, {
  declarations: [
  ],
  imports: [
  ]
})
  .add('basic', {
    template: `<div>Test</div>`
  });
