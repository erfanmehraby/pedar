
let isActive = false;

const menu = document.querySelector(".image-menu2");
menu.addEventListener('click', onclick);

function onclick(e) {
  e.preventDefault();
  
  if (!isActive) {
    
    document.querySelector(".image-menu2").classList.add("image-menu3");
    document.querySelector(".logo").classList.add("logo2");
    document.querySelector(".section-2").classList.add("section-2-change");
    document.querySelector(".header-left-1").classList.add("header-left-1-change");
    document.querySelector(".banner-atr").classList.add("banner-atr-change");
    document.querySelector(".mega-menu").classList.add("mega-menu-change");
    document.querySelector(".section-4").classList.add("section-4-next");
    document.querySelector(".section-6").classList.add("section-6-next");
    document.querySelector(".section-5-change").classList.add("section-5-change1");
    document.querySelector(".section-5").classList.add("section-5-change2");
    document.querySelector(".title-selected").classList.add("title-selected-next");
    document.querySelector(".Description").classList.add("Description-next");
    
    isActive = true; 
  } else {
    
    document.querySelector(".image-menu2").classList.remove("image-menu3");
    document.querySelector(".logo").classList.remove("logo2");
    document.querySelector(".section-2").classList.remove("section-2-change");
    document.querySelector(".header-left-1").classList.remove("header-left-1-change");
    document.querySelector(".banner-atr").classList.remove("banner-atr-change");
    document.querySelector(".mega-menu").classList.remove("mega-menu-change");
    document.querySelector(".section-4").classList.remove("section-4-next");
    document.querySelector(".section-6").classList.remove("section-6-next");
    document.querySelector(".section-5-change").classList.remove("section-5-change1");
    document.querySelector(".section-5").classList.remove("section-5-change2");
    document.querySelector(".title-selected").classList.remove("title-selected-next");
    document.querySelector(".Description").classList.remove("Description-next");
    isActive = false; 
  }
};
 


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




 
const submenus = document.querySelectorAll('.submenu');

submenus.forEach(submenu => {
    const parentItem = submenu.parentElement;
    parentItem.addEventListener('mouseenter', () => {
        submenu.setAttribute('data-visible', 'true');
    });
    parentItem.addEventListener('mouseleave', () => {
        setTimeout(() => {
            submenu.setAttribute('data-visible', 'false');
        }, 500);
    });
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
  var quantity = parseInt(quantitySpan.innerText);
  quantity += 1;
  quantitySpan.innerText = quantity;
}

function decrementQuantity(button) {
  var quantitySpan = button.parentNode.querySelector('.quantity1');
  var quantity = parseInt(quantitySpan.innerText);
  quantity -= 1;
  if (quantity < 0) {
    quantity = 0;
  }
  quantitySpan.innerText = quantity;
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


// const angleDownButtons = document.querySelectorAll('.sidebar-a .angle-down');

// angleDownButtons.forEach(button => {
//     button.addEventListener('click', function(e) {
//         e.preventDefault();
//         const submenu = this.parentElement.nextElementSibling;

//         if (submenu.style.display === 'none' || submenu.style.display === '') {
//             submenu.style.display = 'block';
//         } else {
//             submenu.style.display = 'none';
//         }
//     });
// });




const angleDownButtons = document.querySelectorAll('.angle-down');


angleDownButtons.forEach(button => {
  
    button.addEventListener('click', function(e) {
      
        e.preventDefault();

        
        const submenu = this.nextElementSibling;

        
        if (submenu.style.display === 'none' || submenu.style.display === '') {
            submenu.style.display = 'block'; 
        } else {
            submenu.style.display = 'none'; 
        }
    });
});



