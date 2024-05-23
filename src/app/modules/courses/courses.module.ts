import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { AddCourseComponent } from './components/add-course/add-course.component';



@NgModule({
  declarations: [
    CourseComponent,
    CoursesListComponent,
    BreadcrumbsComponent,
    AddCourseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
