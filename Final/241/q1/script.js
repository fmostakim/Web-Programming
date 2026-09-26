function calculateResult(){
    let cm = parseFloat(document.getElementById("height").value);
    let lb = parseFloat(document.getElementById("weight").value);

    if(isNaN(cm) || isNaN(lb) || cm<=0 || lb<=0){
        alert("Please enter valid height and weight!");
        return;
    }

    let metre = cm/100;
    let kg = lb/2.2046;

    let calculationResult = kg / (metre * metre);

    let status = "";
    if(calculationResult > 0 && calculationResult < 20)
        status = "bad";
    else if(calculationResult >= 20 && calculationResult <= 30)
        status = "not bad";
    else if(calculationResult > 30)
        status = "good";

    document.getElementById("result").innerHTML = "Calculation Result: <b>"+calculationResult.toFixed(2) +"</b>";

    document.getElementById("status").innerHTML = "Status: <b>"+status+"</b>";
}