function load(parent, delay, duration) {
    $.get("../navbar.html", function(data){
        $("#navbar").replaceWith(data);
    });
    
    $.get("../footer.html", function(data){
        $("#footer").replaceWith(data);
        $("#footer").hide();
    });

    var options = {
        "effect": "fade",
        "duration": duration
    };
    
    var count = $(parent).children().length;
    $(parent).children().each(function(index, element) {
        if (index === count - 1) {
            var optionsComplete = {
                "effect": "fade",
                "duration": duration,
                'complete': function() {

                    $("#footer").hide().delay(delay).show(options);
                }
            };

            $(element).hide().delay(delay * index).show(optionsComplete);
        }
        
        $(element).hide().delay(delay * index).show(options);
    });    
}
