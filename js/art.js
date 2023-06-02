document.title = "艺术品商城";
var searchUrl = window.location.href;
// var searchData = searchUrl.split("=","&");
// http://localhost:5500/html/art.html?search_content=1&search_assign=description
var searchData = searchUrl.split(/(=|&)/);
var search_content = decodeURI(searchData[2]);
console.log(search_content);
var search_assign = decodeURI(searchData[6]);
console.log(search_assign);
var sort_method = decodeURI(searchData[10]);
console.log(sort_method)
var way = decodeURI(searchData[12]);
console.log(way)

var maxPage = 1
var thisPage = 1
var artNumOfPage = 10
var artLength = 0

window.onload = function () {
    if (search_content != "undefined") {
        query(search_assign)
    }
    else noQuery()

    xhr.onreadystatechange = xhrChange

    document.getElementById("search").onclick = search
    document.getElementById("asc").onclick = sortMethod("asc")
    document.getElementById("desc").onclick = sortMethod("desc")
}

xhrChange = () => {
    if (xhr.readyState == 4) {
        if (xhr.status == 200 || xhr.status == 304) {
            console.log(xhr.responseText);
            artList = JSON.parse(xhr.responseText);
            console.log(artList)
            console.log(typeof sort_method)
            // 为什么是string???
            if (sort_method != "undefined")
                artList.sort(sortByMethod)
            artLength = artList.length
            maxPage = Math.ceil(artLength / artNumOfPage)
            if(maxPage==0)
                maxPage = 1;
            jumpToPage(1)
            document.getElementById("totalPage").innerText = maxPage

            if (artLength != 0)
                document.getElementById("totalResult").innerText = "共有" + artLength + "条搜索结果"
            else
                document.getElementById("totalResult").innerText = "无符合条件的艺术品"
        }
        else {
            alert("获取艺术品失败，" + xhr.responseText)
        }
    }
}

sortMethod = (way) => {
    return () => {
        // document.getElementById("all-art").innerHTML = ""
        radios = document.getElementsByClassName("method")
        // console.log(radios.length)
        var method
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                method = radios[i].value
            }
        }
        if (method === undefined) {
            alert("请选择排序方式")
            return
        }
        radios = document.getElementsByClassName("assign")
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                search_assign = radios[i].value
            }
        }
        search_content = document.getElementById("search-content").value
        url = "../html/art.html?search_content=" + encodeURI(search_content) + "&search_assign=" + encodeURI(search_assign) + "&sort_method=" + encodeURI(method) + "&" + encodeURI(way)
        window.location.href = url
    }
}

sortByMethod = (a, b) => {
    if (sort_method === "price")
        result = a.price - b.price
    if (sort_method === "visits")
        result = a.visits - b.visits
    if (sort_method === "create") {
        if (a.create_at > b.create_at) result = 1
        else if (a.create_at == b.create_at) result = 0
        else result = -1
    }
    if (sort_method === "era")
        result = a.art_era - b.art_era
    if (way === "asc")
        return result
    else return 0 - result
}

search = () => {
    document.getElementById("all-art").innerHTML = ""
    radios = document.getElementsByClassName("assign")
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            search_assign = radios[i].value
        }
    }
    search_content = document.getElementById("search-content").value
    url = "../html/art.html?search_content=" + encodeURI(search_content) + "&search_assign=" + encodeURI(search_assign)
    location.href = url
    // query(search_assign)
    // xhr.onreadystatechange = xhrChange
}


noQuery = () => {
    xhr = new XMLHttpRequest();
    xhr.open('GET', '../php/getAllArt.php', true);
    xhr.send();
}



query = (search_assign) => {
    xhr = new XMLHttpRequest();
    FD = new FormData();
    FD.append("search_assign", decodeURI(search_assign));
    FD.append("search_content", decodeURI(search_content));
    console.log(FD.get("search_assign"))
    console.log(FD.get("search_content"))
    // obj = new Object();
    // obj.search_assign = "all";
    // obj.search_content = document.getElementById("search-content").value
    xhr.open("POST", "../php/search.php", true);
    xhr.send(FD);
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState == 4) {
    //         if (xhr.status == 200 || xhr.status == 304) {
    //             console.log(xhr.responseText);
    //         }
    //     }
    // }
}



document.getElementById("nextPage").onclick = () => {
    thisPage = parseInt(thisPage)
    jumpToPage(thisPage == maxPage ? maxPage : thisPage + 1)
}
document.getElementById("lastPage").onclick = () => {
    thisPage = parseInt(thisPage)
    jumpToPage(thisPage == 1 ? 1 : thisPage - 1)
}
document.getElementById("jump").onclick = () => {
    toPage = document.getElementById("jumpPage").value
    jumpToPage(toPage)
}

jumpToPage = (toPage) => {
    var artListDiv = document.getElementById("all-art");
    if (toPage < 1 || toPage > maxPage) {
        // alert(toPage)
        alert("页码错误")
        return;
    }
    artListDiv.innerHTML = ""
    beginNum = (toPage - 1) * artNumOfPage
    if (toPage != maxPage)
        endNum = toPage * artNumOfPage
    else endNum = artLength

    // l = artLength < artNumOfPage ? artLength : artNumOfPage;


    for (var i = beginNum; i < endNum; i++) {
        artListDiv.appendChild(transferToArtDom(artList, i));
    }
    // single_art = document.getElementById("single-art")
    //  node = single_art.cloneNode(true)
    //  nodeList = node.childNodes
    //  nodeList.get

    var picList = document.getElementsByClassName("art-pic");
    // rnm为什么是0
    // console.log(picList.length);
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
    thisPage = toPage
    document.getElementById("nowPage").innerText = thisPage
    document.getElementById("jumpPage").value = thisPage
}

