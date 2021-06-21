import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";



interface myStruct {
  statistics;
  Pu;
}

@Component({
  selector: 'app-operator-dashboard',
  templateUrl: './operator-dashboard.component.html',
  styleUrls: ['./operator-dashboard.component.scss']
})



export class OperatorDashboardComponent implements OnInit {
  bigChart = []
  machineName: string;
  displayedColumns: string[] = ['C1', 'C2'];
  Path = 'assets/Red.svg';
  avaiableMachines = [
    "Machine - 1",
    "Machine - 2",
    "Machine - 3"
  ]
  id;
  recivedData;


  notConnectedState(){
      this.bigChart = [0, 0];
      this.Path = 'assets/Red.svg';
      this.ELEMENT_DATA[0].C2 = "Select a Machine"
      this.ELEMENT_DATA[1].C2 = "Select a Machine"
      this.ELEMENT_DATA[2].C2 = "Select a Machine"
      this.ELEMENT_DATA[3].C2 = "Select a Machine"
  }

  ngOnInit() {
    this.notConnectedState();
    this.updateData();
    this.id = setInterval(() => {
      this.updateData(); 
    }, 1000);
  }

  ELEMENT_DATA = [
    { C1: "Machine Name", C2: ""},
    { C1: "Machine status", C2: ""   },
    { C1: "Date", C2: "" },
    { C1: "Predicted Label", C2: "" }
  ];
  dataSource = this.ELEMENT_DATA;

  updateData() {
    // Parameters Sent to server
    let params = new HttpParams().set("machineName", this.machineName)
    if(this.machineName)
      this.http.get('http://localhost:5000', { params: params }).subscribe(data => {
      this.recivedData = data});

    if (this.recivedData)
    {    
      this.bigChart = this.recivedData.Current
      this.Path = 'assets/Red.svg';
      
      this.recivedData.Label
      //this.recivedData.Status
      this.recivedData.UniqueID


      this.ELEMENT_DATA[0].C2 = this.machineName;
      this.ELEMENT_DATA[1].C2 = "Stopped";
      this.ELEMENT_DATA[2].C2 = this.recivedData.Date;
      this.ELEMENT_DATA[3].C2 = this.recivedData.PredictedLabel;

    }
    else
      this.notConnectedState();

    /*this.ELEMENT_DATA[0].C2 = this.machineName;
    this.ELEMENT_DATA[2].C2 = this.tempI + 's';
    
    if (this.tempI < this.tempCurrentWave.length){
      this.Path = 'assets/Green.svg';
      this.bigChart = this.tempCurrentWave.slice(0, this.tempI);
      this.tempI = this.tempI + 1;
      this.ELEMENT_DATA[1].C2 = "Running";
      this.ELEMENT_DATA[3].C2 = "False";
    }
    else{
      this.ELEMENT_DATA[1].C2 = "Not Running";
      this.Path = 'assets/Red.svg';
      this.ELEMENT_DATA[3].C2 = "False";
    }*/
  }
  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
    }
    constructor(private http:HttpClient) {
    }
}