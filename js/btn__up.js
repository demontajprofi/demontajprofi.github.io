window.onscroll = function showUp() {
    var containerUp = document.querySelector(".container_up")

    if(window.pageYOffset > 550) {
        containerUp.classList.add('container_up_flex')
    }else{
        containerUp.classList.remove('container_up_flex')
    }


}

