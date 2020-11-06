$(function () {
    $("#js-shopping-list-form").submit(event => {
        event.preventDefault();
        /*
        take in the value from the input
        use it to create another shop item list object
        */
        itemName = $(this).find('input[name="shopping-list-entry').val();
        $(".shopping-list").append(`
       <li><span class="shopping-item">${itemName}</span>
       <div class="shopping-item-controls">
       <button class="shopping-item-toggle">
         <span class="button-label">check</span>
       </button>
       <button class="shopping-item-delete">
         <span class="button-label">delete</span>
       </button>
     </div>
     </ul>`);


    })
})

/*make functions for check and delete*/

$('.shopping-item-toggle').each(function () {
    var $thisButton = $(this);
    $thisButton.on('click', event => {
        event.stopPropagation();
        $(this).closest("li span.shopping-item").toggleClass('shopping-item__checked');
        //Can toggle class for li or for the check text in the button itself, but
        //not for the shopping-item text. why?
    })
}
)