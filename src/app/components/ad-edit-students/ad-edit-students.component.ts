import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ad-edit-students',
  templateUrl: './ad-edit-students.component.html',
  styleUrls: ['./ad-edit-students.component.scss']
})
export class AdEditStudentsComponent {
  userForm: FormGroup;
  constructor(private form_builder: FormBuilder){
    this.userForm = this.form_builder.group({
      firstname:'',
      lastname:'',
      email:'',
      studentId: '',
      codeforces:'',
      codechef:'',
      atcoder:''
    })
  }

  onFormSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
    }
  }

}
