const plus=document.getElementById("plus");
plus.addEventListener("click",function(){
    // console.log("this is clicked");

    const quantity=document.getElementById("quantity").value;
    var quantityNumber=parseFloat(quantity);
    quantityNumber=quantityNumber+1;
    document.getElementById("quantity").value= quantityNumber;

    const iphone=document.getElementById("iphone").innerText;
    const iphoneNumber=parseFloat(iphone);
    var total= quantityNumber * 1219;

    document.getElementById("iphone").innerText=total;
    

})

// iphone minus

const negative=document.getElementById("negative");
negative.addEventListener("click",function(){

    const quantity=document.getElementById("quantity").value;
    var quantityNumber=parseFloat(quantity);
    var negativePhone=quantityNumber-1;

    if (negativePhone>=0){
        document.getElementById("quantity").value= negativePhone;

    const iphone=document.getElementById("iphone").innerText;
    const iphoneNumber=parseFloat(iphone);
    
    var Total = negativePhone * 1239;

    document.getElementById("iphone").innerText=Total;
    }

    else{
         var total= 0;
        document.getElementById("iphone").innerText=total;
    }

    }
    

)
