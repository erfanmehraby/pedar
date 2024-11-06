
let isActive = false;

const menu = document.querySelector(".image-menu2");
menu.addEventListener('click', onclick);

function onclick(e) {
  e.preventDefault();
  
  if (!isActive) {
    
    document.querySelector (".image-menu2").classList.add("image-menu3");
  document.querySelector (".mega-menu").classList.add("mega-menu-change");
  document.querySelector (".section-2").classList.add("section-2-next");
  document.querySelector (".section-4-ProductFirst").classList.add("section-4-ProductFirst-next");
  document.querySelector (".section-6-ProductFirst").classList.add("section-6-ProductFirst-next");
  document.querySelector (".section-5-change").classList.add("section-5-change1");
  document.querySelector (".section-5").classList.add("section-5-change2");
    
    isActive = true; 
  } else {
    
    document.querySelector(".image-menu2").classList.remove("image-menu3");
    document.querySelector (".section-2").classList.remove("section-2-next");
    document.querySelector(".mega-menu").classList.remove("mega-menu-change");
    document.querySelector(".section-4-ProductFirst-next").classList.remove("section-4-ProductFirst-next");
    document.querySelector(".section-6-ProductFirst-next").classList.remove("section-6-ProductFirst-next");
    document.querySelector(".section-5-change").classList.remove("section-5-change1");
    document.querySelector(".section-5").classList.remove("section-5-change2");
    
    isActive = false; 
  }
}

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
