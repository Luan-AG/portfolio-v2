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

//------------------Modal Download Resume Mobile---------------------------------

const modalResume = () => {
    const modalDownload = document.querySelector('.modal-download');
    const fileBtn = document.querySelector('.resume-icon');
    const cancel = document.querySelector('.cancel');
    const download = document.querySelector('.download');
    const burger = document.querySelector(".hamburger");
    const contentMenu = document.querySelector('.menu-dropdown');
    
 
    fileBtn.addEventListener("click", () => {
        modalDownload.classList.toggle('download-active');
        burger.classList.toggle('hamburger-active');
        contentMenu.classList.toggle('menu-active');
    })

    cancel.addEventListener("click", () => {
        modalDownload.classList.toggle('download-active');
    })

    download.addEventListener("click", () => {
        modalDownload.classList.toggle('download-active');
    })

}

modalResume();

//------------------Modal Download Resume Desktop---------------------------------
const modalResumeDesktop = () => {
    const modalDownload = document.querySelector('.modal-download');
    const fileBtn = document.querySelector('.resume-icon-desktop');
    const cancel = document.querySelector('.cancel');
    const download = document.querySelector('.download');
       
 
    fileBtn.addEventListener("click", () => {
        modalDownload.classList.toggle('download-active');
       
    })

    cancel.addEventListener("click", () => {
        modalDownload.classList.remove('download-active');
    })

    download.addEventListener("click", () => {
        modalDownload.classList.remove('download-active');
    })

}

modalResumeDesktop();

//------------------Modal Certificates--------------------------------- 

const modalCertif = () => {
    const modals = document.querySelectorAll('.modal');
    const certificates = document.querySelectorAll('.certificate-pics');
    const btnClose = document.querySelectorAll('.button-close-modal');

    certificates.forEach((certif, index) => {
        certif.addEventListener('click', function(){
            const modal = modals[index];
            modal.classList.toggle('modal-active');
        })
    })

    btnClose.forEach((btn, index) => {
        btn.addEventListener('click', function(){
            const modal = modals[index];
            modal.classList.toggle('modal-active');
        })
    })
}

modalCertif();

//------------------Backside Slide-------------------------- 

const backSideFunc = () => {
    const btnReadMore = document.querySelectorAll('.btn-read-more'); 
    const btnBack = document.querySelectorAll('.btn-back'); 
    const slide = document.querySelectorAll('.backside1'); 
    const buttonsNextPrev = document.querySelectorAll('.btn-next-prev');
    const buttonsPagination = document.querySelector('.swiper-pagination');

    btnReadMore.forEach( (btn, index) => {
        btn.addEventListener('click', function(){
            slide[index].style.height = '100%';
        });
    });

    btnBack.forEach( (btn, index) => {
        btn.addEventListener('click', function(){
            slide[index].style.height = '0%';
        });
    });

    buttonsNextPrev.forEach(btn => {
        btn.addEventListener('click', function(e){
            slide.forEach( element => {
                element.style.height = '0%';
            });
        });
    });
    
    buttonsPagination.addEventListener('click', function(e){
        slide.forEach( element => {
            element.style.height = '0%';
        }); 
    });
        
}

backSideFunc();

//------------------Toggle Sections Mobile---------------------------------

const toggleSections = () => {
    //buttons
    const navButtons = document.querySelectorAll('.nav-btns-mobile');
    const logoBtn = document.querySelector('#logo');
    const contactMe = document.querySelector('.contact-me');
    //menu dropdown
    const burger = document.querySelector(".hamburger");
    const contentMenu = document.querySelector('.menu-dropdown');
    //sections
    const sections = document.querySelectorAll('.sections');

    
    navButtons.forEach( (button, index) => {
        button.addEventListener('click', function(e){
            sections.forEach( sec => {
                sec.classList.remove('section-out');
                sec.classList.remove('section-in');
            })
            const sectionNumber = sections[index];
            sectionNumber.classList.toggle('section-out'); //makes visibility 100%
            sectionNumber.classList.toggle('section-in'); // translate in
            burger.classList.toggle('hamburger-active');
            contentMenu.classList.toggle('menu-active');
        });
    });
    
    contactMe.addEventListener("click", () => {
        sections.forEach( sec => {
            sec.classList.remove('section-out');
            sec.classList.remove('section-in');
        })
        const sectionNumber = sections[3];
        sectionNumber.classList.toggle('section-out'); 
        sectionNumber.classList.toggle('section-in'); 
        burger.classList.remove('hamburger-active');
        contentMenu.classList.remove('menu-active');
    })

    logoBtn.addEventListener("click", () => {
        sections.forEach( sec => {
            sec.classList.remove('section-out');
            sec.classList.remove('section-in');
        })
        const sectionNumber = sections[0];
        sectionNumber.classList.toggle('section-out');
        sectionNumber.classList.toggle('section-in'); 
        burger.classList.remove('hamburger-active');
        contentMenu.classList.remove('menu-active');
    })

}

toggleSections();

//------------------Toggle Sections Desktop--------------------------------- 

const toggleSectionsDesk = () => {
    
    const navButtons = document.querySelectorAll('.nav-buttons');
    const sections = document.querySelectorAll('.sections');
    
    navButtons.forEach( (button, index) => {
        button.addEventListener('click', function(e){
            sections.forEach( sec => {
                sec.classList.remove('section-out');
                sec.classList.remove('section-in');
            })
            const sectionNumber = sections[index];
            sectionNumber.classList.toggle('section-out');
            sectionNumber.classList.toggle('section-in');
        });
    });
} 

toggleSectionsDesk();

//------------------Toggle Underscore Desktop---------------------------------

const toggleUnderscore = () => {
    const navButtons = document.querySelectorAll('.nav-buttons');
    const btnContactMe = document.querySelector('.contact-me');
    const btnLogo = document.getElementById('logo');

    navButtons.forEach((button) => {
        button.addEventListener('click', function(){
            if(!button.classList.contains('active')) {
                navButtons.forEach((btn) => {
                    btn.classList.remove('active');
                })
                button.classList.toggle('active');
            } else {
                return;
            }
        })
    })

    btnContactMe.addEventListener('click', function(){
        navButtons.forEach((btn) => {
            btn.classList.remove('active');
        })
        navButtons[3].classList.toggle('active');
    })

    btnLogo.addEventListener('click', function(){
        navButtons.forEach((btn) => {
            btn.classList.remove('active');
        })
        navButtons[0].classList.toggle('active');
    })


}

toggleUnderscore();


