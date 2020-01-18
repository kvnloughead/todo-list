
checkOffTodo()
trashTodo()

function checkOffTodo(){
    $('.todo-item').on('click', function(){
        $(this).toggleClass('done');
    })
}

function trashTodo(){
    $(".trash").on('click', function(event){
        $(this).parent().fadeOut(function(){
            $(this).remove();
        });
    });
}

