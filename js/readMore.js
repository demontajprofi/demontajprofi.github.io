function readMore() {
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");
    var text = document.getElementById("text");


    if (more.style.display === "none") {
        text.innerHTML="Скрыть полный прайс лист";
        more.style.display="block";
    }else{
        text.innerHTML="Показать полный прайс лист";
        more.style.display="none";
    }       
}