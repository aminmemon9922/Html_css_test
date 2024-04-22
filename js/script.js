$( document ).ready(function() {
new DataTable('#example', {
    scrollX: true,
    pageLength:50,
    lengthMenu:[50,100,150,200]
});

 // Get all elements with the class "drop_down"
    const dropdowns = document.querySelectorAll('.drop_down');
    dropdowns.forEach(function (dropdown) {
      const dropdownButton = dropdown.querySelector('.dropbtn');
      const dropdownContent = dropdown.querySelector('.dropdown-content');
      dropdownButton.addEventListener('click', function (event) {
        // Prevent event propagation to stop the click event from being triggered on the document body
        event.stopPropagation();
        dropdowns.forEach(function (otherDropdown) {
          if (otherDropdown !== dropdown) {
            otherDropdown.querySelector('.dropdown-content').classList.remove('active');
            otherDropdown.querySelector('.fa-chevron-down').style.display = 'inline-block';
            otherDropdown.querySelector('.fa-chevron-up').style.display = 'none';
          }
        });
        dropdownContent.classList.toggle('active');
        const chevronDown = dropdownButton.querySelector('.fa-chevron-down');
        const chevronUp = dropdownButton.querySelector('.fa-chevron-up');
        if (dropdownContent.classList.contains('active')) {
          chevronDown.style.display = 'none';
          chevronUp.style.display = 'inline-block';
        } else {
          chevronDown.style.display = 'inline-block';
          chevronUp.style.display = 'none';
        }
      });
    });

    // Add event listener to the document body to hide dropdowns when clicking outside of them
    document.body.addEventListener('click', function () {
      dropdowns.forEach(function (dropdown) {
        dropdown.querySelector('.dropdown-content').classList.remove('active');
        dropdown.querySelector('.fa-chevron-down').style.display = 'inline-block';
        dropdown.querySelector('.fa-chevron-up').style.display = 'none';
      });
    });

var odd_check = 0;
$("tbody tr" ).each(function(index) 
{
     if(index==odd_check)
     {
         jQuery(this).find('input[type="checkbox"]').addClass('odd_check')
         odd_check = parseInt(odd_check) + 3
     }
    else
     {
       jQuery(this).find('input[type="checkbox"]').addClass('even_check')  
     }
});

});
