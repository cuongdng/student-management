import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  constructor(private studentService: StudentService) {}

  onAddSubmit(form: NgForm): void {
    this.studentService.addStudent(form.value);
    alert('This student has been added!');
    form.reset();
  }

  ngOnInit(): void {}
}
