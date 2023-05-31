// detect quick click
window.onload = function () {
    document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = clickFast;
    }
}

if (typeof isConfirmClick === 'undefined')
    isConfirmClick = true;

function clickFast() {
    if (isConfirmClick) {
        isConfirmClick = false;
        setTimeout(function () { isConfirmClick = true; }, 500);
        return false;
    } else {
        alert('请勿过快点击');
        return true;
    }
}