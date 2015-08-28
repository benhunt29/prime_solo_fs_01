function getShipping(customers){
    $.ajax(
        {
            type: 'GET',
            dataType: 'json',
            url: '/shipping'
        }).done(function(res){
            var shipping = res;

            customers.forEach(function(customer,index1){

                shipping.forEach(function(address,index2{

                    if (customer.id == address.customerID){
                        customer.shippingAddress = address.customerID;
                        customer.billingAddress = getBilling(customer,customerID);

                    }else{
                        //check for second condition

                    }
                })
            })


        })
}

function getBilling(customer,customerID){
    var url = '/billing'+customerID;

    $.ajax(
        {
            type: 'GET',
            dataType: 'json',
            url: url,
        }).done(function(res){
            //APPEND TO DOM
        });
}


//var Customer = function(){
//    this.name = name;
//    this.billingAddress = billingAddress;
//    this.shippingAddress = shippingAddress;
//};

$.document.ready(function(){
    $.ajax(
        {
            type: 'GET',
            dataType: 'json',
            url: '/customers'
        }).done(function(res){
            getShipping(res);
        });

});