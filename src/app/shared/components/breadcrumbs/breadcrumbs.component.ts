
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { CoursesService } from '../../../modules/courses/services/courses.service'
import { ICourse } from '../../../types/course';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent implements OnInit {


  
  constructor(
    private readonly coursesService: CoursesService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    ){
      this.id = route.snapshot.params['id'];
      if (this.id != null) {
        this.course = this.coursesService.getItemById(this.id);
        this.items.splice( 0 ,1, ({label: this.course?.title}))
        
      }
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  items: MenuItem[] = [{label: 'Курсы', routerLink: '/courses'}];
  home: MenuItem = {icon: 'pi pi-home'};
  public id: any;
  public course: ICourse | undefined ;




}

