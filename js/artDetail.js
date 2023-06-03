art_id = null;
window.onload = function () {
    //获取 上一个页面传来的参数 好像可以写在前面
    var searchUrl = window.location.href;
    var searchData = searchUrl.split("="); //截取 url中的“=”,获得“=”后面的参数
    var art_id = decodeURI(searchData[1]); //decodeURI解码
    xhr = new XMLHttpRequest();
    xhr.open("GET", "../php/getSingleArt.php?art_id=" + art_id, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                // console.log(xhr.responseText);
                art = JSON.parse(xhr.responseText);
                // document.getElementById("art_id").innerText=art.art_id;
                // if (art.pic == null) {
                //     art.alt = "不祥";
                // } else {
                art_id = art.art_id;
                if(art.is_sold)
                document.getElementById("sold").innerText = "已售罄";
                document.getElementById("art-pic").src = "../pic/artPic/" + art.pic;
                document.getElementById("art-name").innerText += art.art_name;
                document.getElementById("author").innerText += art.author;
                document.getElementById("price").innerText += art.price;
                document.getElementById("description").innerText += art.description;
                document.getElementById("weight").innerText += art.weight;
                document.getElementById("size").innerText += art.size;
                document.getElementById("art-era").innerText += art.art_era;
                document.getElementById("style").innerText += art.style;
                document.getElementById("visits").innerText += art.visits;
                // document.getElementById("is-sold").innerText += art.is_sold;
                document.getElementById("create-at").innerHTML += art.create_at;
                // console.log(xhr.responseText);
            }
            else {
                alert("获取艺术品失败" + xhr.responseText);
            }
        }
    }

    // if (window.location.href.split("?")[0].endsWith("changeArt.html"))
    //     return

    document.getElementById("add-cart").onclick = function () {
        xhr = new XMLHttpRequest();
        if (art_id == null) {
            alert("添加购物车失败，未获取到艺术品");
            return;
        }
        xhr.open("GET", "../php/addCart.php?art_id=" + art_id, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200 || xhr.status == 304) {
                    alert("添加购物车成功");
                }
                else {
                    alert("添加购物车失败，" + xhr.responseText);
                }
            }
        }
    }


    document.getElementById("comment").onclick = function () {
        if (art_id == null) {
            alert("查看评论失败，未获取到艺术品");
            return;
        }
        url = "../html/comment.html?art_id=" + art_id
        window.location.href = url;
    }


    document.getElementById("purchase").onclick = function () {
        if (art_id == null) {
            alert("购买失败，未获取到艺术品");
            return;
        }
        array = new Array();
        array.push(art_id)
        purchase(array);
    }

    document.getElementById("return-button").onclick=()=>{
        window.location.href="../html/art.html";
    }
}

function purchase(art_arr) {
    // json format
    art_arr = JSON.stringify(art_arr);
    xhr = new XMLHttpRequest();
    xhr.open("GET", "../php/purchase.php?art_id_list=" + art_arr, true);
    xhr.send();
    // xhr = new XMLHttpRequest();
    // xhr.open("POST", "../cart/purchase.php", true);
    // xhr.send(art_arr);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                alert("购买成功");
                // window.location.href = "../html/cart.html";
                location.reload();
                console.log(xhr.responseText);
            }
            else {
                alert("购买失败，" + xhr.responseText);
            }
        }
    }
}


