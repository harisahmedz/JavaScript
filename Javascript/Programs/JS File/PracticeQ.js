function RameshSalary(){
    var bs = document.getElementById("bs").value;
    var da = (bs/100)*40
    var hr = (bs/100)*20
    var gs = parseInt(bs)+parseInt(da)+parseInt(hr);

    var DearA = document.getElementById("da");
    var HouseR = document.getElementById("hr");
    var grossSalary = document.getElementById("GS");

    DearA.innerHTML= da;
    HouseR.innerHTML = hr;
    grossSalary.innerHTML = gs;

}
function DistanceConversion(){
    var km = document.getElementById("distance").value;
    var mValue =  km*1000;
    var ftValue = km*3280.8399;
    var inValue = km *39370.078;
    var cmValue = km * 100000;

    var meter = document.getElementById("m");
    var feets = document.getElementById("ft");
    var inches = document.getElementById("In");
    var centi = document.getElementById("cm");

    meter.innerHTML = mValue;
    feets.innerHTML = ftValue;
    inches.innerHTML= inValue;
    centi.innerHTML = cmValue;
}

function TemperatureConversion(){
    var F = document.getElementById("temp").value;
    var tempInC = 5/9*(F-32);

    var C = document.getElementById("c");
    C.innerHTML = tempInC;

}

function Rectangle(){
    length = document.getElementById("length").value;
    breadth = document.getElementById("breadth").value;

    areaV = length* breadth;
    perimeterV = parseInt(2*length)+parseInt(2*breadth);

    area = document.getElementById("area");
    perimeter = document.getElementById("perimeter");

    area.innerHTML = areaV;
    perimeter.innerHTML = perimeterV;
}