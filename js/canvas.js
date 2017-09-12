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
recordPic.lineTo(70,70);
recordPic.lineTo(300,170);
recordPic.stroke()
recordPic.fillStyle='#ffffff';
recordPic.beginPath();
recordPic.arc(70, 70, 50, 0, Math.PI*2, true);
recordPic.stroke();
recordPic.fill();
recordPic.font='30px Courier New bolder';
recordPic.fillStyle='#000';
recordPic.fillText("工作",42,82);