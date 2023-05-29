window.onload = function() {
    xhr = new XMLHttpRequest();
    xhr.open('GET', './getAllArt.php', true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                // console.log(xhr.responseText);
                // alert("发布成功");
                var artList = JSON.parse(xhr.responseText);
                var artListDiv = document.getElementById("single-art");
                for (var i = 0; i < artList.length; i++) {
                    var artDiv = document.createElement("div");
                    artDiv.className = "art";
                    artDiv.innerHTML = "<div class=\"art-img\"><img src=\"./artPic/" + artList[i].pic + "\" alt=\"\"></div>" + 
                    "<div class=\"art-info\"><div class=\"art-name\">" + artList[i].art_name +
                        "</div><div class=\"art-author\">" + artList[i].author +
                        "</div><div class=\"art-price\">￥" + artList[i].price +
                        "</div><div class=\"art-description\">" + artList[i].description +
                        "</div><div class=\"art-weight\">" + artList[i].weight +
                        "</div><div class=\"art-size\">" + artList[i].size +
                        "</div><div class=\"art-year\">" + artList[i].art_year +
                        "</div><div class=\"art-style\">" + artList[i].style + "</div></div>";
                    artListDiv.appendChild(artDiv); 
                }
            }
            else {
                alert("发布失败，" + xhr.responseText)
            }
        }
    }
}