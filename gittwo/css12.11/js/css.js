const pass = document.querySelector(".passeye")
const eye = document.querySelector(".eye")
let flag 

eye.onclick = function(){
    if(flag == false){
        pass.type = "text"
        eye.src = "img/眼睛_显示_o.png"
        flag = true
    }else{
        pass.type = "password"
        eye.src = "img/眼睛_隐藏_o.png"
        flag = false
    }
}