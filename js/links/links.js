$(".box-container").map(function() {
    $(this).hide();
});

$(".link-button").map(function() {
    $(this).on("click", function() {
        var nextElement = $(this).parent().next();
        nextElement.slideToggle();
    });
});