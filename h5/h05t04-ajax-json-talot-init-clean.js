/* Houses- JavaScript */
$(document).ready(function(){
    // use ajax() to load h04t04-ajax-json-talot.json file
    // call showHouses from done()-function
    $.ajax({
        url: "h05t04-ajax-json-talot.json",
        cache: false
    }).done(function(data) {
        console.log("done");
        showHouses(data);        
    }).fail(function() {
        console.log("error");
    }).always(function() {
        console.log("complete");
    });
    

});

// function shows houses information
function showHouses(data) {
    // loop through all houses data 
    $.each(data.houses, function(index, talo) {
        // create a div element and add "houseContainer" class to it
        var div = "<div class='houseContainer'>";
        // create img element and use "houseImage" class to it and src to house image
        var image = "<img class='houseImage' src='" + talo.image + "'/>";
        // create p element, use address as a text and "header" class
        var header = "<p class='header'>" + talo.address + "</p>";
        // create p element ja use house size as a text
        var size = "<p>" + talo.size + "</p>";
        // create p element and use house text as a text and "text" class
        var text = "<p class='text'>" + talo.text + "</p>";
        // create p element and use house price as a text
        var price = "<p>" + talo.price + "</p>";
        //  add all elements to houseDiv lisÃ¤tÃ¤Ã¤n kaikki luodut elementit taloDiv-elementtiin
        div += image + header + size + text + price + "</div>";
        // add div to #houses in DOM
        $("#houses").append(div);
    });
}