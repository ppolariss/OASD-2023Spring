document.title = "艺术品商城";
window.onload = function () {
    xhr = new XMLHttpRequest();
    xhr.open("GET", "../php/getCart.php", true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                cart = JSON.parse(xhr.responseText);
                console.log(cart);
                node = document.getElementById("all-cart")

                for (var i = 0; i < cart.length; i++) {
                    node.appendChild(transferToArtDom(cart, i));
                }

                var picList = document.getElementsByClassName("art-pic");
                console.log(picList.length);
                for (var i = 0; i < picList.length; i++) {
                    var pic = picList[i];
                    pic.onclick = () => {
                        url = "artDetail.html?art_id=" + pic.parentNode.parentNode.dataset.art_id
                        window.location.href = url;
                    }
                }
                modifyCart()
            }
        }
    }
}




modifyCart = () => {
    carts = document.getElementsByClassName("art");
    for (const single_cart of carts) {
        newNode = document.createElement("input");
        newNode.type = "checkbox";
        newNode.className = "checkCart";
        newNode.value = single_cart.dataset.art_id;
        single_cart.appendChild(newNode);
    }
}

// is_sold


document.getElementById("submit").onclick = () => {
    if(!confirm("确认购买？")) return;
    var checkCart = document.getElementsByClassName("checkCart");
    var cartList = [];
    for (var i = 0; i < checkCart.length; i++) {
        if (checkCart[i].checked) {
            cartList.push(checkCart[i].value);
        }
    }
    if (cartList.length == 0) {
        alert("请选择要购买的艺术品");
        return;
    }
    console.log(JSON.stringify(cartList));
    xhr = new XMLHttpRequest();
    xhr.open("GET", "../php/purchase.php?art_id_list=" + JSON.stringify(cartList), true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                console.log(xhr.responseText);
                alert("购买成功");
                // window.location.reload();
            }
            else {
                alert("购买失败，" + xhr.responseText);
            }

        }
    }

    // for (var pair of FD.entries()) {
    //     console.log(pair[0] + ": " + pair[1]);
    // }
}



document.getElementById("delete").onclick = () => {
    var checkCart = document.getElementsByClassName("checkCart");
    var cartList = [];
    for (var i = 0; i < checkCart.length; i++) {
        if (checkCart[i].checked) {
            cartList.push(checkCart[i].value);
        }
    }
    if (cartList.length == 0) {
        alert("请选择要删除的艺术品");
        return;
    }
    // console.log(JSON.stringify(cartList));
    xhr = new XMLHttpRequest();
    xhr.open("GET", "../php/minusCart.php?art_id_list=" + JSON.stringify(cartList), true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                console.log(xhr.responseText);
                alert("删除成功");
                // window.location.reload();
            }
            else {
                alert("删除失败，" + xhr.responseText);
            }

        }
    }
}