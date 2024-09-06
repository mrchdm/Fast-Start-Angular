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
import { FooterComponent } from './shared/footer/footer.component';
import  HeaderComponent  from './shared/header/header.component';

@NgModule({
  declarations: [
    [AppComponent, FooterComponent, HeaderComponent]
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
