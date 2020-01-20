
checkOffTodo()
trashTodo()
newTodo()

function checkOffTodo(){
    $('ul').on('click', 'li', function(){
        $(this).toggleClass('done');
    })
}
 
function trashTodo(){
    $('ul').on('click', 'span', function(event){
        $(this).parent().fadeOut(function(){
            $(this).remove();
        });
        event.stopPropagation();
    });
}

function newTodo(){
    $('input[type="text"]').keypress(function(event){
        if (event.which === 13){
            var todo = $(this).val()
            $(this).val("");
            $('ul').append("<li><span class='trash'><i class='fas fa-trash-alt'></i> </span>" + todo + "</li>");
        };               
    })
}

function toggleInput(){
    $('.toggle').click(function(){
        $('input[type="text"]').fadeToggle();
    })
}

toggleInput()


