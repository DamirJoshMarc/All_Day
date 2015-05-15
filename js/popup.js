document.getElementById('add').addEventListener("click", function(e) {
    var input = document.getElementById('toDoItem').value
    if (input.length > 0) {
        var node = document.createElement("LI");
        node.classList.add("close");
        var textnode = document.createTextNode(input);
        node.appendChild(textnode);
        document.getElementById("list").appendChild(node);
        addListener();
    };
    document.getElementById('toDoItem').value = '';
}, false);

function addListener() {
    var classname = document.getElementsByClassName('close');
    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', function() {
            this.style.display = 'none';
        }, false);
    }
}
addListener();

// jQuery code below
// $('#add').click(function() {
//   var $input = $('#toDoItem').val();
//   if ($input.length > 0) {
//     $('#list').prepend('<li class="close">' + $input + '</li>');
//   }
//   // reset input box to no text
//   $('#toDoItem').val('');
// });
// // remove list item
// $('#list').on('click', '.close', function() {
//   $(this).hide('2000', function() {
//      $(this).remove();
//   });
// });