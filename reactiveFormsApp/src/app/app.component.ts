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

  constructor(private formBuilder: FormBuilder)
  { 
    //Creates a form group with none nullable inputs
    this.userForm = this.formBuilder.group({
      name: ['',Validators.required],
      Email: ['', Validators.required]
 
    });
    
  }
}
