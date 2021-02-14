import { Component, OnInit } from '@angular/core';
declare let Highcharts: any;
@Component({
  selector: 'app-high-chart',
  templateUrl: './high-chart.component.html',
  styleUrls: ['./high-chart.component.scss']
})
export class HighChartComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function () {
      Highcharts.chart('container', {
        chart: {
          type: 'areaspline'
        },
        title: {
          text: 'Average fruit consumption during one week'
        },
        legend: 'none',
        xAxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ]
        },
        yAxis: {
          labels: {
            format: '{value} st'
        }, 
        title: {
              text: null
          }
    //      min:0,
           },
        tooltip: {
          shared: true,
          valueSuffix: ' units'
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          areaspline: {
            fillOpacity: 0.5
          }
        },
        series: [{
          name: 'John',
          data: [0,1,2,3.5,3, 4, 9,3, 5, 4, 10, 12].reverse(), 
          color:'#587e21',
          marker: {
            fillColor: '#FFFFFF',
            lineWidth: 2,
            lineColor: null // inherit from series
        },
                      fillColor: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, '#587e21'],
                    [1, '#fff']
                ]}
              }],
      });
  });
  }

}
