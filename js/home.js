// import { transferToArtDom } from './art/art.js';
// import "./art/art.js"
// importScripts('./art/art.js')

document.title = "艺术品商城";

window.onload = function () {
    xhr = new XMLHttpRequest();
    xhr.open('GET', '../php/getLatestArt.php?art_number=5', true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                console.log(xhr.responseText);
                var artList = JSON.parse(xhr.responseText);
                var artListDiv = document.getElementById("latest-art");
                for (var i = 0; i < artList.length; i++) {
                    artListDiv.appendChild(transferToArtDom(artList, i));
                }

                var picList = document.getElementsByClassName("art-pic");
                console.log(picList.length);
                for (var i = 0; i < picList.length; i++) {
                    var pic = picList[i];
                    pic.onclick = (function (pic) {
                        return function () {
                            console.log(pic.parentNode.parentNode.dataset.art_id);
                            url = "../html/artDetail.html?art_id=" + pic.parentNode.parentNode.dataset.art_id
                            window.location.href = url;
                        };
                    })(pic);
                }
            }
            else {
                alert("获取最新艺术品失败，" + xhr.responseText)
            }
        }
    }


    document.getElementById("search").onclick = function () {
        url = "../html/art.html?search_content=" + document.getElementById("search-content").value + "&search_assign=all"
        location.href = url;
    }

    if (localStorage.getItem("username") != null) {
        displaysome();
    }
    else {
        hidesome();
    }

}



logout = () => {
    localStorage.removeItem("username")
    localStorage.removeItem("user_id")
}


displaysome = () => {
    document.getElementById("sayHello").innerText="你好，"+localStorage.getItem("username")
    document.getElementById("cart-display").style.display = "block";
    document.getElementById("release-display").style.display = "block";
    document.getElementById("userinfo-display").style.display = "block";
    document.getElementById("login-display").style.display = "none";
    document.getElementById("logout-display").style.display = "block";
}

hidesome = () => {
    document.getElementById("sayHello").display="none"
    document.getElementById("cart-display").style.display = "none";
    document.getElementById("release-display").style.display = "none";
    document.getElementById("userinfo-display").style.display = "none";
    document.getElementById("logout-display").style.display = "none";
    document.getElementById("login-display").style.display = "block";
}


document.getElementById("logout").onclick = function () {
    logout();
    hidesome();
}


logout = () => {
    localStorage.removeItem("username")
    localStorage.removeItem("user_id")
}