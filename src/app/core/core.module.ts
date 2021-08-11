import { RouterModule } from '@angular/router';
import { NavBarComponent } from './component/navbar/nav-bar.component';
import { NgModule } from "@angular/core";
import { Error404Component } from './component/error404/error-404.component'

@NgModule ({
  declarations: [
    NavBarComponent,
    Error404Component
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  exports: [
    NavBarComponent
  ]
})

export class CoreModule {

}
