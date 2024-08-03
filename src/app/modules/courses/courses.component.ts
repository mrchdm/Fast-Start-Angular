import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

}
