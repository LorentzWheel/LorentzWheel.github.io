
//----- Global Variable init ------ var arrayPx1 = [];
var arrayPx2 = [];
var arrayPx3 = [];
var arrayPx4 = [];
var arrayPx5 = [];
var arrayPx6 = [];
var arrayPx7 = [];
var arrayPx8 = [];
var array2Px1 = [];
var array2Px2 = [];
var array2Px3 = [];
var array2Px4 = [];
var array2Px5 = [];
var array2Px6 = [];
var array2Px7 = [];
var array2Px8 = [];

var arrayPy1 = [];
var arrayPy2 = [];
var arrayPy3 = [];
var arrayPy4 = [];
var arrayPy5 = [];
var arrayPy6 = [];
var arrayPy7 = [];
var arrayPy8 = [];
var array2Py1 = [];
var array2Py2 = [];
var array2Py3 = [];
var array2Py4 = [];
var array2Py5 = [];
var array2Py6 = [];
var array2Py7 = [];
var array2Py8 = [];

var waterArray1 = [];
var waterArray2 = [];
var waterArray3 = [];
var waterArray4 = [];
var waterArray5 = [];
var waterArray6 = [];
var waterArray7 = [];
var waterArray8 = [];
var water2Array1 = [];
var water2Array2 = [];
var water2Array3 = [];
var water2Array4 = [];
var water2Array5 = [];
var water2Array6 = [];
var water2Array7 = [];
var water2Array8 = [];

var arrayW = [];
var arrayW2 = [];
var arrayM0=[];
var arrayM02=[];

var i=0;
var j=0;
var strX;
var strY;
var px=10;
var py=12;

var M0=[];
var M02=[];
//wheel 1
var dataW = [];
var dataMasse = [];
var dataPosX = [];
var dataPosY =[]; 
var dataMasseTot = [];
var dataButterfly = [];
//wheel 2 
var data2W = [];
var data2Masse = [];
var data2PosX= [];
var data2PosY = [];
var data2MasseTot = [];
var data2Butterfly =[];
//----- Wheel 1 HTML class ---
var box0 = document.getElementById("box0");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var water0 = document.getElementById("water0");
var water1 = document.getElementById("water1");
var water2 = document.getElementById("water2");
var water3 = document.getElementById("water3");
var water4 = document.getElementById("water4");
var water5 = document.getElementById("water5");
var water6 = document.getElementById("water6");
var water7 = document.getElementById("water7");
//----- Wheel 2 HTML class ---
var box20 = document.getElementById("box0-2");
var box21 = document.getElementById("box1-2");
var box22 = document.getElementById("box2-2");
var box23 = document.getElementById("box3-2");
var box24 = document.getElementById("box4-2");
var box25 = document.getElementById("box5-2");
var box26 = document.getElementById("box6-2");
var box27 = document.getElementById("box7-2");
var water20 = document.getElementById("water0-2");
var water21 = document.getElementById("water1-2");
var water22 = document.getElementById("water2-2");
var water23 = document.getElementById("water3-2");
var water24 = document.getElementById("water4-2");
var water25 = document.getElementById("water5-2");
var water26 = document.getElementById("water6-2");
var water27 = document.getElementById("water7-2");


var moment=document.getElementById("moment");
var moment2=document.getElementById("moment2");
var ismoving="true";
var box='box';

var button=document.getElementById("fillposition");
var filler=document.getElementById("filler-id");
var filler2=document.getElementById("filler-id-2");
var fillptn =document.getElementById("fillptn");

let TopinitArrayPosition=[9,115,160,118,12,-95,-140,-98];
let LeftinitArrayPosition=[162,120,14,-93,-138,-96,10,117];

var WebsiteMode="Input"; //RUN or Input Mode
var id;

var tab1=document.getElementById("tab-1");
var GraphAera = document.getElementById("GraphAera");
var Wheel=document.getElementById("ckbx-circle-2-1");
var Slider = document.getElementsByClassName('slider');
var Slider_Label = document.getElementsByClassName('slider_label');
var Slider_timeframe = document.getElementById('slider-timeframe');

var pauseIcon = document.getElementById("pauseIcon");
var playIcon = document.getElementById("playIcon");
var stopIcon = document.getElementById("stopIcon");

var pauseButton = document.getElementById("pauseButton");
var playButton = document.getElementById("playButton");
var stopButton = document.getElementById("stopButton");

var isRunning=true;
var isPause=false;
var isStop=false;

let T=0;
// ---Css Variable ----
var cssColor = [];
cssColor.push(getComputedStyle(document.documentElement).getPropertyValue('--chart-color-1'));
cssColor.push(getComputedStyle(document.documentElement).getPropertyValue('--chart-color-2'));
cssColor.push(getComputedStyle(document.documentElement).getPropertyValue('--chart-color-3'));
cssColor.push(getComputedStyle(document.documentElement).getPropertyValue('--chart-color-4'));


let myJSON = '{"graphid":["container","butterfly2D"], "value":[{"plot1":[],"plot2":[]},{"plot1":[],"plot2":[]}]}';
var pointList = JSON.parse(myJSON);

//-----------------Position Wheel Init and Update----------///
//-----------------------------//

function Clean_Restart(){
	stopFrame();
	SliderManager("enable");
	initWheelposition();
	elementVisibility('visible','Run_button');
	elementVisibility('hidden','Restart');
	GraphAera.style.display = 'none';
	Slider_timeframe.disabled=true;
	dataW = [];
	dataMasse = [];
	dataPosX = [];
	dataPosY =[]; 
	dataMasseTot = [];
	dataButterfly = [];
	data2W = [];
	data2Masse = [];
	data2PosX= [];
	data2PosY = [];
	data2MasseTot = [];
	data2Butterfly =[];
	Plotly.deleteTraces('butterfly2D', 3);
	Plotly.deleteTraces('butterfly2D', 2);
	Plotly.deleteTraces('butterfly2D', 1);
	Plotly.deleteTraces('butterfly2D', 0);
	Plotly.deleteTraces('container', 3);
	Plotly.deleteTraces('container', 2);
	Plotly.deleteTraces('container', 1);
	Plotly.deleteTraces('container', 0);

	try {Plotly.deleteTraces('BifurcationGraph-debit', 0);}catch (error){}
	try {Plotly.deleteTraces('BifurcationGraph-diamfuite', 0);}catch (error){}
	try {Plotly.deleteTraces('BifurcationGraph-deltarad', 0);}catch (error){}
	try {Plotly.deleteTraces('BifurcationGraph-radius', 0);}catch (error){}
	try {Plotly.deleteTraces('BifurcationGraph-frictcoeff', 0);}catch (error){}
	tab1.checked=true;
    pointList = JSON.parse(myJSON);
	
}

function initWheelposition(){
	
	var px=0;
	var py=0;
	
	document.getElementById("display_time").innerHTML="";
    moment.innerHTML="";
    moment2.innerHTML="";

	box0.style.top = TopinitArrayPosition[0]+px+'px';
	box1.style.top = TopinitArrayPosition[1]+px+'px';
	box2.style.top = TopinitArrayPosition[2]+px+'px';
	box3.style.top = TopinitArrayPosition[3]+px+'px';
	box4.style.top = TopinitArrayPosition[4]+px+'px';
	box5.style.top = TopinitArrayPosition[5]+px+'px';
	box6.style.top = TopinitArrayPosition[6]+px+'px';
	box7.style.top = TopinitArrayPosition[7]+px+'px';
	//window.alert("array: "+ arrayPx1[0] +"/"+arrayPx2[0] +"/"+arrayPx3[0] +"/"+arrayPx4[0] +"/"+arrayPx5[0] +"/"+arrayPx6[0] +"/"+arrayPx7[0] +"/"+arrayPx8[0] +"/");
	//waterArray[T]
	box0.style.left = LeftinitArrayPosition[0]+py+'px';
	box1.style.left = LeftinitArrayPosition[1]+py+'px';
	box2.style.left = LeftinitArrayPosition[2]+py+'px';
	box3.style.left = LeftinitArrayPosition[3]+py+'px';
	box4.style.left = LeftinitArrayPosition[4]+py+'px';
	box5.style.left = LeftinitArrayPosition[5]+py+'px';
	box6.style.left = LeftinitArrayPosition[6]+py+'px';
	box7.style.left = LeftinitArrayPosition[7]+py+'px';
	//arrayMasset[T]
	//-------------WHEEL 2 Position-----------//
	box20.style.top = TopinitArrayPosition[0]+px+'px';
	box21.style.top = TopinitArrayPosition[1]+px+'px';
	box22.style.top = TopinitArrayPosition[2]+px+'px';
	box23.style.top = TopinitArrayPosition[3]+px+'px';
	box24.style.top = TopinitArrayPosition[4]+px+'px';
	box25.style.top = TopinitArrayPosition[5]+px+'px';
	box26.style.top = TopinitArrayPosition[6]+px+'px';
	box27.style.top = TopinitArrayPosition[7]+px+'px';
	//window.alert("array: "+ arrayPx1[0] +"/"+arrayPx2[0] +"/"+arrayPx3[0] +"/"+arrayPx4[0] +"/"+arrayPx5[0] +"/"+arrayPx6[0] +"/"+arrayPx7[0] +"/"+arrayPx8[0] +"/");
	//waterArray[T]
	box20.style.left = LeftinitArrayPosition[0]+py+'px';
	box21.style.left = LeftinitArrayPosition[1]+py+'px';
	box22.style.left = LeftinitArrayPosition[2]+py+'px';
	box23.style.left = LeftinitArrayPosition[3]+py+'px';
	box24.style.left = LeftinitArrayPosition[4]+py+'px';
	box25.style.left = LeftinitArrayPosition[5]+py+'px';
	box26.style.left = LeftinitArrayPosition[6]+py+'px';
	box27.style.left = LeftinitArrayPosition[7]+py+'px';
      //arrayMasset[T]
	water0.style.height = 0 +'px';
	water1.style.height = 0 + 'px';
	water2.style.height = 0 + 'px';
	water3.style.height = 0 + 'px';
	water4.style.height = 0 + 'px';
	water5.style.height = 0 +'px';
	water6.style.height = 0 + 'px';
	water7.style.height = 0 + 'px';
	//-------WATER 2-------------------------
	water20.style.height = 0 + 'px';
	water21.style.height = 0 + 'px';
	water22.style.height = 0 + 'px';
	water23.style.height = 0 + 'px';
	water24.style.height = 0 + 'px';
	water25.style.height = 0 + 'px';
	water26.style.height = 0 + 'px';
	water27.style.height = 0 + 'px';

}
function fetchData(){
	var button=document.getElementById("fillposition");
	var filler=document.getElementById("filler-id");
	var filler2=document.getElementById("filler-id-2");
	var fillptn =document.getElementById("fillptn");
	  
	button.checked=true;
	fillptn.value=true;
    filler.style.top = '-165px';
	filler.style.left='30px';
	filler2.style.top = '-165px';
	filler2.style.left='30px';
}
///-------------Slider Dynamic value update-------------///
$(function()
{
$('.slider').on('input change', function(){
          $(this).next($('.slider_label')).html(this.value);
        });
      $('.slider_label').each(function(){
          var value = $(this).prev().attr('value');
          $(this).html(value);
        });
     
});
//---------------------My Move---------------//
$(document).ready(function(){
	$(this).scrollTop(0);
  });
  
//--Filler on top or Right-----//
document.addEventListener("DOMContentLoaded", function() {
    filler.style.top = '-165px';
	filler.style.left='30px';
	filler2.style.top = '-165px';
	filler2.style.left='30px';
	
});


//-------------IS two wheel ?----------------//
function showTwoWheel(){

	if(Wheel.checked==false){ 
	  document.getElementById('secondWheel').style.display ='none';}
	  else{document.getElementById('secondWheel').style.display ='block';}
}

function elementVisibility(visibility,elementId){
      
	if (visibility=="hidden"){
		document.getElementById(elementId).style.display ='none';
	}else{
		document.getElementById(elementId).style.display ='block';
	}

}
function SliderManager(action){
	
	if (action=="disable"){
	for (let i = 0; i < Slider.length; i++) {
		Slider[i].disabled =true;
		Slider[i].style.setProperty("--selection-background", 'grey');
		Slider_Label[i].style.color='grey';
		
	  }
	}
	if (action=="enable"){
	for (let j = 0; j < Slider.length; j++) {
		Slider[j].disabled =false;
		Slider[j].style.setProperty("--selection-background", "#4CAF50");
		Slider_Label[j].style.color='black';
		
	  }
	}
}
//----------------//----------------//----------------//----------------////----------------//----------------//----------------//----------------//
//----------------//----------------//SIMULATION Function//----------------////----------------//----------------//----------------//----------------//

function Array_Builder(){

	let debit = Number(document.getElementById("debit").value);
	let deltaRad = Number(document.getElementById("deltaRad").value);
	let diamfuite = Number(document.getElementById("diamfuite").value);
	let err = Number(document.getElementById("err").value);
	let radius = Number(document.getElementById("radius").value);
	let frictcoeff = Number(document.getElementById("frictcoeff").value);
	
	var deltaRad_err = deltaRad*(1+err/100);
	var diamfuite_err = diamfuite*(1+err/100);
	var arrayW =[];
	var arrayW2 =[];
	var w=[];
	var w2=[];
	
	
	//----- Init Wheel 1 and Wheel 2 ---- Wheel_RUN(wIn, dltAng, secFuit, wheelRad, fillptn)
	
	const myWheel1 = new Wheel_RUN(debit,deltaRad,diamfuite,radius,frictcoeff,true);
	const myWheel2 = new Wheel_RUN(debit,deltaRad_err,diamfuite,radius,frictcoeff,true);
	// Param init

	// wheel 1
	dataW = myWheel1.DataW;
	dataMasse = myWheel1.DataMasse;
	dataPosX = myWheel1.DataPx;
	dataPosY = myWheel1.DataPy;
	dataMasseTot = myWheel1.DataMasseTot;
	dataButterfly = myWheel1.DataCxCy;
	//wheel 2 
	data2W = myWheel2.DataW;
	data2Masse = myWheel2.DataMasse;
	data2PosX= myWheel2.DataPx;
	data2PosY = myWheel2.DataPy;
	data2MasseTot = myWheel2.DataMasseTot;
	data2Butterfly = myWheel2.DataCxCy;
	// Graph initalisation

	refreshChart('container',dataW,data2W,"Time (ms)","Rotation Speed (rad/s)","Rotation Speed",0,1);
	refreshChart('butterfly2D',dataButterfly,data2Butterfly,"Rotation Speed (rad/s)","Inertie center pos X","Lorentz Butterfly",1,2);
	
	
	elementVisibility('hidden','Run_button');
	elementVisibility('visible','Restart');
	SliderManager("disable");
	GraphAera.style.display = 'block';
	tabManagment('debit');
	playFrame()
	myMove();
	



}

function setT(){
	if(isRunning){
		isPause=false;
    }
	T=document.getElementById("slider-timeframe").value;
}

function play(){
	isPause=false;
	isStop=false
}
function pause(){
	isPause=true;

}
function Stop() {
	T=0;
	isRunning=false;
	isStop=true;
}

function pauseFrame(){
	pause()
	isRunning=false;
	playIcon.src="resourses/images/Play.svg";
	playButton.disabled=false;
	pauseIcon.src="resourses/images/Pause_disabled.svg";
	pauseButton.disabled=true;
	stopIcon.src="resourses/images/Stop.svg";
	stopButton.disabled=false;
	
}

function playFrame(){
	play();
	Slider_timeframe.disabled=false;
	isRunning=true;
	playIcon.src="resourses/images/Play_disabled.svg";
	playButton.disabled=true;
	pauseIcon.src="resourses/images/Pause.svg";
	pauseButton.disabled=false;
	stopIcon.src="resourses/images/Stop.svg";
	stopButton.disabled=false;
}

function stopFrame(){
	Stop();
	playIcon.src="resourses/images/Play.svg";
	playButton.disabled=false;
	pauseIcon.src="resourses/images/Pause_disabled.svg";
	pauseButton.disabled=true;
	stopIcon.src="resourses/images/Stop_disabled.svg";
	stopButton.disabled=true;
}
function sliderColor(){
	valpercent= (Slider_timeframe.value/Slider_timeframe.max)*100;
	Slider_timeframe.style.background= `linear-gradient(to right,#6245e7 ${valpercent}%,#d5d5d5 ${valpercent}%)`;
}
function myMove() {

//-----Get initial value from slider ----	

  // Display param	
  //var T = 0;
  
   arrayPx1 = [];
   arrayPx2 = [];
   arrayPx3 = [];
   arrayPx4 = [];
   arrayPx5 = [];
   arrayPx6 = [];
   arrayPx7 = [];
   arrayPx8 = [];
   array2Px1 = [];
   array2Px2 = [];
   array2Px3 = [];
   array2Px4 = [];
   array2Px5 = [];
   array2Px6 = [];
   array2Px7 = [];
   array2Px8 = [];
  
   arrayPy1 = [];
   arrayPy2 = [];
   arrayPy3 = [];
   arrayPy4 = [];
   arrayPy5 = [];
   arrayPy6 = [];
   arrayPy7 = [];
   arrayPy8 = [];
   array2Py1 = [];
   array2Py2 = [];
   array2Py3 = [];
   array2Py4 = [];
   array2Py5 = [];
   array2Py6 = [];
   array2Py7 = [];
   array2Py8 = [];
  
   waterArray1 = [];
   waterArray2 = [];
   waterArray3 = [];
   waterArray4 = [];
   waterArray5 = [];
   waterArray6 = [];
   waterArray7 = [];
   waterArray8 = [];
   water2Array1 = [];
   water2Array2 = [];
   water2Array3 = [];
   water2Array4 = [];
   water2Array5 = [];
   water2Array6 = [];
   water2Array7 = [];
   water2Array8 = [];
  
   arrayW = [];
   arrayW2 = [];
   arrayM0=[];
   arrayM02=[];
  
   i=0;
   j=0;
   strX;
   strY;
   px=10;
   py=12;
   fillCoef=50/3.42;

   M0=[];
   M02=[];

  
  id = setInterval(frame, 100);
 

  function frame() {
	//------Stop condition
    if (T == dataW.length) {
      stopFrame();
    }
    
	if(isPause && !isStop){}
	else if (isRunning){   
    ///-----------BUILD ARRAY --------//
		while (j<dataW.length) {

			w=dataW[j];
			w2=data2W[j];
			arrayW.push(Math.round((w[1])*10)/10);
			arrayW2.push(Math.round((w2[1])*10)/10);

			//-----SET WATER LEVEL----
			M0=dataMasse[j];
			M02=data2Masse[j];
			
			waterArray1.push(Math.round((M0[0]-0.3)*fillCoef));
			waterArray2.push(Math.round((M0[1]-0.3)*fillCoef));
			waterArray3.push(Math.round((M0[2]-0.3)*fillCoef));
			waterArray4.push(Math.round((M0[3]-0.3)*fillCoef));
			waterArray5.push(Math.round((M0[4]-0.3)*fillCoef));
			waterArray6.push(Math.round((M0[5]-0.3)*fillCoef));
			waterArray7.push(Math.round((M0[6]-0.3)*fillCoef));
			waterArray8.push(Math.round((M0[7]-0.3)*fillCoef));
			
			water2Array1.push(Math.round((M02[0]-0.3)*fillCoef));
			water2Array2.push(Math.round((M02[1]-0.3)*fillCoef));
			water2Array3.push(Math.round((M02[2]-0.3)*fillCoef));
			water2Array4.push(Math.round((M02[3]-0.3)*fillCoef));
			water2Array5.push(Math.round((M02[4]-0.3)*fillCoef));
			water2Array6.push(Math.round((M02[5]-0.3)*fillCoef));
			water2Array7.push(Math.round((M02[6]-0.3)*fillCoef));
			water2Array8.push(Math.round((M02[7]-0.3)*fillCoef));
			//---SET X POITION----
			strX=dataPosX[j];
			arrayPx1.push(Math.round(strX[0]*150)); //----150 AND px NEED TO BE RESPONCIVE OR PARAMETRABLE...
			arrayPx2.push(Math.round(strX[1]*150));
			arrayPx3.push(Math.round(strX[2]*150));
			arrayPx4.push(Math.round(strX[3]*150));
			arrayPx5.push(Math.round(strX[4]*150));
			arrayPx6.push(Math.round(strX[5]*150));
			arrayPx7.push(Math.round(strX[6]*150));
			arrayPx8.push(Math.round(strX[7]*150));
			
			str2X=data2PosX[j];
			array2Px1.push(Math.round(str2X[0]*150)); //----150 AND px NEED TO BE RESPONCIVE OR PARAMETRABLE...
			array2Px2.push(Math.round(str2X[1]*150));
			array2Px3.push(Math.round(str2X[2]*150));
			array2Px4.push(Math.round(str2X[3]*150));
			array2Px5.push(Math.round(str2X[4]*150));
			array2Px6.push(Math.round(str2X[5]*150));
			array2Px7.push(Math.round(str2X[6]*150));
			array2Px8.push(Math.round(str2X[7]*150));
			//---SET Y POITION----
			strY=dataPosY[j];
			arrayPy1.push(Math.round(strY[0]*150));//----------330
			arrayPy2.push(Math.round(strY[1]*150));
			arrayPy3.push(Math.round(strY[2]*150));
			arrayPy4.push(Math.round(strY[3]*150));
			arrayPy5.push(Math.round(strY[4]*150));
			arrayPy6.push(Math.round(strY[5]*150));
			arrayPy7.push(Math.round(strY[6]*150));
			arrayPy8.push(Math.round(strY[7]*150));
			
			str2Y=data2PosY[j];
			array2Py1.push(Math.round(str2Y[0]*150));//----------330
			array2Py2.push(Math.round(str2Y[1]*150));
			array2Py3.push(Math.round(str2Y[2]*150));
			array2Py4.push(Math.round(str2Y[3]*150));
			array2Py5.push(Math.round(str2Y[4]*150));
			array2Py6.push(Math.round(str2Y[5]*150));
			array2Py7.push(Math.round(str2Y[6]*150));
			array2Py8.push(Math.round(str2Y[7]*150));
			
			//["container","butterfly2D"]
			pointList.value[0].plot1.push([w[0],w[1]]);
			pointList.value[0].plot2.push([w2[0],w2[1]]);
			//["container","butterfly2D"]
			pointList.value[1].plot1.push([dataButterfly[j][1],dataButterfly[j][2]]);
			pointList.value[1].plot2.push([data2Butterfly[j][1],data2Butterfly[j][2]]);

			j++;
			
			// ----- Chart point init ---
			
			

		}

		//---Pause Function---

		//---Display Time---Math.floor
		if (T<600){
			document.getElementById("display_time").innerHTML = "Time: " + Math.floor(T/10) + " s";//---T/10 avec 10 pouvant varrier pour accelerer ou ralentir la simu  
		}
		else{
		var a = Math.floor(T/600); //minutes (T/600) pour un affichage temps reel
		var b = Math.floor(T/10)%60; //seconds (T/10) pour 1s=1000ms
		document.getElementById("display_time").innerHTML = "Time: " + a + " min " + b +" s" ;
		}
		
		///---------DISPLAY PROPERTY TIME BY tIME T-------------
		
		moment.innerHTML=arrayW[T];
		moment2.innerHTML=arrayW2[T];
		
		box0.style.top = arrayPx1[T]+px+ 'px';
		box1.style.top = arrayPx2[T]+px+ 'px';
		box2.style.top = arrayPx3[T]+px+ 'px';
		box3.style.top = arrayPx4[T]+px+ 'px';
		box4.style.top = arrayPx5[T]+px+ 'px';
		box5.style.top = arrayPx6[T]+px+ 'px';
		box6.style.top = arrayPx7[T]+px+ 'px';
		box7.style.top = arrayPx8[T]+px+ 'px';
		//window.alert("array: "+ arrayPx1[0] +"/"+arrayPx2[0] +"/"+arrayPx3[0] +"/"+arrayPx4[0] +"/"+arrayPx5[0] +"/"+arrayPx6[0] +"/"+arrayPx7[0] +"/"+arrayPx8[0] +"/");
		//waterArray[T]
		box0.style.left = arrayPy1[T]+py+ 'px';
		box1.style.left = arrayPy2[T]+py+ 'px';
		box2.style.left = arrayPy3[T]+py+ 'px';
		box3.style.left = arrayPy4[T]+py+ 'px';
		box4.style.left = arrayPy5[T]+py+ 'px';
		box5.style.left = arrayPy6[T]+py+ 'px';
		box6.style.left = arrayPy7[T]+py+ 'px';
		box7.style.left = arrayPy8[T]+py+ 'px';
		//arrayMasset[T]
		//-------------WHEEL 2 Position-----------//
		box20.style.top = array2Px1[T]+px+ 'px';
		box21.style.top = array2Px2[T]+px+ 'px';
		box22.style.top = array2Px3[T]+px+ 'px';
		box23.style.top = array2Px4[T]+px+ 'px';
		box24.style.top = array2Px5[T]+px+ 'px';
		box25.style.top = array2Px6[T]+px+ 'px';
		box26.style.top = array2Px7[T]+px+ 'px';
		box27.style.top = array2Px8[T]+px+ 'px';
		//window.alert("array: "+ arrayPx1[0] +"/"+arrayPx2[0] +"/"+arrayPx3[0] +"/"+arrayPx4[0] +"/"+arrayPx5[0] +"/"+arrayPx6[0] +"/"+arrayPx7[0] +"/"+arrayPx8[0] +"/");
		//waterArray[T]
		box20.style.left = array2Py1[T]+py+ 'px';
		box21.style.left = array2Py2[T]+py+ 'px';
		box22.style.left = array2Py3[T]+py+ 'px';
		box23.style.left = array2Py4[T]+py+ 'px';
		box24.style.left = array2Py5[T]+py+ 'px';
		box25.style.left = array2Py6[T]+py+ 'px';
		box26.style.left = array2Py7[T]+py+ 'px';
		box27.style.left = array2Py8[T]+py+ 'px';
		//arrayMasset[T]
		
		//------WATER-------------------
		water0.style.height = waterArray1[T]+ 'px';
		water1.style.height = waterArray2[T]+ 'px';
		water2.style.height = waterArray3[T]+ 'px';
		water3.style.height = waterArray4[T]+ 'px';
		water4.style.height = waterArray5[T]+ 'px';
		water5.style.height = waterArray6[T]+ 'px';
		water6.style.height = waterArray7[T]+ 'px';
		water7.style.height = waterArray8[T]+ 'px';
		//-------WATER 2-------------------------
		water20.style.height = water2Array1[T]+ 'px';
		water21.style.height = water2Array2[T]+ 'px';
		water22.style.height = water2Array3[T]+ 'px';
		water23.style.height = water2Array4[T]+ 'px';
		water24.style.height = water2Array5[T]+ 'px';
		water25.style.height = water2Array6[T]+ 'px';
		water26.style.height = water2Array7[T]+ 'px';
		water27.style.height = water2Array8[T]+ 'px';

		
		chartTrace(T,pointList);
		Slider_timeframe.value= T;
		sliderColor();
		
		
		T++;
		

		// Update chart----------------------
		
	}
	else if (isStop){
		initWheelposition();
		T=0;
		Slider_timeframe.value=T;
		sliderColor();
		isPause=true;
	}
  }


}

function chartTrace(time,pointList){
	
	var containerList =pointList.graphid;

	for (let x in containerList){
		
		var graphDiv = document.getElementById(containerList[x]);

		if (graphDiv.data.length>2){
				Plotly.deleteTraces(containerList[x], 3);
				Plotly.deleteTraces(containerList[x], 2);
		}
	
		Plotly.addTraces(containerList[x], {x: [pointList.value[x].plot1[time][0]],y: [pointList.value[x].plot1[time][1]],marker: {size: 15,}});
		Plotly.addTraces(containerList[x], {x: [pointList.value[x].plot2[time][0]],y: [pointList.value[x].plot2[time][1]],marker: {size: 15,}});
	
	}

}
//----------------------CHARTS----------------/////----------------------CHARTS----------------///
//----------------------CHARTS----------------/////----------------------CHARTS----------------///

function refreshChart(div,Serie1,Serie2,xaxTitle,yaxTitle,Title,xCursor,yCursor){	
	
	var xArray=[];
	var yArray=[];
	var x2Array=[];
	var y2Array=[];

	for (let x in Serie1){
		xArray.push(Serie1[x][xCursor]);
		yArray.push(Serie1[x][yCursor]);
	}


	for (let x in Serie2){
		x2Array.push(Serie2[x][xCursor]);
		y2Array.push(Serie2[x][yCursor]);
	}
	// Define Data
	var data = [
		{x:xArray,y:yArray,mode: "lines",type: "scatter",name:"Wheel 1"},
		{x:x2Array,y:y2Array,mode: "lines",type: "scatter",name:"Wheel 2"}
	];
	
	// Define Layout
	var layout = {
	  xaxis: {title: xaxTitle},
	  yaxis: {title: yaxTitle},  
	  title: Title,
	  colorway : cssColor,
	};
	
	Plotly.newPlot(div,data,layout);
		
}
		

function butterfly (Serie1,Serie2) {
	
	var i;
	var x = [];
	var y = [];
	var z = [];
	var m = [];
	var n = [];
	var x2 = [];
	var y2 = [];
	var z2 = [];
	var m2 = [];
	var n2 = [];
	var c=[];
	var c2=[];
	
	

	for(i = 0; i < Serie1.length; i++)
	 {
	     m = Serie1[i];//data2D
	     x.push(m[0]);
	     y.push(m[1]);
	     z.push(m[2]);
	     c.push(i);
	     
	     m2 = Serie2[i];
	     x2.push(m2[0]);
	     y2.push(m2[1]);
	     z2.push(m2[2]);
	     c2.push(i);
	 }
	 
	Plotly.plot('Graph2Dinit', [{
	     type: 'scatter3d',
	     mode: 'lines',
	     x: x,
	     y: y,
	     z: z,
	     opacity: 0.7,
	     line: {
	       width: 10,
	       color:c,
	       colorscale: 'Viridis'}
	    }], {}, {showSendToCloud: false});

	Plotly.plot('Graphique2D', [{
	    type: 'scatter3d',
	    mode: 'lines',
	    x: x,
	    y: y,
	    z: z,
	    opacity: 0.7,
	    line: {
	      width: 10,
	      color:c,
	      colorscale: 'Viridis'}
	   }], {}, {showSendToCloud: false});

	Plotly.plot('Graphique2D2', [{
	    type: 'scatter3d',
	    mode: 'lines',
	    x: x2,
	    y: y2,
	    z: z2,
	    opacity: 0.7,
	    line: {
	      width: 10,
	      color:c2,
	      colorscale: 'Viridis'}
	   }], {}, {showSendToCloud: false});
	
	
	

}

function bifurcationDiagram(paramStudied){

	let debit = Number(document.getElementById("debit").value);
	let deltaRad = Number(document.getElementById("deltaRad").value);
	let diamfuite = Number(document.getElementById("diamfuite").value);
	let radius = Number(document.getElementById("radius").value);
	let frictcoeff = Number(document.getElementById("frictcoeff").value);
	
	/*For Session 0.001 a 0.003 avec delta 0.0001 --> soit 30 RUN
	Prendre les extremum local des 500 dernier ms
	Afficher sur un Plot en point
	*/


	var param= Number(document.getElementById(paramStudied).min);
	var paramMax= Number(document.getElementById(paramStudied).max);
	var delta = Math.abs(paramMax-param)/1000;

	var Serie1=[];
	var WheelRUN=[];
	var xaxTitle;
	var xlineShape;
	var grapdiv = 'BifurcationGraph-debit';

	switch(paramStudied){
		case 'debit':
			while (param<paramMax ){
				WheelRUN = Bifurcation_RUN(param,deltaRad ,diamfuite,radius,frictcoeff,true,param);
				Serie1.push(WheelRUN);
				param=param+delta;
				WheelRUN=[];
				xaxTitle = 'Wheel Debit input (L/s)';
				grapdiv = 'BifurcationGraph-debit';
				xlineShape = debit; 

			}		
			break;
			
		case 'diamfuite':
			while (param<paramMax ){
				WheelRUN = Bifurcation_RUN(debit,deltaRad ,param,radius,frictcoeff,true,param);
				Serie1.push(WheelRUN);
				param=param+delta;
				WheelRUN=[];
				xaxTitle = 'Diamater output (m)';
				grapdiv = 'BifurcationGraph-diamfuite';
				xlineShape =diamfuite ;
			}
			break;

		case 'deltaRad':
			while (param<paramMax ){
				WheelRUN = Bifurcation_RUN(debit,param ,diamfuite,radius,frictcoeff,true,param);
				Serie1.push(WheelRUN);
				param=param+delta;
				WheelRUN=[];
				xaxTitle = 'Delta angle initial (rad)';
				grapdiv = 'BifurcationGraph-deltarad';
				xlineShape = deltaRad;
			}
			break;

		case 'radius':
			while (param<paramMax ){
				WheelRUN = Bifurcation_RUN(debit,deltaRad ,diamfuite,param,frictcoeff,true,param);
				Serie1.push(WheelRUN);
				param=param+delta;
				WheelRUN=[];
				xaxTitle = 'Wheel Radius (m)';
				grapdiv = 'BifurcationGraph-radius';
				xlineShape = radius;
			}
			break;
		
		case 'frictcoeff':
			while (param<paramMax ){
				WheelRUN = Bifurcation_RUN(debit,deltaRad ,diamfuite,radius,param,true,param);
				Serie1.push(WheelRUN);
				param=param+delta;
				WheelRUN=[];
				xaxTitle = 'FrictionCoef';
				grapdiv = 'BifurcationGraph-frictcoeff';
				xlineShape = frictcoeff;
			}
			break;

		default:
				// code block
	}

	refreshBifurcationChart(grapdiv,Serie1,xaxTitle,'angular speed','Bifurcation graph',xlineShape);

	Serie1=[];
}
    
function refreshBifurcationChart(div,Serie,xaxTitle,yaxTitle,Title,xlineShape){
	var xArray=[];
	var yArray=[];
	
	for (let m in Serie){
		for (let n in Serie[m][0]){
			xArray.push(Serie[m][0][n]);
			yArray.push(Serie[m][1][n]);
		}
	}

	var data = [
		{	x:xArray,
			y:yArray,mode: "markers",
			type: "scatter",
			name:"Wheel 1", 
		    marker: {
			color: cssColor[0],
			size: 4,
			opacity: 1
		  },
		},
	];
	var layout = {
		xaxis: {title: xaxTitle},
		yaxis: {title: yaxTitle},  
		title: Title,
		colorway : cssColor,
		shapes: [

			//line vertical
		
			{
			  type: 'line',
			  x0: xlineShape,
			  y0: -2,
			  x1: xlineShape,
			  y1: 2,
			  line: {
				color: 'rgba(50, 171, 96, 0.6)',
				width: 5,
				
			  }
			},]
	  };

	//Plotly.deleteTraces(div,0);
	Plotly.newPlot(div,data,layout);

}

function tabManagment(paramStudied){
	
	switch(paramStudied){
		case 'debit':
			var graphDiv = document.getElementById('BifurcationGraph-debit');
			elementVisibility('visible','content-1');
			elementVisibility('hidden','content-2');	
			elementVisibility('hidden','content-3');	
			elementVisibility('hidden','content-4');
			elementVisibility('hidden','content-5');	
			break;
			
		case 'diamfuite':
			var graphDiv = document.getElementById('BifurcationGraph-diamfuite');
			elementVisibility('hidden','content-1');
			elementVisibility('visible','content-2');	
			elementVisibility('hidden','content-3');	
			elementVisibility('hidden','content-4');
			elementVisibility('hidden','content-5');
			break;

		case 'deltaRad':
			var graphDiv = document.getElementById('BifurcationGraph-deltarad');
			elementVisibility('hidden','content-1');
			elementVisibility('hidden','content-2');	
			elementVisibility('visible','content-3');	
			elementVisibility('hidden','content-4');
			elementVisibility('hidden','content-5');
			break;

		case 'radius':
			var graphDiv = document.getElementById('BifurcationGraph-radius');
			elementVisibility('hidden','content-1');
			elementVisibility('hidden','content-2');	
			elementVisibility('hidden','content-3');	
			elementVisibility('visible','content-4');
			elementVisibility('hidden','content-5');
			break;

		case 'frictcoeff':
			var graphDiv = document.getElementById('BifurcationGraph-frictcoeff');
			elementVisibility('hidden','content-1');
			elementVisibility('hidden','content-2');	
			elementVisibility('hidden','content-3');	
			elementVisibility('hidden','content-4');
			elementVisibility('visible','content-5');
			break;
	}
    try {
		var emptyDiv = false;
		if (graphDiv.data.length==0){
			emptyDiv = true;
		}
	}catch (error){
		emptyDiv = true;
	}
	if (emptyDiv){
		bifurcationDiagram(paramStudied);
	}
	
}
