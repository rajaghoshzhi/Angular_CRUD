import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeListData: any;
  employeeArrList: Employee[];
  constructor( private employeeService: EmployeeService) { }
  


  ngOnInit() {
    // this.employeeArrList = [];
    this.employeeListData = this.employeeService.getDate();
    this.employeeListData.snapshotChanges().subscribe(items => { 
      this.employeeArrList = [];
      items.forEach(ele => {
        var  y = ele.payload.toJSON();
        y["$key"] = ele.payload.key;
        this.employeeArrList.push(y);

      })
    })
  }

  onEdit(emplist: Employee){
    this.employeeService.selectedEmployee = Object.assign({},emplist);
  }
  onDelete(empList: Employee){
    this.employeeService.deleteEmployee(empList);
  }

}
