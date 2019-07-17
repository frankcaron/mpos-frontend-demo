$( document ).ready(function() {

    // On Click Logic For Order Items
    $( "body" ).on('click', 'div.order-line-item', function() {
        console.log("clicked");
        $(this).find('div.order-not-selected').toggleClass("order-selected");
    });

    //* On Click logic For Tiles
    $( "body" ).on('click', 'div.tile', function() {

        var containerDiv = '<div class="order-line-item">';
        var orderSelected = '<div class="order-not-selected"></div>';
        var itemDiv = '<div class="order-item">';
        var itemContent = '<div class="order-content">' + 'Big Bob M Trio' + '</div>';
        var priceContent = '<div class="order-content">' + '1x' + '$23.10' + '</div>';
        var endContainerDiv = '</div>';
        var orderItem = '<div class="order-item">';
        var orderItemPrice = '<div class="order-price">' + '$23.10' + '</div>';
        var end = '</div></div></div>';

        //Clone the order
        $( "div.tray-order" ).append(
            containerDiv + 
            orderSelected + 
            itemDiv + 
            itemContent + 
            priceContent + 
            endContainerDiv + 
            orderItem + 
            orderItemPrice + 
            end
        );

    });

});

