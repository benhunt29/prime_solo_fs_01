function getShipping(customers){
    $.ajax(
        {
            type: 'GET',
            dataType: 'json',
            url: '/shipping'
        }).done(function(res){
            var shipping = res;
            //console.log(res);
            //console.log(customers);
            customers.forEach(function(customer){

                var shippingIsBilling;
                var shippingAddress;
                console.log(customer);
                shipping.forEach(function(address){
                    //console.log(customer.id,address.customerId);
                    //console.log(customer);
                    //customer.shippingAddress = "test";
                    //console.log(customer.shippingAddress);
                    //console.log(customer);
                    if (customer.id == address.customerId) {
                        //console.log(customer.id);
                        shippingIsBilling = false;
                        customer.shippingAddress = address.addressLine1 + ' ' + address.addressLine2;
                        //console.log(customer.shippingAddress);
                    }else{
                        shippingIsBilling = true;
                    }
                    console.log(customer);
                });

                if (shippingIsBilling){
                    //console.log('test');
                    //console.log(customer.shippingAddress)
                    getBilling(customer,customer.id);

                }else{
                    console.log(customer.shippingAddress);
                    //customer.shippingAddress = address.customerId;
                    getBilling(customer,customer.id);
                }
            });
        });
}

function getBilling(customer,customerId){
    var url = '/billing/'+customerId;
    //console.log(customer);
    $.ajax(
        {
            type: 'GET',
            dataType: 'json',
            url: url
        }).done(function(res){
            //APPEND TO DOM
            //console.log(res);
            customer.billingAddress = res.addressLine1 + ' ' + res.addressLine2;
            //console.log(customer.shippingAddress);
            if(!customer.shippingAddress){
                //console.log('test');
                customer.shippingAddress = customer.billingAddress;
            }
            //console.log(customer);
            displayCustomer(customer);
        });
}


function displayCustomer(customer){

    var $newUl = $('<ul>');
    var $newCustomerLi = $('<li>');
    var $newP = $('<p>');
    var $newShippingLi = $('<li>');
    var $newBillingLi = $('<li>');
    var $customersUl = $('#customers');
    $customersUl.append($newCustomerLi);
    var $customerLi = $customersUl.children().last();
    $customerLi.append($newP);

    var $customerNameP = $customerLi.children().last();
    $customerNameP.text(customer.firstName + ' ' + customer.lastName);
    $customerLi.append($newUl);

    var $addressesUl = $customerLi.children().last();
    $addressesUl.append($newShippingLi);

    $addressesUl.append($newShippingLi);
    var $shippingLi = $addressesUl.children().last();
    $shippingLi.text('Shipping Address: ' + customer.shippingAddress);

    $addressesUl.append($newBillingLi);
    var $billingLi = $addressesUl.children().last();
    $billingLi.text('Billing Address: ' + customer.billingAddress);

}

$(document).ready(function(){
    $.ajax(
        {
            type: 'GET',
            dataType: 'json',
            url: '/customers'
        }).done(function(res){
            getShipping(res);
        });

});