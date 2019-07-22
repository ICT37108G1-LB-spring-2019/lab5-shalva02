import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { IStudent } from "../models/student";
import { StudentService } from "../services/student.service";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"]
})
export class StudentListComponent {
  students: IStudent[];

  constructor(private student: StudentService) {
    this.students = this.student.getStudentList();
  }
}
