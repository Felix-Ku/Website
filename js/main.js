// Navigation bar effect
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Certs section
const serviceModals = document.querySelectorAll(".certs-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
    // Make click other area also active
    var activePopup = document.querySelector(".certs-modal.flex-center.active");
    if (activePopup){
        activePopup.addEventListener("click", (e) => {
            if(e.target !== e.currentTarget) return;
            serviceModals.forEach((modalView) => {
                modalView.classList.remove("active");
            });
        });
    }
    
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn, i) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

// Porfolio section
const portfolioModels = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModel = function(modalClick){
    portfolioModels[modalClick].classList.add("active");
    var activePopupPort = document.querySelector(".portfolio-model.flex-center.active");
    if (activePopupPort){
        activePopupPort.addEventListener("click", (e) => {
            if(e.target !== e.currentTarget) return;
            portfolioModels.forEach((modalView) => {
                modalView.classList.remove("active");
            });
        });
    }
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModel(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn, i) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModels.forEach((portfolioModelView) => {
            portfolioModelView.classList.remove("active");
        });
    });
});

// About me button
const aboutModel = document.querySelector(".about-model");
const aboutButton = document.querySelector(".about-btn");
const aboutCloseBtn = document.querySelector(".about-close-btn");

aboutButton.addEventListener("click", () => {
    aboutModel.classList.add("active");
    var activePopupPort = document.querySelector(".about-model.flex-center.active");
    if (activePopupPort){
        activePopupPort.addEventListener("click", (e) => {
            if(e.target !== e.currentTarget) return;
            aboutModel.classList.remove("active");
        });
    }
});

aboutCloseBtn.addEventListener("click", () => {
    aboutModel.classList.remove("active");
});

// Contact button animation
$('.contactbutton').click(function(){
    var ele = $('.icon-to-change');
    if(ele.hasClass('fa-envelope')){
        ele.removeClass('fa-envelope')
           .addClass('fa-envelope-open')
    }
    else{
        ele.addClass('fa-envelope')
           .removeClass('fa-envelope-open')
    }
})

// Theme (Dark/Light)
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme")
const savedIcon = localStorage.getItem("saved-icon")

if (savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

// Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);

});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Responsive navigation menu
const menuBtn = document.querySelector(".nav-menu-btn");
const menucloseBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");
    

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
    var activeNav = document.querySelector(".navigation.active");
    if (activeNav){
        activeNav.addEventListener("click", (e) => {
            if(e.target !== e.currentTarget) return;
            navigation.classList.remove("active");
        });
    }
});

menucloseBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

// Scroll reveal animations
// Common reveal
ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100 
});

// Target reveal
ScrollReveal().reveal('.home .info h2, .section-title-01, section-title-02', { delay: 300, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 400, origin: 'right' });
ScrollReveal().reveal('.title h4', { delay: 300, origin: 'left' });
ScrollReveal().reveal('.title h3', { delay: 400, origin: 'right' });
ScrollReveal().reveal('.title h2', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.home .info .btn', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.media-icons i', { delay: 500, origin: 'left', interval: 100});
ScrollReveal().reveal('.home-img', { delay: 300, origin: 'bottom'});
// ScrollReveal().reveal('.about .description', { delay: 400, origin: 'right'});
// ScrollReveal().reveal('.about .professional-list li', { delay: 300, origin: 'right', interval: 100});
ScrollReveal().reveal('.skills-description, .certs-description', { delay: 500, origin: 'left'});
ScrollReveal().reveal('.experience-card, .certs-card, .education, .portfolio .img-card', { delay: 600, origin: 'bottom', interval: 100});
// ScrollReveal().reveal('footer .group', { delay: 500, origin: 'top', interval: 200});
ScrollReveal().reveal('#contact', { delay: 300, origin: 'bottom', interval: 100});
// ScrollReveal().reveal('.footer-copyright p', { delay: 300, origin: 'bottom', interval: 100});

