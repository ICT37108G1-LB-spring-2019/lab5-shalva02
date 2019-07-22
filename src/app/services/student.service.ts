import { Injectable } from "@angular/core";
import { IStudent } from "../models/student";

@Injectable({
  providedIn: "root"
})
export class StudentService {
  constructor() {}

  private Student: IStudent[] = [
    {
      id: 1,
      firstName: "Nicole",
      lastName: "Aniston",
      perNO: 123123123
    },
    {
      id: 2,
      firstName: "Lana",
      lastName: "Rhoades",
      perNO: 123123123
    }
  ];

  getStudentList(): IStudent[] {
    return this.Student;
  }

  addStudent(student: IStudent) {
    if (student) {
      student.id = this.Student[this.Student.length - 1].id++;
      this.Student.push(student);
    }
  }

  deleteStudent(student: IStudent) {
    if (student) {
      let indexOfStudent = this.Student.findIndex(el => el.id === student.id);
      if (indexOfStudent !== -1) {
        this.Student.splice(indexOfStudent, 1);
      }
    }
  }

  updateStudent(student: IStudent) {
    if (student) {
      let indexOfStudent = this.Student.findIndex(el => el.id === student.id);
      if (indexOfStudent !== -1) {
        this.Student[indexOfStudent] = student;
      }
    }
  }
}
