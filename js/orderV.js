function order_v() {
    var order = document.getElementById("order_over");
    var btnO = document.getElementById("btn_order");


    if (order.style.display === "none") {
        order.style.display="block";
    }else{
        order.style.display="none";
    }       
}