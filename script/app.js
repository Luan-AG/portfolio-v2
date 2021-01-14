//------------------MENU OVERLAY EFFECT---------------------------------

const dropdownMenu = () => {
    const burger = document.querySelector(".hamburger");
    const content = document.querySelector('.menu-dropdown');
    
    burger.addEventListener("click", () => {
        burger.classList.toggle('hamburger-active');
        content.classList.toggle('menu-active');
      
    })

}

dropdownMenu();