// import { transferToArtDom } from './art/art.js';
// import "./art/art.js"
// importScripts('./art/art.js')

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
                            url = "artDetail.html?art_id=" + pic.parentNode.parentNode.dataset.art_id
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
}