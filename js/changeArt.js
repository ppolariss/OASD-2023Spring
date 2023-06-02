art_id = decodeURI(window.location.href.split("=")[1])
const form = document.getElementById("releaseForm")
document.title = "艺术品商城";
window.onload = () => {
    // 获取原来的信息
    xhr = new XMLHttpRequest();
    xhr.open("GET", "../php/getSingleArt.php?art_id=" + art_id, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                art = JSON.parse(xhr.responseText);
                // document.getElementById("pic").src = "../pic/artPic/" + art.pic
                document.getElementById("release-img").src ="../pic/artPic/" + art.pic
                document.getElementById("big-img").src ="../pic/artPic/" + art.pic
                document.getElementById("art_name").value = art.art_name
                document.getElementById("author").value = art.author
                document.getElementById("price").value = art.price
                document.getElementById("description").value = art.description
                document.getElementById("weight").value = art.weight
                document.getElementById("size").value = art.size
                document.getElementById("art_year").value = art.art_era
                document.getElementById("style").value = art.style
            }
            else {
                alert("获取艺术品失败" + xhr.responseText);
            }
        }
    }

    // 获得表单
    form.addEventListener("submit", function (event) {
        if (clickFast())
            return;
        event.preventDefault();

        var FD = new FormData(form)

        // 检验
        if (!releaseCheck(FD))
            return;
            console.log(FD.get("pic"))
            console.log(art_id)
        xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200 || xhr.status == 304) {
                    console.log(xhr.responseText);
                    // URL = "../html/artDetail.html?art_id=" + xhr.responseText;
                    // location.href = URL;
                    alert("修改成功");
                }
                else {
                    alert("发布失败，" + xhr.responseText)
                }
            }
        }
        xhr.open("post", "../php/changeArt.php", true);
        FD.append("art_id", art_id)
        xhr.send(FD);
    });


    enlargePic();
}




