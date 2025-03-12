import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userForm: FormGroup;
  title: string = 'Rective forms';

  constructor(private formBuilder: FormBuilder)
  { 
    //Every component related to this form must be inside the userForm group
    //Creates a form group with none nullable inputs
    this.userForm = this.formBuilder.group({
      name: ['',Validators.required],
      Email: ['', [Validators.required, Validators.email ]],
      
      //Nested groups
      address: this.formBuilder.group({
        province: ['',Validators.required],
        postCode: ['', Validators.required]//ToDo: set length and accept number only
      
      }),

      //FormArray
      // .array method only accepts the square brackets since it's a array
      phoneNumbers: this.formBuilder.array([
        this.formBuilder.control('',Validators.required)//no square brackets here or curly brackets
      ])

    });
    
  }
}
