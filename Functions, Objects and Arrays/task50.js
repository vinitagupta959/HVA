let cart=[{name:"rice",price:452,quantity:5},
    {name:"dal",price:852,quantity:30},{name:"veg",price:45,quantity:2}];
    
    
    function calculateTotalPrice(cart){
      let totalprice=0;
      cart.forEach(item=>{
        totalprice+=item.price*item.quantity
      })
      return totalprice
    }
    console.log(calculateTotalPrice(cart));