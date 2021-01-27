//------------------Menu Dropdown---------------------------------

const dropdownMenu = () => {
    const burger = document.querySelector(".hamburger");
    const contentMenu = document.querySelector('.menu-dropdown');
    
    burger.addEventListener("click", () => {
        burger.classList.toggle('hamburger-active');
        contentMenu.classList.toggle('menu-active');
      
    })

}
dropdownMenu();

//------------------Flip--------------------------

function flip() {
    btnMais6 = document.querySelector('.btn-github');
    btnVoltar6 = document.querySelector('.btn-voltar-6 p');

    btnMais6.addEventListener("click", function(e) {
        e.target.parentElement.parentElement.style.transform = 'rotateY(-180deg)';
      });
      btnVoltar6.addEventListener("click", function(e) {
        e.target.parentElement.parentElement.parentElement.style.transform = '';
      });
}

flip();



//------------------Toggle Sections---------------------------------

const toggleSections = () => {
    //buttons
    const aboutBtn = document.querySelector(".about-btn");
    const skillsBtn = document.querySelector('.skills-btn');
    const workBtn = document.querySelector('.work-btn');
    const contactBtn = document.querySelector('.contact-btn');
    const logoBtn = document.querySelector('.logo');
    const contactMe = document.querySelector('.contact-me');
    //menu dropdown
    const burger = document.querySelector(".hamburger");
    const contentMenu = document.querySelector('.menu-dropdown');
    //sections
    const contentAbout = document.querySelector('.section-about');
    const contentSkills = document.querySelector('.section-skills');
    const contentWork = document.querySelector('.section-work');
    const contentContact = document.querySelector('.section-contact');

    logoBtn.addEventListener("click", () => {
        if(contentAbout.classList.contains('section-in') === false) {
            contentAbout.classList.toggle('section-out');
            contentAbout.classList.toggle('section-in');
            
            if(contentSkills.classList.contains('section-in') === true) {
                contentSkills.classList.toggle('section-out');
                contentSkills.classList.toggle('section-in'); 
                if (contentMenu.classList.contains('menu-active') === true) {
                    burger.classList.toggle('hamburger-active');
                    contentMenu.classList.toggle('menu-active');
                }           
            } else if (contentWork.classList.contains('section-in') === true) {
                contentWork.classList.toggle('section-out');
                contentWork.classList.toggle('section-in');
                if (contentMenu.classList.contains('menu-active') === true) {
                    burger.classList.toggle('hamburger-active');
                    contentMenu.classList.toggle('menu-active');
                }
            } else if (contentContact.classList.contains('section-in') === true) {
                contentContact.classList.toggle('section-out');
                contentContact.classList.toggle('section-in');
                if (contentMenu.classList.contains('menu-active') === true) {
                    burger.classList.toggle('hamburger-active');
                    contentMenu.classList.toggle('menu-active');
                }
            } 
        
            
        } else if (contentMenu.classList.contains('menu-active')) {
            burger.classList.toggle('hamburger-active');
            contentMenu.classList.toggle('menu-active');
        }

    })

    aboutBtn.addEventListener("click", () => {
        if(contentAbout.classList.contains('section-in') === false) {
            contentAbout.classList.toggle('section-out');
            contentAbout.classList.toggle('section-in');
            burger.classList.toggle('hamburger-active');
            contentMenu.classList.toggle('menu-active');

            if(contentSkills.classList.contains('section-in') === true) {
                contentSkills.classList.toggle('section-out');
                contentSkills.classList.toggle('section-in');            
            } else if (contentWork.classList.contains('section-in') === true) {
                contentWork.classList.toggle('section-out');
                contentWork.classList.toggle('section-in');
            } else if (contentContact.classList.contains('section-in') === true) {
                contentContact.classList.toggle('section-out');
                contentContact.classList.toggle('section-in');
            }
        } else {
            burger.classList.toggle('hamburger-active');
            contentMenu.classList.toggle('menu-active');
        }

    })
    
    skillsBtn.addEventListener("click", () => {
        if(contentSkills.classList.contains('section-in') === false) {
            contentSkills.classList.toggle('section-out');
            contentSkills.classList.toggle('section-in');
            burger.classList.toggle('hamburger-active');
            contentMenu.classList.toggle('menu-active');
            
            if(contentAbout.classList.contains('section-in') === true) {
                contentAbout.classList.toggle('section-out');
                contentAbout.classList.toggle('section-in');            
            } else if (contentWork.classList.contains('section-in') === true) {
                contentWork.classList.toggle('section-out');
                contentWork.classList.toggle('section-in');
            } else if (contentContact.classList.contains('section-in') === true) {
                contentContact.classList.toggle('section-out');
                contentContact.classList.toggle('section-in');
            }
        } else {
            burger.classList.toggle('hamburger-active');
            contentMenu.classList.toggle('menu-active');
        }
        
    })

    workBtn.addEventListener("click", () => {
        if(contentWork.classList.contains('section-in') === false) {
            contentWork.classList.toggle('section-out');
            contentWork.classList.toggle('section-in');
            burger.classList.toggle('hamburger-active');
            contentMenu.classList.toggle('menu-active');
            if(contentSkills.classList.contains('section-in') === true) {
                contentSkills.classList.toggle('section-out');
                contentSkills.classList.toggle('section-in');            
            } else if (contentAbout.classList.contains('section-in') === true) {
                contentAbout.classList.toggle('section-out');
                contentAbout.classList.toggle('section-in');
            } else if (contentContact.classList.contains('section-in') === true) {
                contentContact.classList.toggle('section-out');
                contentContact.classList.toggle('section-in');
            }
        } else {
            burger.classList.toggle('hamburger-active');
            contentMenu.classList.toggle('menu-active');
        }
    })

    contactBtn.addEventListener("click", () => {
        if(contentContact.classList.contains('section-in') === false) {
            contentContact.classList.toggle('section-out');
            contentContact.classList.toggle('section-in');
            burger.classList.toggle('hamburger-active');
            contentMenu.classList.toggle('menu-active');
            if(contentSkills.classList.contains('section-in') === true) {
                contentSkills.classList.toggle('section-out');
                contentSkills.classList.toggle('section-in');            
            } else if (contentWork.classList.contains('section-in') === true) {
                contentWork.classList.toggle('section-out');
                contentWork.classList.toggle('section-in');
            } else if (contentAbout.classList.contains('section-in') === true) {
                contentAbout.classList.toggle('section-out');
                contentAbout.classList.toggle('section-in');
            }
        } else {
            burger.classList.toggle('hamburger-active');
            contentMenu.classList.toggle('menu-active');
        }
    })

    contactMe.addEventListener("click", () => {
        if(contentContact.classList.contains('section-in') === false) {
            contentContact.classList.toggle('section-out');
            contentContact.classList.toggle('section-in');
            contentAbout.classList.toggle('section-out');
            contentAbout.classList.toggle('section-in');
            if (contentMenu.classList.contains('menu-active') === true) {
                burger.classList.toggle('hamburger-active');
                contentMenu.classList.toggle('menu-active');
            }
        }
    })

}

toggleSections();

