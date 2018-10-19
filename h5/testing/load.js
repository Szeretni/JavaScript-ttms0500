$(document).ready(function(){
    $.ajax({
        url: "friends.json",
        cache: false
    }).done(function(data) {
        console.log("done");
        showFriends(data);        
    }).fail(function() {
        console.log("error");
    }).always(function() {
        console.log("complete");
    });
});

function showFriends(data) {
    $.each(data.friends, function(index, friend) {
        $("#friendsList").append("<li>"+friend.firstName+" "
                                 +friend.lastName+" "
                                 +friend.email
                                 +"</li>");
    });
}