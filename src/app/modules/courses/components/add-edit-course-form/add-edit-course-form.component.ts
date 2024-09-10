import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from '../../../../types/course';
import { CoursesService } from '../../services/courses.service';
@Component({
  selector: 'app-add-edit-course-form',
  templateUrl: './add-edit-course-form.component.html',
  styleUrl: './add-edit-course-form.component.scss'
})
export class AddEditCourseFormComponent {
  constructor( private readonly coursesService: CoursesService){}
  @Input() min: any;
  @Output() minutes: EventEmitter<any> = new EventEmitter<any>();
  public id: any;
  public title: any;
  public description: any;
  public creationDate: any;
  public duration: any;

  public sendMinutes():void {
      this.minutes.emit(this.min);
  }
  
  public saveCourse():void {
      console.log('Course Saved!');
      let newData: ICourse = {
        id: this.id,
        title: this.title,
        creationDate: this.creationDate,
        duration: this.duration,
        description: this.description,
        topRated: false
      };
      if (this.id != null) {
        this.coursesService.updateItem(this.id, newData)
      } else {
        this.coursesService.createCourse(newData);
      }
     
    }
    public cancelChanges():void {
      console.log('Course was not saved');
      
    }
  }




