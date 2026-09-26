function calculateBill(){
    let location = document.getElementById("location").value;
    let unitsInput = document.getElementById("units").value;
    let units = parseFloat(unitsInput);

    let selectedAreaElement = document.querySelector('input[name="area"]:checked');
    let selectedArea = selectedAreaElement ? selectedAreaElement.value : "";

    if(location === ""){
        alert("Error: Please select a Location!");
        return;
    }

    if(selectedArea === ""){
        alert("Error: please choose an area type (Urbar or Rural)!");
        return;
    }
    if(isNaN(units) || units <=0){
        alert("Error: Unit Consumed must be a positive number!");
        return;
    }
    let rate = 0;
    if(location === "Dhaka"){
        if(selectedArea ==="Urban"){
            rate = 7.5;
        }else{
            rate = 6.5;
        }
    }else if(location === "Chattogram"){
        if(selectedArea === "Urban"){
            rate = 7.0;
        }else{
            rate = 6.0;
        }
    }else{
        if(selectedArea === "Urban"){
            rate = 6.5;
        }else{
            rate = 5.5;
        }
    }

    let baseBill = units * rate;

    let surcharge = 0;
    if(baseBill < 500)
        surcharge = 0;
    else if(baseBill >= 500 && baseBill <= 1000)
        surcharge = baseBill * 0.05;
    else
        surcharge = baseBill * 0.10;

    let totalBill = baseBill + surcharge;
    alert("Total Bill: "+totalBill.toFixed(2)+" Taka");

}