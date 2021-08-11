import { AppPipeModule } from './../shared/pipe/app-pipe.module';
import { StarModule } from './../shared/component/star/star.module';
import { CourserListComponent } from './course-list.component';
import { NgModule } from "@angular/core";
import { CourseInfoComponent } from './course-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CourserListComponent,
    CourseInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    AppPipeModule,
    RouterModule.forChild([
       {
        path: 'courses', component: CourserListComponent
       },
       {
        path: 'courses/info/:id', component: CourseInfoComponent
       }
    ])

  ]
})

export class CourseModule {

}
