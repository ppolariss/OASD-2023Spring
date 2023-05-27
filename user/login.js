document.getElementById("return-button").onclick = function () {
    location.replace('../home.html')
};


document.getElementById("login-in").onclick = function () {
    var form = document.getElementById("loginForm");
    // form.append("aa","a");
    // alert(Object.keys(form))

    function sendData() {
        var xhr = new XMLHttpRequest();

        var FD = new FormData(form);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200 || xhr.status == 304) {
                    // alert("Request was successful:" + xhr.responseText);
                    alert("登录成功");
                }
                else {
                    // alert("Request was unsuccessful:" + xhr.statusText);
                    alert("登录失败，" + xhr.responseText)
                }
            }
        }
        xhr.open("post", "./login.php", true);
        xhr.send(FD);

    }


    // alert(Object.keys(form));
    sendData();
    // ...然后接管表单的提交事件
    // form.addEventListener("submit", function (event) {
    //     alert(114514);
    //     event.preventDefault();

    //     sendData();
    // });
};

function register() {
    var xhr = new XMLHttpRequest();
    var FD = new FormData(document.getElementById("register_form"));
    if (FD.get("register_password") != FD.get("register_password_confirm"))
    {
        alert("两次输入密码不同")
        return;
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                // alert("Request was successful:" + xhr.responseText);
                alert("注册成功");
                document.getElementById("register_form").reset();
                tolog();
            }
            else {
                // alert("Request was unsuccessful:" + xhr.statusText);
                alert("登录失败，" + xhr.responseText)
            }
        }
    }
    xhr.open("post", "./register.php", true);
    xhr.send(FD);
}

document.getElementById("register_form").addEventListener("submit", function (event) {
    event.preventDefault();
    register();
});

document.getElementById("change_pwd").onclick = function () {
    var form = document.getElementById("password_form");

    function sendData() {
        var xhr = new XMLHttpRequest();

        var FD = new FormData(form);
        if (FD.get("password_new_password") != FD.get("password_check_password"))
        {
            alert("两次输入密码不同")
            return;
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200 || xhr.status == 304) {
                    alert("修改密码成功");
                    tolog();
                }
                else {
                    alert("修改密码失败，" + xhr.responseText)
                }
            }
        }
        xhr.open("post", "./changePwd.php", true);
        xhr.send(FD);
    }

    sendData();
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