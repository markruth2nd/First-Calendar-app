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
});