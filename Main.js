//calculateDiscountCode is designed to be referenced in a FormAssembly calculated field
function discountCode(coupon,subtotal)
{ 
    //set codes    
    //this section is for percentage off codes
    let free = ['free123','free456','free789'];
    let percent10 = ['ten1','ten2','ten3'];
    let percent20 = ['twenty','twenty1','twenty2'];
    //this section is for dollar-value codes
    let dollars20 = ['dollarcode1', 'dollarcode2'];
    let dollars25 = ['dollarcode3', 'dollarcode4'];
    //set default values to no discount
    let amount = subtotal;
  	let coupon = coupon;
    let percentDiscount = 1;
    let dollarDiscount = 0;
    
    //adjust percentdiscount variable if the coupon code entered matches
    if(free.includes(coupon)){percentDiscount=0}
        else{if(percent10.includes(coupon)){percentDiscount=.9}
            else{if(percent20.includes(coupon)){percentDiscount=.8}           
                }
            };

    //adjust dollar-value variable if the coupon code entered matches
    if(dollars20.includes(coupon)){dollarDiscount=20}
        else{if(dollars25.includes(coupon)){dollarDiscount=25}
            };

    let totalAmount = amount*percentDiscount-dollarDiscount;

    //ensure non-negative total
    if(totalAmount < 0){totalAmount = 0};
  
    return totalAmount;
};
