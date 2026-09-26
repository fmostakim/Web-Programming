const target_score = 100;
let attempts = 0;
function checkPassword(){
    const password = document.getElementById("passwordInput").value;
   
    let score = 0;

    if(password.length >= 6){
        score += Math.floor((password.length-6)/2)*10;
    }

    if(/[A-Z]/.test(password)){
        score += 15;
    }
    if(/[a-z]/.test(password)){
        score += 15;
    }
    if(/[0-9]/.test(password)){
        score+=20;
    }
    if(/[!@#$%^&*]/.test(password)){
        score += 25;
    }
    
    let label = "";

   

    if(score >= target_score){
        label = "Perfect Password! <br> <span style = 'color:green;'>Success: Password meets all criteria!</span>"; 
    }else if(score >= 91)
        label = "Very Strong";
    else if(score >= 71)
        label = "Strong";
    else if(score >= 51)
        label = "Medium";
    else if(score >= 31)
        label = "Weak";
    else
        label = "Very Weak";

    if(score < 71)
        attempts++;
    else
        attempts = 0;

    if(attempts > 8 && score < 71)
        label = "Needd Practice! Use uppercase, lowercase, numbers, and special characters.";

    document.getElementById("result").innerHTML = label;

}

const password_button = document.getElementById("BtnPassword");
password_button.addEventListener("click", checkPassword);