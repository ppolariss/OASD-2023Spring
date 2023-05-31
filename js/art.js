window.onload = function () {
    xhr = new XMLHttpRequest();
    xhr.open('GET', '../php/getAllArt.php', true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                // console.log(xhr.responseText);
                var artList = JSON.parse(xhr.responseText);
                var artListDiv = document.getElementById("all-art");
                for (var i = 0; i < artList.length; i++) {
                    artListDiv.appendChild(transferToArtDom(artList, i));
                }
                // single_art = document.getElementById("single-art")
                //  node = single_art.cloneNode(true)
                //  nodeList = node.childNodes
                //  nodeList.get

                var picList = document.getElementsByClassName("art-pic");
                // rnm为什么是0
                console.log(picList.length);
                for (var i = 0; i < picList.length; i++) {
                    // 需要用闭包实现，记录当前的i
                    picList[i].onclick = (() => {
                        var pic = picList[i];
                        return () => {
                            url = "artDetail.html?art_id=" + pic.parentNode.parentNode.dataset.art_id
                            window.location.href = url;
                        }
                    })()
                }
            }
            else {
                alert("获取艺术品失败，" + xhr.responseText)
            }
        }
    }
}