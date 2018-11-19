import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table'; 
import { SatPopoverModule } from '@ncstate/sat-popover';


export interface User {
  name: string;
} 

const displayValues: User[] = [{name:'AAA'},{name:'BBB'},{name:'CCC'}];

@Component({
  selector: 'app-area-master',
  templateUrl: './area-master.component.html',
  styleUrls: ['./area-master.component.css']
})

export class AreaMasterComponent implements OnInit {
  
  displayedColumns: string[] = ['name'];
  
  
  dataSource = new MatTableDataSource(displayValues);
  constructor() { }

  ngOnInit() {
  }

}
