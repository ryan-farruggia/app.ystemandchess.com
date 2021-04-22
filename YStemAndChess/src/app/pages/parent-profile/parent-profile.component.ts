import { Component, OnInit } from '@angular/core'; 
import { STUDENTS } from './mock-students';

@Component({
  selector: 'app-parent-profile',
  templateUrl: './parent-profile.component.html',
  styleUrls: ['./parent-profile.component.scss']
})
export class ParentProfileComponent implements OnInit {
  students = STUDENTS;
  selectedStudent?: string;

  onSelect(student: string): void {
    this.selectedStudent = student;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
