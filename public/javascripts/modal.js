// MODAL

var modal = document.getElementById('showAll_mapModal'); // Get the modal.
var btns = document.querySelectorAll('.mapButton');  	 // Get the buttons that open the modal.
var span = document.getElementsByClassName("close")[0];	 // Get the span element that closes the modal (the x in top corner).

// For all buttons with class "mapButton", open modal when clicked.
[].forEach.call(btns, function(el) {
  el.onclick = function() {
      modal.style.display = "block";
  };
});

// Closes modal.
span.onclick = function() {
    modal.style.display = "none";
};

 // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

