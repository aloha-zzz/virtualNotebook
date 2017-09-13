/**
 * Created by zhou on 2017/7/20.
 */
var work=document.getElementById("work");
var record=document.getElementById('record');
var study=document.getElementById('study');
var workPic=work.getContext('2d');

workPic.strokeStyle='#ffffff';
workPic.lineWidth=10;
workPic.beginPath();
workPic.lineTo(70,70);
workPic.lineTo(300,170);
workPic.stroke()
workPic.fillStyle='#ffffff';
workPic.beginPath();
workPic.arc(70, 70, 50, 0, Math.PI*2, true);
workPic.stroke();
workPic.fill();
workPic.font='30px Courier New bolder';
workPic.fillStyle='#000';
workPic.fillText("工作",42,82);

var recordPic=record.getContext('2d');
recordPic.strokeStyle='#ffffff';
recordPic.lineWidth=10;
recordPic.beginPath();
recordPic.lineTo(220,80);
recordPic.lineTo(0,170);
recordPic.stroke()
recordPic.fillStyle='#ffffff';
recordPic.beginPath();
recordPic.arc(220, 80, 45, 0, Math.PI*2, true);
recordPic.stroke();
recordPic.fill();
recordPic.font='26px Courier New bolder';
recordPic.fillStyle='#000';
recordPic.fillText("记录",195,90);

var studyPic=study.getContext('2d');
studyPic.strokeStyle='#ffffff';
studyPic.lineWidth=10;
studyPic.beginPath();
studyPic.lineTo(230,80);
studyPic.lineTo(0,100);
studyPic.stroke()
studyPic.fillStyle='#ffffff';
studyPic.beginPath();
studyPic.arc(220, 80, 50, 0, Math.PI*2, true);
studyPic.stroke();
studyPic.fill();
studyPic.font='30px Courier New bolder';
studyPic.fillStyle='#000';
studyPic.fillText("学习",190,90);