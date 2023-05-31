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
                // console.log(xhr.responseText);
                alert("发布成功");
            }
            else {
                alert("发布失败，" + xhr.responseText)
            }
        }
    }
    xhr.open("post", "../php/release.php", true);
    xhr.send(FD);
}


form.addEventListener("submit", function (event) {
    if(clickFast())
        return;
    event.preventDefault();
    release();
});

document.getElementById("pic").addEventListener("change", event => {
    const img = event.target.files[0]
    const imgUrl = URL.createObjectURL(img)
    console.log(imgUrl)
    const imgDom = document.getElementById("release-img")
    imgDom.src = imgUrl
    document.getElementById("big-img").src = imgUrl
})



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















window.onload = function () {
    //需求：鼠标放到小盒子上，让大盒子里面的图片和我们同步等比例移动。
    //技术点：οnmοuseenter==onmouseover 第一个不冒泡
    //技术点：οnmοuseleave==onmouseout  第一个不冒泡
    //步骤：
    //1.鼠标放上去显示盒子，移开隐藏盒子。
    //2.老三步和新五步（黄盒子跟随移动）
    //3.右侧的大图片，等比例移动。

    //0.获取相关元素
    var box = document.getElementsByClassName("box")[0];
    var small = box.firstElementChild || box.firstChild;
    var big = box.children[1];
    var mask = small.children[1];
    var bigImg = big.children[0];

    //1.鼠标放上去显示盒子，移开隐藏盒子。(为小盒子绑定事件)
    small.onmouseenter = function () {
        //封装好方法调用：显示元素
        show(mask);
        show(big);
    }
    small.onmouseleave = function () {
        //封装好方法调用：隐藏元素
        hide(mask);
        hide(big);
    }

    //2.老三步和新五步（黄盒子跟随移动）
    //绑定的事件是onmousemove，而事件源是small(只要在小盒子上移动1像素，黄盒子也要跟随)
    small.onmousemove = function (event) {
        //新五步
        event = event || window.event;

        //想要移动黄盒子，必须要知道鼠标在small小图中的位置。
        var pagex = event.pageX || scroll().left + event.clientX;
        var pagey = event.pageY || scroll().top + event.clientY;

        //x：mask的left值，y：mask的top值。
        var x = pagex - box.offsetLeft - mask.offsetWidth / 2; //除以2，可以保证鼠标mask的中间
        var y = pagey - box.offsetTop - mask.offsetHeight / 2;

        //限制换盒子的范围
        //left取值为大于0，小盒子的宽-mask的宽。
        if (x < 0) {
            x = 0;
        }
        if (x > small.offsetWidth - mask.offsetWidth) {
            x = small.offsetWidth - mask.offsetWidth;
        }
        //top同理。
        if (y < 0) {
            y = 0;
        }
        if (y > small.offsetHeight - mask.offsetHeight) {
            y = small.offsetHeight - mask.offsetHeight;
        }

        //移动黄盒子
        console.log(small.offsetHeight);
        mask.style.left = x + "px";
        mask.style.top = y + "px";

        //3.右侧的大图片，等比例移动。
        //如何移动大图片？等比例移动。
        //    大图片/大盒子 = 小图片/mask盒子
        //    大图片走的距离/mask走的距离 = （大图片-大盒子）/（小图片-黄盒子）
//                var bili = (bigImg.offsetWidth-big.offsetWidth)/(small.offsetWidth-mask.offsetWidth);

        //大图片走的距离/mask盒子都的距离 = 大图片/小图片
        var bili = bigImg.offsetWidth / small.offsetWidth;

        var xx = bili * x;  //知道比例，就可以移动大图片了
        var yy = bili * y;

        bigImg.style.marginTop = -yy + "px";
        bigImg.style.marginLeft = -xx + "px";
    }
}


//显示和隐藏
function show(ele) {
    ele.style.display = "block";
}

function hide(ele) {
    ele.style.display = "none";
}

function scroll() {  // 开始封装自己的scrollTop
    if (window.pageYOffset != null) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if (document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}

