function toggleMegaMenu() {
    const megaMenu = document.querySelector('.mega-menu');
    if (megaMenu.style.display === 'none') {
        megaMenu.style.display = 'block';
    } else {
        megaMenu.style.display = 'none';
    }
  }
  
  
  
  
  const searchIcon = document.getElementById('search-icon');
  const searchBox = document.querySelector('.search-box');
  var overlay = document.getElementById('overlay');
  
  searchIcon.addEventListener('click', function() {
    searchBox.style.display = 'flex';
    overlay.style.display = 'block';
  });
  
  overlay.addEventListener('click', function() {
    overlay.style.display = 'none';
    searchBox.style.display = 'none';
  });
  
  
  
  const cartIcon = document.getElementById('cart-icon');
  const cartBox = document.querySelector('.cart-box');
  var overlay = document.getElementById('overlay');
  const anotherElement = document.getElementById('cart-icon2');
  
  cartIcon.addEventListener('click', function() {
    cartBox.style.display = 'flex';
    overlay.style.display = 'block';
  });
  
  anotherElement.addEventListener('click', function() {
    cartBox.style.display = 'flex';
    overlay.style.display = 'block';
  });
  
  overlay.addEventListener('click', function() {
    overlay.style.display = 'none';
    cartBox.style.display = 'none';
  });
  
  
  function incrementQuantity(button) {
    var quantitySpan = button.parentNode.querySelector('.quantity1');
    var quantity1 = parseInt(quantitySpan.innerText);
    quantity1 += 1;
    quantitySpan.innerText = quantity1;
  }
  
  function decrementQuantity(button) {
    var quantitySpan = button.parentNode.querySelector('.quantity1');
    var quantity1 = parseInt(quantitySpan.innerText);
    quantity1 -= 1;
    if (quantity1 < 0) {
      quantity1 = 0;
    }
    quantitySpan.innerText = quantity1;
  }


  var deleteButtons = document.querySelectorAll('.delete');

deleteButtons.forEach(function(button) {
  button.addEventListener('click', function() {
  
    var row = button.closest('.basket-product');
    row.style.display = 'none';
  });
});



function toggleClasses(event) {
    event.preventDefault();
    var items = document.querySelectorAll('.sidebar');
  
    
    var isHidden = true;
    items.forEach(function(item) {
        if (!item.classList.contains('sidebar1')) {
            isHidden = false;
        }
    });
  
    
    items.forEach(function(item) {
        if (isHidden) {
            item.classList.remove('sidebar1');
        } else {
            item.classList.add('sidebar1');
        }
    });
  }


    const items = document.querySelectorAll('.widget__item');

    items.forEach(item => {
        item.addEventListener('click', function() {
            items.forEach(element => {
                element.classList.remove('widget__item--active');
            });
            this.classList.add('widget__item--active');
        });
    });



    //  تغییرات قسمت sidebar
    const sidebarLinks = document.querySelectorAll('.sidebar-a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            
            e.preventDefault();

            
            const submenu = this.nextElementSibling;

           
            if (submenu.style.display === 'none' || submenu.style.display === '') {
                submenu.style.display = 'block';
            } else {
                submenu.style.display = 'none';
            }
        });
    });






  var options = {
    valueNames: [ 'name', 'new' ,'old','view' ]
  };
  
  var values = [ {
    name: "Martina Elm",
    born: 1986
  }];
  
  var userList = new List('users', options, values);
  
  userList.add({
    name: "Gustaf Lindqvist",
    born: 1983
  });




  document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.querySelector('select[name="so-select"]');
    const articleBoxes = document.querySelectorAll('.article-box');

    selectElement.addEventListener('change', function() {
        const selectedFilter = this.value;

        articleBoxes.forEach(function(articleBox) {
            const dataItem = articleBox.getAttribute('data-item');

            if (selectedFilter === 'all' || selectedFilter === dataItem) {
                articleBox.style.display = 'block';
            } else {
                articleBox.style.display = 'none';
            }
        });
    });
});