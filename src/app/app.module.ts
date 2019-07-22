import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StudentManagmentComponent } from "./student-managment/student-managment.component";
import { StudentItemComponent } from "./student-item/student-item.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { StudentService } from "./services/student.service";
import { StudentFormComponent } from './student-form/student-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentManagmentComponent,
    StudentItemComponent,
    StudentListComponent,
    StudentFormComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: StudentService, useClass: StudentService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
