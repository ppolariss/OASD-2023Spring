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
        if (!validateCode(FD.get("verificationCode"))) {
            alert("验证码错误")
            return
        }
        if (FD.get("login_username") == "") {
            alert("请输入用户名")
            drawPic()
            return
        }
        if (FD.get("login_password") == "") {
            alert("请输入密码")
            drawPic()
            return
        }


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
    if (FD.get("register_password") != FD.get("register_password_confirm")) {
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
        if (FD.get("password_new_password") != FD.get("password_check_password")) {
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



//页面加载时，生成随机验证码
window.onload = function () {
    drawPic();
}

//检查验证码是否正确
function validateCode(verificationCode) {
    if (verificationCode.length <= 0) {
        return false
    }
    else if (verificationCode.toUpperCase() != correctCode.toUpperCase()) {
        console.log(verificationCode)
        console.log(correctCode)
        drawPic()
        return false
    }
    else {
        return true
    }
}



//生成随机数
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
//生成随机颜色RGB分量
function randomColor(min, max) {
    var _r = randomNum(min, max);
    var _g = randomNum(min, max);
    var _b = randomNum(min, max);
    return "rgb(" + _r + "," + _g + "," + _b + ")";
}
//先阻止画布默认点击发生的行为再执行drawPic()方法
document.getElementById("canvas").onclick = function (e) {
    e.preventDefault();
    drawPic()
};
function drawPic() {
    //获取到元素canvas
    var $canvas = document.getElementById("canvas");
    // var _str = "0123456789";//设置随机数库
    var _array = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    var _str = _array.join("");
    var _picTxt = "";//随机数
    var _num = 4;//4个随机数字
    var _width = $canvas.width;
    var _height = $canvas.height;
    var ctx = $canvas.getContext("2d");//获取 context 对象
    ctx.textBaseline = "bottom";//文字上下对齐方式--底部对齐
    ctx.fillStyle = randomColor(180, 240);//填充画布颜色
    ctx.fillRect(0, 0, _width, _height);//填充矩形--画画
    for (var i = 0; i < _num; i++) {
        var x = (_width - 10) / _num * i + 10;
        var y = randomNum(_height / 2, _height);
        var deg = randomNum(-45, 45);
        var txt = _str[randomNum(0, _str.length)];
        _picTxt += txt;//获取一个随机数
        ctx.fillStyle = randomColor(10, 100);//填充随机颜色
        ctx.font = randomNum(16, 40) + "px SimHei";//设置随机数大小，字体为SimHei
        ctx.translate(x, y);//将当前xy坐标作为原始坐标
        ctx.rotate(deg * Math.PI / 180);//旋转随机角度
        ctx.fillText(txt, 0, 0);//绘制填色的文本
        ctx.rotate(-deg * Math.PI / 180);
        ctx.translate(-x, -y);
    }
    for (var i = 0; i < _num; i++) {
        //定义笔触颜色
        ctx.strokeStyle = randomColor(90, 180);
        ctx.beginPath();
        //随机划线--4条路径
        ctx.moveTo(randomNum(0, _width), randomNum(0, _height));
        ctx.lineTo(randomNum(0, _width), randomNum(0, _height));
        ctx.stroke();
    }
    for (var i = 0; i < _num * 10; i++) {
        ctx.fillStyle = randomColor(0, 255);
        ctx.beginPath();
        //随机画原，填充颜色
        ctx.arc(randomNum(0, _width), randomNum(0, _height), 1, 0, 2 * Math.PI);
        ctx.fill();
    }
    correctCode = _picTxt;
    return _picTxt;//返回随机数字符串
}
