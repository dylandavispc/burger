//HANDELERS
$(function() {
    $(".change-eaten").on("click", function(event) {
        let id = $(this).data("id");
        let newEaten = $(this).data("neweaten");

        let newEatenState = {
            eaten: newEaten
        };

        //SENDING PUT REQUEST
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function() {
                console.log("change eaten to", newEaten);
                //PAGE RELOAD
                location.reload();
            }
        );
    });


    $(".create-form").on("submit", function(event){
        event.preventDefault();

        let newBurger = {
            name: $("#ca").val().trim(),
            eaten: $("#pattyPic").val().trim()
        };

        //SENDING POST REQUEST
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger!!!");
                location.reload();
            }
        );
    });
});