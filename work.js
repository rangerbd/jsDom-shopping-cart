const plus=document.getElementById("plus");
plus.addEventListener("click",function(){
        
        handleProduct(true);
    
    })

// iphone minus

const negative=document.getElementById("negative");
negative.addEventListener("click",function(){

        handleProduct(false);

    })
    

const productIncrease=document.getElementById("productIncrease");
productIncrease.addEventListener("click",function(){
    handlePhone(true);
})

const productDecrease=document.getElementById("productDecrease");
productDecrease.addEventListener("click",function(){
    handlePhone(false);
})




function handlePhone(amount){
    const productQuantity = document.getElementById("productQuantity").value;
    var productNumber=parseFloat(productQuantity);
     
    if(amount == true){
        productNumber=productNumber + 1;
    }

    if( amount == false && productNumber>0){
        productNumber=productNumber - 1;
    }
    document.getElementById("productQuantity").value= productNumber;

    const productPrice =document.getElementById("productPrice").innerText;
    const product=parseFloat(productPrice);
    var totalProduct= productNumber * 59;

    document.getElementById("productPrice").innerText=totalProduct;

    calculateTotal();
}


function handleProduct(isIncreased){
    const quantity=document.getElementById("quantity").value;
    var quantityNumber=parseFloat(quantity);
    // 
    if(isIncreased == true){
        quantityNumber=quantityNumber+1;
    }

    if( isIncreased == false && quantityNumber > 0){
        quantityNumber=quantityNumber - 1;
    }
    document.getElementById("quantity").value= quantityNumber;

    const iphone=document.getElementById("iphone").innerText;
    const iphoneNumber=parseFloat(iphone);
    var total= quantityNumber * 1219;

    document.getElementById("iphone").innerText=total;

    calculateTotal();
}

function calculateTotal(){
   const phoneInput = document.getElementById("quantity");
   const phoneCount=parseFloat(phoneInput.value);


   const caseInput=document.getElementById("productQuantity");
   const caseCount=parseFloat(caseInput.value);

   const price= phoneCount * 1239 + caseCount * 59;
   
   document.getElementById("sub-total").innerText= price;

   const tax= price * .01;
   document.getElementById("tax").innerText='$' + tax;

   const allTotal=price + tax;
   document.getElementById("allTotal").innerText=allTotal;
 
  
}