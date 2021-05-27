import { Component, OnInit, Input,  OnChanges, SimpleChanges  } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})

export class AreaComponent implements OnChanges {

  chartOptions: {};
  @Input() data: any = [];
  @Input() varName: string;
  
  bigChart = [{
    name: 'Current Profile',
    data: []}];

   ngOnChanges(changes: SimpleChanges) {
      if (changes["data"])
        this.bigChart[0].data = changes["data"].currentValue
      if (changes["varName"])
        this.varName = changes["varName"].currentValue


        this.chartOptions = {
          chart: {
            type: 'area'
          },
          title: {
            text: 'Current Waveform'
          },
          subtitle: {
            text: this.varName //get this from server
          },
          tooltip: {
            split: true,
            valueSuffix: 'amps'
          },
          credits: {
            enabled: false
          },
          exporting: {
            enabled: true,
          },
          series: this.bigChart
        };
    
        HC_exporting(Highcharts);
    
        setTimeout(() => {
          window.dispatchEvent(
            new Event('resize')
          );
        }, 300);
  }

  Highcharts = Highcharts;
  constructor() { }
  ngOnInit() {  // make new function in its place which gets data from server every 5 secs
    
  }

}
