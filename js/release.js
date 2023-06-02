const form = document.getElementById("releaseForm")
document.title = "艺术品商城";
form.addEventListener("submit", function (event) {
    if (clickFast())
        return;
    event.preventDefault();

    FD = new FormData(form)
    if (!releaseCheck(FD))
        return;

    xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                console.log(xhr.responseText);
                URL = "../html/artDetail.html?art_id=" + xhr.responseText;
                location.href = URL;
                alert("发布成功");
            }
            else {
                alert("发布失败，" + xhr.responseText)
            }
        }
    }
    xhr.open("post", "../php/release.php", true);
    xhr.send(FD);
});



window.onload = function () {
    enlargePic()
}