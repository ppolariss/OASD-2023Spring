document.title = "艺术品商城";
// transfer artList to artDom
function transferToArtDom(artList, i) {
    // if (i % 3 == 0) {
    //     var rowDiv = document.createElement("div");
    //     rowDiv.className = "row";
    //     artListDiv.appendChild(rowDiv);
    //     artListDiv = rowDiv;
    // }
    if (artList[i].author == null) {
        artList[i].author = "不祥";
    }
    if (artList[i].weight == null) {
        artList[i].weight = "不祥";
    }
    if (artList[i].size == null) {
        artList[i].size = "不祥";
    }
    if (artList[i].art_year == null) {
        artList[i].art_year = "不祥";
    }
    if (artList[i].style == null) {
        artList[i].style = "不祥";
    }
    if (artList[i].description == null) {
        artList[i].description = "无";
    }
    sold = ""
    if(artList[i].is_sold){
        sold = "<div class=\"sold\">已售罄</div>"
    }
    var artDiv = document.createElement("div");
    artDiv.className = "art";
    artDiv.dataset.art_id = artList[i].art_id;
    artDiv.innerHTML = sold + "<div class=\"art-img\"><img class=\"art-pic\" src=\"../pic/artPic/" + artList[i].pic + "\" alt=\"" + artList[i].art_name + "\"></div>" +
        "<div class=\"art-name\">" + artList[i].art_name + "</div><div class=\"art-author\">作者：" + artList[i].author +
        "</div><div class=\"art-price\">价格：￥" + artList[i].price + "</div><div class=\"art-description\">详细描述：" + artList[i].description + "</div>";
    // + "<div class=\"art-id\" style=\"visibility : hidden;\">" + artList[i].art_id + "</div>"


    // + "<div class=\"art-weight\">质量：" + artList[i].weight + "</div>"
    // + "<div class=\"art-size\">尺寸：" + artList[i].size + "</div>"
    // + "<div class=\"art-year\">年代：" + artList[i].art_year + "</div>"
    // + "<div class=\"art-style\">风格：" + artList[i].style + "</div>"
    return artDiv;
}




// clickPic = () =>{
//     // console.log(pic.parentNode.parentNode.dataset.art_id);
//     url = "artDetail.html?art_id=" + pic.parentNode.parentNode.dataset.art_id
//     window.location.href = url;
// }
                    // pic.onclick = (function (pic) {
                    //     return function () {
                    //         console.log(pic.parentNode.parentNode.dataset.art_id);
                    //         url = "artDetail.html?art_id=" + pic.parentNode.parentNode.dataset.art_id
                    //         window.location.href = url;
                    //     };
                    // })(pic);