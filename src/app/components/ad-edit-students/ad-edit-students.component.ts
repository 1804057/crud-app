import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-ad-edit-students',
  templateUrl: './ad-edit-students.component.html',
  styleUrls: ['./ad-edit-students.component.scss']
})
export class AdEditStudentsComponent {
  userForm: FormGroup;
  constructor(private form_builder: FormBuilder,
    private userService: UserServiceService,
    private dialogRef: DialogRef<AdEditStudentsComponent>){
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
      this.userService.addUser(this.userForm.value).subscribe({
        next:(val: any)=>{
          alert('user Added');
          this.dialogRef.close();
        },
        error:(val: any)=>{
          alert('found issues');
        }

      });
    }
  }

}
