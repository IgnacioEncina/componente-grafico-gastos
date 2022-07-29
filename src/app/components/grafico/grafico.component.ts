
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, Tooltip } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import  { Data }  from '../../../data';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
          grid: {display: false, borderWidth: 0},
          title: {display:false},
          
      },
      y: {
        display: false
        
      },
      
      
    },
    plugins: {
      title: {display: false},
      legend: {
        display: false,
      },
      datalabels: {
        display: false
      },
      tooltip: {
        enabled: true,
        position: 'nearest',
        caretPadding: -27,
        caretSize: 0,
        displayColors: false,
        yAlign: 'top',
        xAlign: 'center',
        boxWidth: 0,
        callbacks: {
            title: function(context) {
                let label = '';
                return label;
            },
            
        }
      },
      
    },
    elements: {
      bar: {
        borderSkipped: false,
      }
    },
    
  };

  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public hoy: string = new Date().toDateString().slice(0,3).toLowerCase();
  
  public barChartData: ChartData<'bar'> = {
    labels: [ ],
    datasets: [
      { data: [  ]
      }
    ],
    
  };
  

  

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }

  constructor( public data: Data ) { 
    
    console.log(data);
  }

  ngOnInit(): void {
    this.colorDia( this.hoy );
  }

  colorDia( hoy: string) {
    const dias = this.data.data;
    const dia = [];
    const amount = [];
    const degra = [];
    const colorDia = [];
    if(dias != undefined){
      for (let index = 0; index < dias.length; index++) {
        dia.push(dias[index].day);
        amount.push(dias[index].amount);
        if ( hoy === dias[index].day) {
          // dia = dias[index];
          colorDia.push('hsl(186, 34%, 60%)')
          degra.push('hsl(186, 34%, 60%, 0.65)')
        }
        colorDia.push('hsl(10, 79%, 65%)')
        degra.push('hsl(10, 79%, 65%, 0.65)')
        
      }
    }

    this.barChartData = {
      labels: dia,
      datasets: [
        { data: amount, 
          backgroundColor: colorDia,
          borderSkipped: false,
          borderRadius: 3,
          maxBarThickness: 70,
          hoverBackgroundColor: degra,
          
        }
      ],
      
    };
    
    
  }

}
