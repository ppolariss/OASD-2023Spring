const releaseButton = document.getElementById('releaseArt');
const releaseDialog = document.getElementById('releaseDialog');

const selectEl = releaseDialog.querySelector('select');
const confirmBtn = releaseDialog.querySelector('#confirmBtn');
const form = document.getElementById("releaseForm")

if (typeof releaseDialog.showModal !== 'function') {
    releaseDialog.hidden = true;
    /* a fallback script to allow this dialog/form to function
       for legacy browsers that do not support <dialog>
       could be provided here.
    */
}

releaseButton.addEventListener('click', () => {
    if (typeof releaseDialog.showModal === "function") {
        releaseDialog.showModal();
    } else {
        alert("Sorry, the <dialog> API is not supported by this browser.");
    }
});

function release() {
    var FD = new FormData(form);
    var pic = FD.get("pic");
    // console.log(pic.files[0])
    isContinue = true
    msgs = document.getElementsByClassName("msg");
    console.log(pic)
    // update msg
    Array.from(msgs).forEach(element => {
        element.innerText = ""
    });
    if (pic.size == 0) {
        throwMsg("pic-msg", "未上传图片")
        isContinue = false
    } else {
        let fileFormat = pic.name.substring(pic.name.lastIndexOf(".")).toLowerCase(); //获取文件后缀
        if (!fileFormat.match(/.png|.jpg|.jpeg|.bmp|.gif/)) {
            throwMsg("pic-msg", "上传错误,文件格式必须为png/jpg/jpeg/bmp/gif")
            isContinue = false
        }
    }
    if (FD.get("art_name") == "") {
        throwMsg("art_name-msg", "请填写艺术品名称")
        isContinue = false
    }
    if (FD.get("author") == "") {
        throwMsg("author-msg", "请填写作者")
        isContinue = false
    }
    if (FD.get("price") == "") {
        throwMsg("price-msg", "请填写艺术品价格")
        isContinue = false
    }
    if (FD.get("description") == "") {
        throwMsg("description-msg", "请填写艺术品描述")
        isContinue = false
    }
    if (FD.get("weight") == "") {
        throwMsg("weight-msg", "请填写艺术品质量")
        isContinue = false
    }
    if (FD.get("size") == "") {
        throwMsg("size-msg", "请填写艺术品尺寸")
        isContinue = false
    }
    if (FD.get("art_year") == "") {
        throwMsg("art_year-msg", "请填写艺术品年代")
        isContinue = false
    }
    if (FD.get("style") == "") {
        throwMsg("style-msg", "请填写艺术品风格")
        isContinue = false
    }
    if (!isContinue)
        return;

    xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                alert("发布成功");
            }
            else {
                alert("发布失败，" + xhr.responseText)
            }
        }
    }
    xhr.open("post", "./release.php", true);
    xhr.send(FD);
}


document.getElementById("pic").addEventListener("change", event => {
    const img = event.target.files[0]
    const imgUrl = URL.createObjectURL(img)
    console.log(imgUrl)
    const imgDom = document.getElementById("release-img")
    imgDom.src = imgUrl
})

form.addEventListener("submit", function (event) {
    event.preventDefault();
    release();
});

function throwMsg(id, msg) {
    document.getElementById(id).innerText = msg
}


// selectEl.addEventListener('change', (e) => {
//     confirmBtn.value = selectEl.value;
// });

// // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
// favDialog.addEventListener('close', () => {
//     outputBox.value = `${favDialog.returnValue} button clicked - ${(new Date()).toString()}`;
// });
