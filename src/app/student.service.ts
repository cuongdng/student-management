import { Injectable } from '@angular/core';

import { Student, students } from './student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = students;

  getStudents(): Student[] {
    return this.students;
  }

  getStudent(id: string): Student {
    const student = this.students.find((student) => student.id === id)!;
    return student;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  deleteStudent(student: Student): void {
    this.students = this.students.filter((s) => s !== student);
  }

  constructor() {}
}
