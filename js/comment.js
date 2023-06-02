document.title = "艺术品商城";
var searchUrl = window.location.href;
var searchData = searchUrl.split("="); //截取 url中的“=”,获得“=”后面的参数
var art_id = decodeURI(searchData[1]); //decodeURI解码
console.log(art_id);
window.onload = function () {
    // 先根据floor_id排序 倒序
    // 遍历，如果hole_id不同，就新建一个div id=hole-hole_id
    // 如果hole_id相同，就在这个div里面append一个div id=comment-comment_id

    xhr = new XMLHttpRequest();
    xhr.open("GET", "../php/getArtComment.php?art_id=" + art_id, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                console.log(xhr.responseText)
                res = JSON.parse(xhr.responseText);
                art = res["art"];
                document.getElementById("art-img").src = "../pic/artPic/" + art.pic;
                document.getElementById("art-name").innerText = art.art_name;

                comments = res["comment"];
                console.log(comments);
                if (!Array.isArray(comments)) {
                    console.log("获取评论不是数组");
                }
                comments.sort(sortFloor)
                // console.log(comments);


                last_hole_id = -1;
                node = document.getElementById("comment-area")
                for (const comment of comments) {
                    if (comment["hole_id"] != last_hole_id) {
                        newNode = document.createElement("span");
                        newNode.id = "hole-" + comment["hole_id"];
                        newNode.className = "hole";
                        document.getElementById("comment-area").appendChild(newNode);
                        node = newNode

                        newNode = document.createElement("span");
                        newNode.className = "hole-id"
                        newNode.innerText = "#" + comment["hole_id"]
                        node.appendChild(newNode);

                        last_hole_id = comment["hole_id"];
                    }
                    node.appendChild(transferToFloor(comment));
                }
                // console.log(xhr.responseText);
                addLikeButton();
                addDeleteButton();
                addReplyButton();
            }
            else {
                alert("获取评论失败" + xhr.responseText);
            }
        }
    }

    document.getElementById("post-comment").onclick = () => {
        content = document.getElementById("comment-text").value;
        xhr = new XMLHttpRequest();
        if (art_id == null) {
            alert("评论失败，未获取到艺术品");
            return;
        }
        xhr.open("GET", "../php/postComment.php?art_id=" + art_id + "&content=" + content, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200 || xhr.status == 304) {
                    console.log("评论成功");
                    location.reload();
                }
                else {
                    alert("评论失败，" + xhr.responseText);
                }
            }
        }
    }


}



// add new floor
transferToFloor = (comment) => {
    this_hole_id = comment["hole_id"];
    var floor = document.createElement("div");
    floor.className = "floor";
    if (comment.is_deleted == 1) {
        comment.content = "该评论已删除";
    }
    htmlStr = "<span data-floor_id=" + comment.floor_id + ">" +
        "<div class=\"floor-number\">##" + comment.floor_id + "</div><div class=\"content\">" + comment.content +
        "</div><div class=\"userid\">用户id：" + comment.user_id +
        "</div><div class=\"likes\">点赞：" + comment.likes + "</div><div class=\"create-at\">时间：" + comment.create_at + "</div>";
    if (comment.is_liked) {
        htmlStr += "<button class=\"like\" style=\"background-color: pink;\">喜欢</button>";
    } else {
        htmlStr += "<button class=\"like\">喜欢</button>";
    }
        
    if (comment.user_id == localStorage.getItem("user_id")) {
        htmlStr += "<button class=\"delete-comment\">删除</button>";
    }
    // console.log("user_id:" + comment.user_id);
    // console.log("local:" + localStorage.getItem("user_id"));
    htmlStr += "<div class =\"reply\"><textarea type=\"text\" id=\"reply-floor-" + comment.floor_id + "\" name=\"reply-text\"></textarea>" +
        "<button class=\"reply-comment\">回复</button></div></span>";
    floor.innerHTML = htmlStr;
    return floor;
}

// like a floor
addLikeButton = () => {
    like_buttons = document.getElementsByClassName("like")
    // console.log(like_buttons.length)
    for (like_button of like_buttons) {
        like_button.onclick = function () {
            xhr = new XMLHttpRequest();
            floor_id = this.parentNode.getAttribute("data-floor_id");
            console.log(floor_id);
            if (floor_id == null) {
                alert("点赞失败，未获取到艺术品");
                return;
            }
            xhr.open("GET", "../php/likeComment.php?floor_id=" + floor_id, true);
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200 || xhr.status == 304) {
                        console.log("点赞成功");
                        location.reload();
                    }
                    else {
                        alert("点赞失败，" + xhr.responseText);
                    }
                }
            }
        }
    }
}

addDeleteButton = () => {
    delete_buttons = document.getElementsByClassName("delete-comment")
    console.log(delete_buttons.length)
    for (delete_button of delete_buttons) {
        delete_button.onclick = function () {
            xhr = new XMLHttpRequest();
            floor_id = this.parentNode.getAttribute("data-floor_id");
            if (floor_id == null) {
                alert("删除失败，未获取到艺术品");
                return;
            }
            xhr.open("GET", "../php/deleteComment.php?floor_id=" + floor_id, true);
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200 || xhr.status == 304) {
                        console.log("删除成功");
                        location.reload();
                    }
                    else {
                        alert("删除失败，" + xhr.responseText);
                    }
                }
            }
        }
    }
}


addReplyButton = () => {
    reply_buttons = document.getElementsByClassName("reply-comment")
    console.log(reply_buttons.length)
    for (reply_button of reply_buttons) {
        reply_button.onclick = function () {
            xhr = new XMLHttpRequest();
            floor_id = this.parentNode.parentNode.getAttribute("data-floor_id");
            content = document.getElementById("reply-floor-" + floor_id).value;
            // hole_id = this.parentNode.parentNode.parentNode.parentNode.getAttribute("id").split("-")[1];
            xhr.open("GET", "../php/replyComment.php?art_id=" + art_id + "&content=" + content + "&floor_id=" + floor_id, true);
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200 || xhr.status == 304) {
                        console.log("回复成功");
                        location.reload();
                    }
                    else {
                        alert("回复失败，" + xhr.responseText);
                    }
                }
            }
        }
    }
}



sortFloor = (a, b) => {
    if (a["hole_id"] > b["hole_id"])
        return 1;
    else if (a["hole_id"] < b["hole_id"])
        return -1;
    else {
        if (a["floor_id"] > b["floor_id"])
            return 1;
        else if (a["floor_id"] < b["floor_id"])
            return -1;
        else
            return 0;
    }
}