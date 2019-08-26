//check off a todo by clicking
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
})

//click on x to delete an il
$('ul').on('click', 'span', function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
})

$('input').on('keypress', function(event){
    if(event.which === 13){
        //grabbing text from the input
     let todoText =$(this).val();
     $(this).val('');
     //create a new li and add it to ul
     $('ul').append(`<li><span><i class="far fa-trash-alt"></i></span>${todoText}</li>`);
    }
})

$('.fa-pen-square').on('click', function(){
    $('input').slideToggle();
})