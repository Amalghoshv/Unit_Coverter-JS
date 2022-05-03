var values=0;
getValue();
function getValue(){
    var values=document.getElementById("input").value ;

function len(){
    feet=(3.28*values).toFixed(3);
    meter=(values/3.28).toFixed(3);
    document.getElementById("length").innerText=values+" meters = "+feet +" feet"+ " | " + values+" Feet = "+meter+" meters";
}
len();


function volume(){
    gallon=(0.264172*values).toFixed(3);  
    liter=(3.785*values).toFixed(3);
    document.getElementById("volume").innerText=values+" liters = "+gallon + " gallons"+ " | " +values+ " Gallon = "+liter+" liters";
}
volume();
function mass(){
    pounds=(values*2.2).toFixed(3);
    kilo=(values*0.45359237).toFixed(3);
    document.getElementById("mass").innerText=values+" kilos = "+pounds +" pounds"+ " | " + values+" pounds = "+kilo+" kilos";

}
mass();
}