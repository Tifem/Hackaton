  // Get references to the div and the button
  var myDiv = document.getElementById('myDiv');
  var toggleButton = document.getElementById('option-btn');
  var upArrow = document.getElementById('upArrow');
  // Add a click event listener to the button
  toggleButton.addEventListener('click', function() {
    // Check the current display property of the div
    if (myDiv.style.display === 'none' || myDiv.style.display === '') {
      // If the div is hidden, show it
      myDiv.style.display = 'block';
      upArrow.setAttribute('transform', 'rotate(180)');
    } else {
      // If the div is visible, hide it
      myDiv.style.display = 'none';
      upArrow.removeAttribute('transform');
    }
});
  
  

