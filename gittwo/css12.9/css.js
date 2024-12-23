const input = document.querySelector(".icon-xiala")
const list = document.querySelector(".list")

input.onmouseover = function() {
    list.style.display = "block"
}

input.onmouseout = function() {
    list.style.display = "none"
}