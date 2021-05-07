//Check off specific Todos by clicking
$("ul").on("click", "li",function(){
    $(this).toggleClass("completed");
});
//click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        //grabbing new Todo text from Input 
        var todoText = $(this).val();
        $(this).val("");
        //create a new Li and add to new ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " +todoText+ "</li>")
    }
    
});

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});




