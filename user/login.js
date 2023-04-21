document.getElementById("return-button").onclick = function () {
    location.replace('../home.html')
};

document.getElementById("login-in-button").onclick = function () {
    location.replace('../home.html')
};


var tlog = document.getElementsByClassName("to-login-in");
var tpsw = document.getElementsByClassName("to-password");
var treg = document.getElementsByClassName("to-register");

var log = document.getElementsByClassName("login-box")[0];
var reg = document.getElementsByClassName("register-box")[0];
var psw = document.getElementsByClassName("password-box")[0];

tlog[0].onclick = tolog;
tlog[1].onclick = tolog;

function tolog() {
    log.style.display = "block"
    reg.style.display = "none"
    psw.style.display = "none"
}

tpsw[0].onclick = function () {
    psw.style.display = "block"
    reg.style.display = "none"
    log.style.display = "none"
}

treg[0].onclick = function () {
    reg.style.display = "block"
    log.style.display = "none"
    psw.style.display = "none"
}