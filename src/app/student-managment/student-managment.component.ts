import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IStudent } from "../models/student";
import { StudentService } from "../services/student.service";

@Component({
  selector: "app-student-managment",
  templateUrl: "./student-managment.component.html",
  styleUrls: ["./student-managment.component.css"]
})
export class StudentManagmentComponent implements OnInit {
  student: IStudent;

  constructor(private std: StudentService) {}
  addStudent(student: IStudent) {
    this.std.addStudent(student);
  }

  ngOnInit() {}
}
