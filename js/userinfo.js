document.title = "艺术品商城";
window.onload = function () {
    xhr = new XMLHttpRequest();
    xhr.open('GET', '../php/getUserInfo.php', true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                console.log(xhr.responseText);
                res = JSON.parse(xhr.responseText)
                var userInfo = res.info
                document.getElementById("user-id").innerText = userInfo.id;
                document.getElementById("username").innerText = userInfo.username;
                document.getElementById("email").innerText = userInfo.email;
                document.getElementById("phone").innerText = userInfo.phone;
                document.getElementById("address").innerText = userInfo.address;
                document.getElementById("gender").innerText = userInfo.gender;
                document.getElementById("birthday").innerText = userInfo.birthday;
                document.getElementById("nationality").innerText = userInfo.nationality;
                document.getElementById("balance").innerText = userInfo.balance;
                art = res.art
                for (var i = 0; i < art.length; i++) {
                    if (art[i].is_sold == 0) {
                        var artListDiv = document.getElementById("released");
                        artListDiv.appendChild(transferToArtDom(art, i));
                    }
                    else {
                        var artListDiv = document.getElementById("sold");
                        artListDiv.appendChild(transferToArtDom(art, i));
                    }
                }
                purchase = res.purchase
                for (var i = 0; i < purchase.length; i++) {
                    var artListDiv = document.getElementById("purchased");
                    artListDiv.appendChild(transferToArtDom(purchase, i));
                }
                var picList = document.getElementsByClassName("art-pic");
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

                changeButton()
            }
        }
    }

    document.getElementById("recharge").onclick = function () {
        amount = document.getElementById("amount").value
        if (!Number.isInteger(parseFloat(amount) || !(amount > 0))) {
            alert("充值金额需为正整数")
            return
        }
        result = window.confirm("确定充值" + amount + "元到您的账户吗");
        if (!result)
            return;
        xhr = new XMLHttpRequest();
        xhr.open('GET', '../php/recharge.php?amount=' + amount, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200 || xhr.status == 304) {
                    alert("充值成功")
                    location.reload()
                }
                else {
                    alert("充值失败，" + xhr.responseText)
                }
            }
        }
    }



    rechargeDialog = document.getElementById("rechargeDialog")

    if (typeof rechargeDialog.showModal !== 'function') {
        rechargeDialog.hidden = true;
    }

    document.getElementById("charge").addEventListener('click', () => {
        if (typeof rechargeDialog.showModal === "function") {
            rechargeDialog.showModal();
        } else {
            alert("Sorry, the <dialog> API is not supported by this browser.");
        }
    });

}

changeButton = () => {
    released_arts = document.getElementById("released").children
    // console.log(released_arts.length)
    // console.log(document.getElementsByClassName("art").length)
    for (released_art of released_arts) {
        changeButton = document.createElement("button")
        changeButton.innerText = "修改"
        changeButton.className = "change"
        changeButton.onclick = (() => {
            var temp = changeButton
            // closure
            return () => {
                // console.log(temp.parentNode.dataset.art_id)
                url = "../html/changeArt.html?art_id=" + temp.parentNode.dataset.art_id
                location.href = url
            }
        })()
        // console.log(released_art.dataset)
        released_art.appendChild(changeButton)
    }
    // for (var i = 0; i < released_arts.length; i++) {
    //     released_arts[i].appendChild(changeButton)
    // }
}
changeArt = (thisNode) => {
    return (thisNode) => {
        // console.log(this.parentNode.dataset.art_id)
        console.log(thisNode.className)
        console.log(thisNode.parentNode.className)
    }
}

// // 一个art添加
// // 重构到art.js
// transferToArt = () => { }