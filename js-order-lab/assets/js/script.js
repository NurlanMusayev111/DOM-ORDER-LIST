"use strict";

const foods = ["kabab","sac","baliq"];
let select = document.querySelector(".select")

for (const food of foods) {
    let option = document.createElement("option");
    option.innerHTML = food;
    select.appendChild(option);
    
}


document.querySelector(".submit").addEventListener("click",function(){


    let name = document.querySelector(".name");
    let count = document.querySelector(".count");
    let price = document.querySelector(".price");

    let nameError = document.querySelector(".name-validation")
    let countError = document.querySelector(".count-validation")
    let priceError = document.querySelector(".price-validation")


    

    let fullName = document.querySelector(".fullname")
    let food = document.querySelector(".food")
    let resCount = document.querySelector(".rescount")
    let resPrice = document.querySelector(".resprice")
    let status = document.querySelector(".status");
    


    //-------------------------
    if(name.value.trim() == ""){
        nameError.classList.remove("d-none")
    }else{
        nameError.classList.add("d-none")
    }
    //----------------------------

    if(count.value.trim() == ""){
        countError.classList.remove("d-none")
    }else{
        countError.classList.add("d-none")
    }

    //-------------------------------
    if(price.value.trim() == ""){
        priceError.classList.remove("d-none")
        return
    }else{
        priceError.classList.add("d-none")
    }

    //-------------------------------

    status.style.backgroundColor = "orange";
    status.value = "Pending"

    fullName.value = name.value;
    resCount.value = count.value;
    resPrice.value = price.value * count.value; 


    let order = document.querySelector(".order");
    let orderBtn = document.querySelector(".order button")

    if(order.classList.contains("d-none")){
        order.classList.remove("d-none")
        order.classList.add(fullName)
        order.classList.add(resCount)
        order.classList.add(resPrice)
        order.classList.add(fullName)
    }




    if(isNaN(count.value) && countError.classList.contains("d-none")){
        countError.classList.remove("d-none")
        return;
    }


    
    orderBtn.forEach(button => {
        button.addEventListener("click",function(){
            
        })
    });
    
    



})




