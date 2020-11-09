$(function () {
  $("#js-shopping-list-form").on('submit', event => {
    event.preventDefault();
    /*
    take in the value from the input
    use it to create another shop item list object
    */
    itemName = $(this).find('input[name="shopping-list-entry').val();
    $("ul.shopping-list").append(`
       <li><span class="shopping-item">${itemName}</span>
       <div class="shopping-item-controls">
       <button class="shopping-item-toggle">
         <span class="button-label">check</span>
       </button>
       <button class="shopping-item-delete">
         <span class="button-label">delete</span>
       </button>
     </div>
     </li>`);


  })

  /*make functions for check and delete*/


  //$thisButton.on('click', event => { //does not work for dynamically created items
  $('ul.shopping-list').on('click', '.shopping-item-toggle', function (event) {
    $(this).parents("li").find("span.shopping-item").toggleClass('shopping-item__checked');
  })



  $('ul.shopping-list').on('click', '.shopping-item-delete', function (event) {
    $(this).parents("li").remove();
  }

  )
})
