import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})
export class AddCourseComponent {

  course = ''
  public findCourse(): void {
    console.log(this.course)
  }

}
