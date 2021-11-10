window.onscroll = function showHeader() {
    var header = document.querySelector(".header")

    if(window.pageYOffset > 550) {
        header.classList.add('header_fixed')
    }else{
        header.classList.remove('header_fixed')
    }

    var containerUp = document.querySelector(".container_up")

    if(window.pageYOffset > 550) {
        containerUp.classList.add('up-flex')
    }else{
        containerUp.classList.remove('up-flex')
    }


}

