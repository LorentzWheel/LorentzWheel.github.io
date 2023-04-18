



//-----------------Position Wheel Init and Update----------///

function Bifurcation_RUN(wIn, dltAng, secFuit, wheelRad,frictionCoef, fillptn,paramValue){

    //---------------------Wheel Param Init--------------//
    var wheelRadius = wheelRad; //2.5
    var rhoWater= 1000;
    var gravity= 9.81;
    var frictionCoef = frictionCoef; //1.2    //0.03
    var deltaT = 0.1;
    var kIteration=2000;//2000 previus value
    var radiusCone= 0.1; //rayon des cone en metre 0.2
    var heightCone= 0.3; //hauteur des cone en metre  0.5
    var sectionFuite= secFuit; //0.001 //0.002
    var alpha=Math.atan(radiusCone/wheelRadius);//0.19635
    var masseMaxCone = radiusCone*radiusCone*Math.PI*heightCone*rhoWater;
    //var aCoeff=rhoWater*Math.PI*sectionFuite*sectionFuite*Math.pow(2*9.81, 0.5)*Math.pow(3*heightCone*heightCone/(3141.5*Math.pow(radiusCone/3, 2)), 0.1667); //A modifier rho*S*racine(2*g*ht/r)*racine6(3/rho*pi)
    var masseTotale=0;
    var masseConeInit=0.3; //0.3
    
    
    var centreInertieX=0;
    var centreInertieY=0;
    var w2=0;
            
    var inc=0;
            //----------------------WARNING WaterFlowIn need to be !!!!!_________
    var waterFlowIn= wIn; // 0.1 Kg/s // 0.5
    var deltaAngle= dltAng;//2*Math.PI- 0.04 //0.14//DELTA ANGLE A L'ORIGINE//PB INCREMENTATION NEGATIVE
    var wheelRadius=wheelRad;
        
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
    var arrayW = [];
    var arrayParam = [];
    var arrayResult =[];
    // --- Intermediate Array for each time frame ---
    var DataW = [];
    // Other To be removed ---
    var epsi=0.05;
    var espi2=0.05;
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
            // ---- Calcul inertie ----
    
            ck += calcul.couple(arrayCone[m].getMasse(), arrayCone[m].getAngle(),wheelRad);
            ik += calcul.inertie(arrayCone[m].getMasse(),wheelRadius);
        
            //console.log("m: "+m+";"+" isFillable: "+ isFillable+" Masse: "+arrayCone[m].getMasse() + " Angle: "+arrayCone[m].getAngle());
        }

            // --- Calcul Vitesse Angulaire --
            w2 = calcul.angleSpeedVarition(w2, deltaT, frictionCoef, ck, ik);
            //----------CALCUL ET INCREMENTATION DES POSITION ANGULAIRE-------
        for (m=0; m < arrayCone.length; m++){
            arrayCone[m].setAngle(calcul.angleVariation(arrayCone[m].getAngle(), w2, deltaT));
            masseTotale = arrayCone[m].getMasse() + masseTotale;
            centreInertieX = centreInertieX + arrayCone[m].getMasse()*radiusCone*Math.sin(arrayCone[m].getAngle());
            centreInertieY = centreInertieY + arrayCone[m].getMasse()*radiusCone*Math.cos(arrayCone[m].getAngle());
        
        }
            centreInertieX=centreInertieX/masseTotale;
            centreInertieY=centreInertieY/masseTotale;
        
        if (j>1500){

            DataW.push([j,w2]);

            if (DataW.length>1){

                var N1= Number(DataW[0][1]); 
                var N2= Number(DataW[1][1]);
                var delta = Math.abs(N1-N2)/0.01;
               
                if (delta<epsi){

                    var delta2= Math.abs(arrayW[arrayW.length-1]-N2);
                    
                    if (delta2>espi2 || arrayW.length<1){
                            arrayParam.push(paramValue)
                            arrayW.push(N2);
                    }
                    
                }
                DataW = [];
            }
            
        }

        ck=0;
        ik=0;
        masseTotale=0;
    }
    
    arrayResult[0] = arrayParam;
    arrayResult[1] = arrayW;


 return arrayResult;
    
    }	
    
    