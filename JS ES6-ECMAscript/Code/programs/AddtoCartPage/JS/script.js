var product_total_amt = document.getElementById("product_total_amt");
var shipping_charge = document.getElementById("shipping_charge");
var total_cart_amt= document.getElementById("total_cart_amt");
const Decrement =(txtbox, itemPrice) =>{
    var itemValue = document.getElementById(txtbox);
    var itemP = document.getElementById(itemPrice);
    if (itemValue.value  <= 0){
        itemValue.value = 0;
        alert("Negative Value not allowed");
    }
    else{
        itemValue.value = parseInt(itemValue.value)-1;
        itemValue.style.background = "#fff";
        itemValue.style.color = "#495057";
        itemP.innerHTML = parseInt(itemP.innerHTML)-15;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML)-15;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML)+parseInt(shipping_charge.innerHTML);

    }
}
const Increment =(txtbox, itemPrice) =>{
    var itemValue = document.getElementById(txtbox);
    var itemP = document.getElementById(itemPrice);
    if (itemValue.value  >= 5){
        itemValue.value = 5;
        alert("Maximum 5 allowed");
        itemValue.style.background = "red";
        itemValue.style.color = "#fff";
        
    }
    else{
        itemValue.value = parseInt(itemValue.value)+1;
        itemP.innerHTML = parseInt(itemP.innerHTML)+15;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML)+15;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML)+parseInt(shipping_charge.innerHTML);

    }
}