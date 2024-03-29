import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-executive-dashboard',
  templateUrl: './executive-dashboard.component.html',
  styleUrls: ['./executive-dashboard.component.scss']
})
export class ExecutiveDashboardComponent implements OnInit {
  tempI = 0;
  bigChart = [1, 1, 1]

  ELEMENT_DATA = [
    { C1: "Floor Name", C2: ""},
    { C1: "MachineBatch Name", C2: ""},
    { C1: "Machine Name", C2: ""},
    { C1: "Machine status", C2: ""   },
    { C1: "Time of Running", C2: "" },
    { C1: "Fault Occur", C2: "" }
  ];
  
  machineName: string;
  machineBatch: string;
  floorName: string;
  displayedColumns: string[] = ['C1', 'C2'];
  dataSource = this.ELEMENT_DATA;
  Path = 'assets/Red.svg';
  avaiableMachines = []

  ngOnInit() {
    this.floorName = "Not Selected"
    this.machineBatch = "Not Selected"
    this.machineName = "Not Selected"
    this.updateData();
    setInterval(() => {
      this.updateData(); 
    }, 1000);
  }
  
  updateData() {
    this.ELEMENT_DATA[0].C2 = this.floorName;
    this.ELEMENT_DATA[1].C2 = this.machineBatch;
    this.ELEMENT_DATA[2].C2 = this.machineName;
    this.ELEMENT_DATA[3].C2 = "Stopped";
    this.ELEMENT_DATA[4].C2 = '-1s';
    this.Path = 'assets/Red.svg';
    this.ELEMENT_DATA[5].C2 = "False";
  }
  
  ngOnDestroy() {
    
    }
}