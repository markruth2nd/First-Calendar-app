$(document).ready(function() {
    $(".saveBtn").on("click", function(){
        console.log("Saved");
        let timeID = $(this).parent().attr("id");
        let value = $(this).siblings(".description").val();
        console.log(timeID);
        console.log(value);
        localStorage.setItem(timeID, value);
        $(".notification").addClass("show");
        setTimeout(function(){
            $(".notification").removeClass("show");
        }, 5000);
    });
    function hourUpdate(){
        let currentHour = moment().hours();

        for(let i = 0; i < $(".time-block").length; i++){
            let hour = parseInt($(".time-block")[i].getAttribute("id").split("-")[i]);
            console.log(hour);
            console.log(currentHour);
            if(hour < currentHour) {
                $(".time-block")[i].classList.add("past");
            } else if(hour === currentHour){
                $(".time-block")[i].classList.add("past");
                $(".time-block")[i].classList.remove("present");
            } else {
                $(".time-block")[i].classList.remove("present");
                $(".time-block")[i].classList.remove("past");
                $(".time-block")[i].classList.add("future");
            };
        };
    };
   