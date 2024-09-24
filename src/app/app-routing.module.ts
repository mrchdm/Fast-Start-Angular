import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { AuthGuard } from './guards/auth-guard.guard';
import { AddEditCourseFormComponent } from './modules/courses/components/add-edit-course-form/add-edit-course-form.component';
import { CoursesListComponent } from './modules/courses/components/courses-list/courses-list.component';
import LoginComponent from './modules/login/login.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesListComponent, canActivate: [AuthGuard] },
  { path: 'courses/:id', component: AddEditCourseFormComponent, canActivate: [AuthGuard] },
  { path: 'courses/add-course', component: AddEditCourseFormComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
