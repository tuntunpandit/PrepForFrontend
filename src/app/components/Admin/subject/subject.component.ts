import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent {
  subjectId!: string;
  subjectForm!: FormGroup;
  subjects = ['Angular', 'JavaScript', 'DSA'];

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    // Capture the query param from the URL
    this.route.queryParams.subscribe((params) => {
      this.subjectId = params['id'];
      console.log(`Subject ID: ${this.subjectId}`);
      this.loadSubjectDetails();
    });
  }

  loadSubjectDetails() {
    this.subjectForm?.reset();
    this.subjectForm = this.fb.group({
      subject: [this.subjectId],
      question: ['', Validators.required],
      resources: this.fb.array([]),
    });
  }

  // Getter for accessing the resources array
  get resources() {
    return this.subjectForm.get('resources') as FormArray;
  }

  // Add a new resource input field to the form array
  addResource() {
    this.resources.push(this.fb.control(''));
  }

  // Remove a resource input field from the form array
  removeResource(index: number) {
    this.resources.removeAt(index);
  }

  // Submit the form
  onSubmit() {
    if (this.subjectForm.valid) {
      console.log(this.subjectForm.value);
      this.subjectForm?.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
