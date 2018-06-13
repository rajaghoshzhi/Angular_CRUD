import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getDate();
    this.resetForm();
  }
  onSubmit(employeeForm: NgForm){ 
    if(employeeForm.value.$key == null){ 
      // this is insert operation
      this.employeeService.insertEmployee(employeeForm.value);     
    }else{
      //this is update operation
      this.employeeService.updateEmployee(employeeForm.value);
    }
    // this.employeeService.getDate();
    this.resetForm(employeeForm);  
  }
  resetForm(employeeForm? : NgForm){ 
    
    if(employeeForm != null){
      employeeForm.reset();
      this.employeeService.selectedEmployee = {
        $key: null,
        name: "", 
        position: "",     
        office: "",      
        salary: 0
      }
    }
    
  }
}
