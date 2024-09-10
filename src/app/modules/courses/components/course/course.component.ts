import { ICourse } from '../../../../types/course';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent {
  @Input() public course: ICourse = {} as ICourse;
  @Output() public edit: EventEmitter<ICourse> = new EventEmitter<ICourse>();
  @Output() public delete: EventEmitter<ICourse> = new EventEmitter<ICourse>();
  public editCourse(): void {
    this.edit.emit(this.course);
  }

  public deleteCourseConfirmDialog(): void {
    this.delete.emit(this.course);
  }
}
