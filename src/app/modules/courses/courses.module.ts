import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CardModule } from 'primeng/card';
import { CoursesComponent } from './courses.component';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from './pipes/duration.pipe';
import '@angular/common/locales/global/ru';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { HightlightBorderDirective } from './directives/hightlight-border.directive';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AddEditCourseFormComponent } from './components/add-edit-course-form/add-edit-course-form.component';
import { CalendarModule } from 'primeng/calendar';
import { TagModule } from 'primeng/tag';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AuthorsComponent } from './components/authors/authors.component';
@NgModule({
  declarations: [
    CourseComponent,
    CoursesListComponent,
    BreadcrumbsComponent,
    AddCourseComponent,
    CoursesComponent,
    DurationPipe,
    FilterPipe,
    OrderByPipe,
    HightlightBorderDirective,
    AddEditCourseFormComponent,
    AuthorsComponent,


  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    BreadcrumbModule,
    InputTextModule,
    FormsModule,
    ConfirmDialogModule,
    CalendarModule,
    InputNumberModule ,
    TagModule,
    InputTextareaModule
    
  ],
  exports: [
    [CoursesComponent],
    [ButtonModule]
  ]
})
export class CoursesModule { }
