import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { MainComponent } from './components/pages/main/main.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoginComponent } from './components/pages/login/login.component';
import { AuthInterceptor } from './helper/auth.interceptor';
import { BookComponent } from './components/pages/book/book.component';
import { MemberComponent } from './components/pages/member/member.component';
import { StaffComponent } from './components/pages/staff/staff.component';
import { NewBookComponent } from './components/pages/new-book/new-book.component';
import { NewMemberComponent } from './components/pages/new-member/new-member.component';
import { BorrowComponent } from './components/pages/borrow/borrow.component';
import { EditBookComponent } from './components/pages/edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    LoginComponent,
    BookComponent,
    MemberComponent,
    StaffComponent,
    NewBookComponent,
    NewMemberComponent,
    BorrowComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
      {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
