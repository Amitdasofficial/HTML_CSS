const formOpenBtn=document.querySelector("#form-open"),
home =document.querySelector(".home"),
formContainer=document.querySelector(".form-container"),
formCloseBtn=document.querySelector(".form_close"),
signupBtn=document.querySelector("#signup"),
loginBtn=document.querySelector("#login"),
pwShowHider=document.querySelectorAll(".pw_hider");

formOpenBtn.addEventListener("click",()=>home.classList.add("show"))
formCloseBtn.addEventListener("click",()=>home.classList.remove("show"))

pwShowHider.forEach((icon)=>{
    icon.addEventListener("click",()=>{
        let getPwInput=icon.parentElement.querySelector("input");
       if(getPwInput.type==="password"){
        getPwInput.type="text";
        icon.classList.replace("uil-eye-slash","uil-eye");
       }
       else{
        getPwInput.type="password";
        icon.classList.replace("uil-eye","uil-eye-slash");
       }
    });
});

signupBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    formContainer.classList.add("active");
});

loginBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    formContainer.classList.remove("active");
});



function validateLoginForm()
{
    var email=document.getElementById("login-email").value;
    var password=document.getElementById("login-password").value;
    if(email.trim()===""||password.trim()==="")
    {
        alert("Please fill in all the fields");
        return false;
    }
    return true;

}

function validateSignupForm() {
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
    var confirmPassword = document.getElementById("signup-confirm-password").value;
    if (email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
        alert("Please fill in all the fields");
        return false;
      }
    
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
      }
    
    
      return true;
    }  