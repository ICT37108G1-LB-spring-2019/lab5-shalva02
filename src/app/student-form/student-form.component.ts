import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IStudent } from "../models/student";

@Component({
  selector: "app-student-form",
  templateUrl: "./student-form.component.html",
  styleUrls: ["./student-form.component.css"]
})
export class StudentFormComponent implements OnInit {
  @Output() result: EventEmitter<IStudent> = new EventEmitter<IStudent>();

  @Input() editStudent: IStudent;
  @Input() useClear: boolean = false;

  studentForm: FormGroup;
  student: IStudent;

  constructor(f: FormBuilder) {
    this.studentForm = f.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      perNO: ["", Validators.required]
    });
  }

  setStundetValues() {
    if (this.editStudent) {
      let keys = Object.keys(this.studentForm.controls);
      for (let key of keys) {
        if (this.editStudent[key]) {
          this.studentForm.controls[key].setValue(this.editStudent[key]);
        }
      }
    }
  }

  clear() {
    if (this.studentForm.dirty) {
      this.setStundetValues();
    }
    return false;
  }

  submitForm(form: FormGroup) {
    if (form.valid) {
      let controls = form.controls;
      this.student = {
        firstName: controls["firstName"].value,
        lastName: controls["lastName"].value,
        perNO: controls["perNO"].value
      };
      this.result.emit(this.student);
    }
  }

  ngOnInit() {
    this.setStundetValues();
  }
}
