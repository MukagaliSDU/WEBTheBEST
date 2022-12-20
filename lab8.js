const container = document.querySelector(".container"),
    passwordHideShow = document.querySelectorAll(".showHidePw"),
    passwordFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");
passwordHideShow.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        passwordFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";
                passwordHideShow.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else {
                pwField.type = "password";
                passwordHideShow.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})
signUp.addEventListener("click", () => {
    container.classList.add("active");
});
login.addEventListener("click", () => {
    container.classList.remove("active");
});

document.querySelector("form").addEventListener('submit', (e)=>{
    e.preventDefault();
})

function log_php(lastEmail, lastPassword){
    $.ajax({
        url: 'lab9.php',
        type: 'POST',
        data: {email: lastEmail, password: lastPassword},
        success: function (result){
            console.log(result);
            if(result !== "Wrong data!"){
            sessionStorage.setItem('curr_user',result);
                window.location.replace("./homepage.html");
            }
            else window.alert("Wrong login or password")
        },
        error: function (){
            console.log ('error');
            window.alert("errr");
        }
    });
}
function reg_php(email, pass, pass2, name ,age){
    if(pass == pass2){
       
        $.ajax({
            url : 'register.php',
            type : 'POST',
            data: {email: email, password: pass, name: name, age: age},
            success : function (result) {
                console.log (result); // Here, you need to use response by PHP file.
                if(result == "Success!")
                    window.alert("Success") ;
                else window.alert("Wrong input");
            },
            error : function () {
                console.log ("Error");
            }
        });
    }
    else{
        alert("different password inputs!");
    }
}

function checkUser(){
    document.getElementById('myprofile').innerHTML = sessionStorage.getItem('curr_user');
}
function clear(){
sessionStorage.clear();
}