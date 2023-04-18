



//-----------------Position Wheel Init and Update----------///

function Wheel_RUN(wIn, dltAng, secFuit, wheelRad,frictionCoef, fillptn){

//---------------------Wheel Param Init--------------//
var wheelRadius = wheelRad; //2.5
var rhoWater= 1000; //1000 water
var gravity= 9.81;
var frictionCoef = frictionCoef; //1.2    //0.03
var deltaT = 0.1;
var kIteration=2000;//2000 previus value
var radiusCone= 0.1; //rayon des cone en metre 0.2
var heightCone= 0.1; //hauteur des cone en metre  0.5
var sectionFuite= secFuit; //0.001 //0.002
var alpha=Math.atan(radiusCone/wheelRadius);//0.19635
var masseMaxCone = radiusCone*radiusCone*Math.PI*heightCone*rhoWater;

var masseTotale=0;
var masseConeInit=0.3; //0.3


var centreInertieX=0;
var centreInertieY=0;
var w2=0;
		
		//----------------------WARNING WaterFlowIn need to be !!!!!_________
var waterFlowIn= wIn; // 0.1 Kg/s // 0.5
var deltaAngle= dltAng;//2*Math.PI- 0.04 //0.14//DELTA ANGLE A L'ORIGINE//PB INCREMENTATION NEGATIVE
var sectionFuite= secFuit; //0.001 //0.002
var wheelRadius=wheelRad;
    
//var aCoeff=rhoWater*Math.PI*sectionFuite*sectionFuite*Math.pow(2*9.81, 0.5)*Math.pow(3*heightCone*heightCone/(3141.5*Math.pow(radiusCone/3, 2)), 0.1667);
var aCoeff=rhoWater*Math.PI*sectionFuite*sectionFuite*Math.pow((2*gravity)/(Math.PI*radiusCone*radiusCone*rhoWater), 0.5);
	
var k=0;
var z=1;
var ck=0;
var ik=0;
var pX=0;
var pY=0;
var pMasse=0;
var maxAlpha=(3*Math.PI/2)-alpha;
var minAlpha=(3*Math.PI/2)+alpha;
var isFillable=false;

var Trigo = [0,Math.PI/4,Math.PI/2,3*Math.PI/4,Math.PI,5*Math.PI/4,3*Math.PI/2,7*Math.PI/4]
let arrayCone=[];

//--------------------Cone creation object init-----------------
for (let x in Trigo) {
	arrayCone[x] = new Cone(radiusCone, heightCone,Trigo[x]+deltaAngle, masseConeInit);
}
//console.log(arrayCone[0]);


//---------------------DATA Array Parameter Set--------------//

let calcul = new CalculClass;

// --- Global Array for Script Use ---
var arrayPx = [];
var arrayPy = [];
var waterArray = [];
var arrayW = [];

// --- Intermediate Array for each time frame ---
var DataWater = [];
var DataAngle = [];
var DataPx = [];
var DataPy = [];
var DataW = [];
var DataMasseTot = [];
var DataCxCy = [];
// Other To be removed ---

/////-------------Calcul RUN  -----------------////
for (j=0; j <= kIteration; j++){

	
	for (m=0; m < arrayCone.length; m++) {
		//-----CALCUL DE LA MASSE DE CHACUN DES CONES----
		if (!fillptn){
			maxAlpha=2*Math.PI-alpha;
			minAlpha=alpha;
			if (arrayConne[m].getAngle()>maxAlpha || arrayCone[m].getAngle()<minAlpha){
				isFillable=true;
			}else{isFillable=false;}
		   }
		   else{
				maxAlpha=(3*Math.PI/2)-alpha;
				minAlpha=(3*Math.PI/2)+alpha;
				if (arrayCone[m].getAngle()>maxAlpha && arrayCone[m].getAngle()<minAlpha){
					isFillable=true;
				}else{isFillable=false;}
		   }

		if (isFillable){ 
		    arrayCone[m].setMasse(calcul.masseVariation(arrayCone[m].getMasse(),masseConeInit,masseMaxCone,deltaT,aCoeff)+ waterFlowIn*deltaT*rhoWater/1000);
		}else {
			arrayCone[m].setMasse(calcul.masseVariation(arrayCone[m].getMasse(),masseConeInit,masseMaxCone,deltaT,aCoeff));	
		}
		
		///---- Set Masse -----
		DataWater.push(arrayCone[m].getMasse());
        // ---- Calcul inertie ----

		ck += calcul.couple(arrayCone[m].getMasse(), arrayCone[m].getAngle(),wheelRad);
		ik += calcul.inertie(arrayCone[m].getMasse(),wheelRadius);
	
		
		
		
	}


		// --- Calcul Vitesse Angulaire --
		
		w2 = calcul.angleSpeedVarition(w2, deltaT, frictionCoef, ck, ik);
		
		
		
		
	

        //----------CALCUL ET INCREMENTATION DES POSITION ANGULAIRE-------
	for (m=0; m < arrayCone.length; m++){
		arrayCone[m].setAngle(calcul.angleVariation(arrayCone[m].getAngle(), w2, deltaT));
		masseTotale = arrayCone[m].getMasse() + masseTotale;
	    centreInertieX = centreInertieX + arrayCone[m].getMasse()*radiusCone*Math.sin(arrayCone[m].getAngle());
	    centreInertieY = centreInertieY + arrayCone[m].getMasse()*radiusCone*Math.cos(arrayCone[m].getAngle());
		
		DataPx.push(Math.sin(arrayCone[m].getAngle())*wheelRadius);
		DataPy.push(Math.cos(arrayCone[m].getAngle())*wheelRadius);

		
	
	}
		centreInertieX=centreInertieX/masseTotale;
		centreInertieY=centreInertieY/masseTotale;
	
	DataW.push(j);
	DataW.push(w2);
	// ---- Build Array----------
	waterArray.push(DataWater);
    arrayW.push(DataW);
	arrayPx.push(DataPx);
	arrayPy.push(DataPy);

	DataMasseTot.push([j,masseTotale]);
	DataCxCy.push([centreInertieY,DataW[1],centreInertieX]); 

    DataPx=[];
	DataPy=[];
	DataWater=[];
	DataW = [];
	ck=0;
	ik=0;
	masseTotale=0;
}

this.DataW = arrayW;
this.DataMasse = waterArray;
this.DataPx = arrayPx;
this.DataPy = arrayPy;
this.DataMasseTot = DataMasseTot;
this.DataCxCy = DataCxCy;

}	

