$( document ).ready(function() {

    //Helpers
    function updateCost() {
        $( "span.cost" ).text(orderCost.toFixed(2));
    }

    //Variables
    var orderCost = 0.00;
    var orderItems = [];

    //Put Cart val in
    updateCost();

    // On Click Logic For Order Items
    $( "body" ).on('click', 'div.order-line-item', function() {
        console.log("clicked");
        $(this).find('div.order-not-selected').toggleClass("order-selected");
    });

    //* On Click logic For Tiles
    $( "body" ).on('click', 'div.tile', function() {

        var itemContent = $(this).find('div.tile-title').text();
        
        var orderItemPrice = $(this).find('span#price').text();
        orderItemPrice = parseFloat(orderItemPrice);

        var productID = $(this).find('span#id').text();

        var containerDiv = '<div class="order-line-item">';
        var orderSelected = '<div class="order-not-selected"></div>';
        var itemDiv = '<div class="order-item"><div class="order-content">';
        var priceContent = '</div><div class="order-content quantity">' 
        var priceQuantity = 1;
        var lineItemPrice = 'x ' + (priceQuantity * orderItemPrice).toFixed(2);
        var endContainerDiv = '</div></div>';
        var orderItem = '<div class="order-item"><div class="order-price">$';
        var end = '</div></div></div></div>';

        //Clone the order
        $( "div.tray-order" ).append(
            containerDiv + 
            orderSelected + 
            itemDiv + 
            itemContent + 
            priceContent + 
            priceQuantity +
            lineItemPrice + 
            endContainerDiv + 
            orderItem + 
            orderItemPrice.toFixed(2) + 
            end
        );

        //Update Cost
        orderCost += orderItemPrice;
        updateCost();

    });

});



