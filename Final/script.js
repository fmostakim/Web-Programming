console.log("Hello from Javascript");

let name = "Rahim";
console.log(name);



name = "karim";
console.log(name);


const university = "UIU";

console.log(university);

if(name == "Rahim")
    console.log("valid user");
else
    console.log("Invalid user");

let marks = 75;
if(marks >= 90)
    console.log("A");
else if(marks >= 80 && marks < 90)
    console.log("A-");
else if(marks >=70 && marks <80)
    console.log("B+");
else if(marks >= 60 && marks < 70)
    console.log("B");
else
    console.log("F");
    


console.log(5 == 5);

console.log("5" == 5);

console.log("5" === 5);
console.log("5" === "5");
console.log("5" === ".5");

for(let i = 1; i<=5; i++)
    console.log(i);

function greet(person_name){
    console.log("Hi, "+person_name);
}

greet("Mostakim");

function greetv2(person_name){
    return "Hi, " + person_name;
}

console.log(greetv2("Zero"));


let password = "abc@123";

console.log(password.toUpperCase());
console.log(password.includes("@"));


console.log(/[a-z]/.test(password));
console.log(/[A-Z]/.test(password));
console.log(/[0-9]/.test(password));
console.log(/[@#!$%^&*_]/.test(password));


function checkStrength(pass){
    let score = 0;
    if(pass.length > 8)
        score += 20;
    if(/[a-z]/.test(pass))
        score += 10;
    if(/[A-Z]/.test(pass))
        score += 10;
    if(/[0-9]/.test(pass))
        score += 15;
    if(/[!@#$%&*_]/.test(pass))
        score += 20;


    return score
}



console.log(checkStrength("hello@1234"));

function checkPassword(){
    let userPassword = document.getElementById("inputPassword").value;
    let password_score = checkStrength(userPassword);
    document.getElementById("result").innerHTML = "Password Strength is " + password_score;
}

const btnPasswordCheck = document.getElementById("inputBtn");

btnPasswordCheck.addEventListener("click", checkPassword);

