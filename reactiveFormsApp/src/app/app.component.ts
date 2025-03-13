import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userForm: FormGroup;//Declare for easier accessebility
  title: string = 'Rective forms';

  constructor(private formBuilder: FormBuilder)
  { 
    //Every component related to this form must be inside the userForm group
    //Creates a form group with none nullable inputs
    this.userForm = this.formBuilder.group({
      name: ['',Validators.required],
      email: ['', [Validators.required, Validators.email ]],
      
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

  // this method will return the current state of our phoneNumbers array should we need to add or remove
  get getPhoneNumbers(): FormArray
  {
    return this.userForm.get('phoneNumbers') as FormArray;
  }

  //Add phoneNumber
  addPhoneNumber(): void
  {
    //new field on our form
    this.getPhoneNumbers.push(this.formBuilder.control('',Validators.required));
   
  }

  //Remove the selected field from our form
  removePhoneNumber(index: number): void
  {
    this.getPhoneNumbers.removeAt(index);
  }

  onSubmit(): void
  {
    if(this.userForm.valid){
      console.log(this.userForm.value);
    }else 
    {
      console.log('Invalid form');
    }
  }
}
