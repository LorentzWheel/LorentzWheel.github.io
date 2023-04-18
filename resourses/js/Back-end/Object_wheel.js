//////---------Cone -----------------
class Cone {
    constructor(radius, height, angleI,masseI) {
        this.radius=radius;
		this.height=height;
		this.angle=angleI;
		this.masse=masseI;
    }
	getAngle() {
		return this.angle;
	}

	setAngle(angle) {
		this.angle = angle;
	}

	getMasse() {
		return this.masse;
	}

	setMasse(masse) {
		this.masse = masse;
	}
  }

//////---------Calculs -----------------

class CalculClass{

    masseVariation( mi1,  masseInit, massMax, deltaT, aCoeff){
        var mi2=0;
        if (mi1<=masseInit){
            mi2=masseInit;     
       }
       else if (mi1 >= massMax){
            mi2=massMax; 
       }
       else{
            //mi2= mi1 - aCoeff*Math.pow(mi1, 0.16666)*deltaT;
			mi2= mi1 - aCoeff*Math.pow(mi1, 0.5)*deltaT;
       }
       return mi2;
    }

    couple( mi2,  anglei1,  wheelRad) {
    	var coupleI = mi2*9.81*Math.cos(anglei1)*wheelRad;
    	return coupleI;
    }
	
    inertie( mi1, wheelRadius) {
    	 var inertieI= mi1*Math.pow(wheelRadius, 2);
    	return inertieI;
    }

    angleSpeedVarition( wi1,  deltaT,  f,  coupleI,  inertieI) {
    	 var wi2= wi1 + (coupleI/inertieI - f*wi1)*deltaT;
      	return wi2;
    }
    
    angleVariation( angle1,  wi2,  deltaT) {
    	
    	var angle2=angle1 + wi2*deltaT;
    	
    	if (angle2>=2*Math.PI ){
    		angle2=angle2-2*Math.PI;
    	}
    	else if (angle2<0){
    		angle2=2*Math.PI+angle2;
    	}
    	return angle2;
    }

  } 