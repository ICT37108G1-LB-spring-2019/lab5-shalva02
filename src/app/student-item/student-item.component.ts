import { Component, OnInit, Input } from "@angular/core";
import { IStudent } from "../models/student";
import { StudentService } from "../services/student.service";

@Component({
  selector: "app-student-item",
  templateUrl: "./student-item.component.html",
  styleUrls: ["./student-item.component.css"]
})
export class StudentItemComponent implements OnInit {
  @Input() student: IStudent;
  showForm: boolean = false;

  constructor(private std: StudentService) {}

  ngOnInit() {}

  updateStudent(student: IStudent) {
    student.id = this.student.id;
    this.std.updateStudent(student);
  }

  deleteStudent() {
    this.std.deleteStudent(this.student);
  }
}
