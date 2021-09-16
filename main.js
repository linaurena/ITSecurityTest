$(function(){
    
    $("[id^=draggable]").draggable({
        revert: "invalid",
        stop: function (event, ui) {
            $(this)
            console.log(event.target.id);
            let answer = event.target.id;
            return console.log(answer);
            console.log(answer);
        }
    });
    $("[id^=droppable]").droppable({
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function (event, ui) {
            $(this)
            console.log(event.target.id);
            let question = event.target.id;
            return console.log(question);
            console.log(question);
        }
    });
});

popupCongrats = $(".popup, .popup-content");
$(".close, .popup").on("click", function(){
    $(".popup, .popup-content").removeClass("active");
});

$(".ui-widget-content").click(function() {
    //console.log(this.id)
    optionId = this.id;
    firstScore = $('.first-box-score');
    secondScore = $('.second-box-score');
    thirdScore = $('.third-box-score');
    fourthScore = $('.fourth-box-score');

    if (optionId === 'draggable_opt1'){
        //console.log('Yee')
        $(this).css("visibility", "hidden");
        $(firstScore).css("background", "#0033A0");
        $(popupCongrats).addClass("active");
    } else if (optionId === 'draggable_opt3'){
        $(this).css("visibility", "hidden");
        $(secondScore).css("background", "#0033A0");
    } else if (optionId === 'draggable_opt4'){
        $(this).css("visibility", "hidden");
        $(thirdScore).css("background", "#0033A0");
    } else if (optionId === 'draggable_opt5'){
        $(this).css("visibility", "hidden");
        $(fourthScore).css("background", "#0033A0");
    } else {
        //console.log('Wrong')
    }
})
