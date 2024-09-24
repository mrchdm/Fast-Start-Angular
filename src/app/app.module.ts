import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CoreModule } from './modules/core/core.module';
import { CoursesModule } from './modules/courses/courses.module';
import { LoginModule } from './modules/login/login.module';
// import { HeaderModule } from './shared/header/header.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import  HeaderComponent  from './shared/components/header/header.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

@NgModule({
  declarations: [
    [AppComponent, FooterComponent, HeaderComponent, NotFoundComponent]
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
 
    ButtonModule, 
    LoginModule,
    BrowserAnimationsModule,
   

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
