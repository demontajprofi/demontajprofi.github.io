function readMore() {
    let more = document.getElementById("more");
    let text = document.getElementById("text");


        if (text.innerHTML == "Показать полный прайс лист"){
            text.innerHTML = "Скрыть полный прайс лист"
        }else {
            text.innerHTML = "Показать полный прайс лист"
        }
        more.classList.toggle('more-block');
      
}