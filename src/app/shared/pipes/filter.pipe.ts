import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../../types/course';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses: ICourse[], search: string): ICourse[] {
    if (search.length === 0) return courses
    return courses.filter(c=>c.title.toLowerCase().includes(search.toLowerCase()))
  }

}
