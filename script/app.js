//------------------Menu Dropdown---------------------------------

const dropdownMenu = () => {
    const burger = document.querySelector(".hamburger");
    const content = document.querySelector('.menu-dropdown');
    
    burger.addEventListener("click", () => {
        burger.classList.toggle('hamburger-active');
        content.classList.toggle('menu-active');
      
    })

}

const aboutSection = () => {
    const logo = document.querySelector(".logo");
    const content = document.querySelector('.section-about');
    
    logo.addEventListener("click", () => {
        content.classList.toggle('section-in');
    })

}

dropdownMenu();
aboutSection();