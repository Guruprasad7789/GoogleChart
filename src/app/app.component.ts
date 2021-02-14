import { Component } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
declare let google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  
  audioObj = new Audio();
  seek=0;
  currentTime= '00:00';
  duration = 1;
  durationStr = '00:00';
  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ];
  url ='https://www.computerhope.com/jargon/m/example.mp3';
  ngOnInit() {
 // this.drawChart();
    this.audioObj.src=this.url;
    this.audioObj.load();
 
}
drawChart() {
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Month', 'Sales'],
      ['Jan',  15],
      ['Feb',  11.3],
      ['Mar',  11],
      ['Apr',  13.9],
      ['May',  10.7],
      ['Jun',  12],
      ['Jul',  9.5],
      ['Aug',  9],
    ]);

    var options = {
      title: 'Company Performance',
         legend: 'none',
      pointSize: 10,
      colors: ['#587e21'],
    };

    var chart = new google.visualization.AreaChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
  }
}
play(){
  this.streamObserver(this.url).subscribe(event=>{});
}
pause(){
  this.audioObj.pause();
}
rePlay(){
  this.audioObj.load();
  this.audioObj.play();
}
changeSlider(ev: any){
  this.audioObj.currentTime = ev.target.value;
}
streamObserver(url:string){
  return new Observable(observer=>{
  this.audioObj.play();

const handler =(event:Event) =>{
  console.log(event);
  this.currentTime=this.timeFormat(this.audioObj.currentTime);
  this.durationStr=this.timeFormat(this.audioObj.duration);
  this.duration=this.audioObj.duration;
  this.seek = this.audioObj.currentTime;
}
this.addEvent(this.audioObj,this.audioEvents,handler);
    return ()=>{
      this.audioObj.pause();
      this.audioObj.currentTime=0;
      this.removeEvent(this.audioObj,this.audioEvents,handler);
    }
  });
}

addEvent(obj: any, events: any , handler: any){
  events.forEach((event: any) => {
    obj.addEventListener(event, handler);
  });
}
removeEvent(obj: any, events: any , handler: any){
    events.forEach((event: any) => {
      obj.removeEventListener(event, handler);
    });
  }
timeFormat(time: any,format = "mm:ss"){
const momentTime = time * 1000;
return moment.utc(momentTime).format(format)
}
}
