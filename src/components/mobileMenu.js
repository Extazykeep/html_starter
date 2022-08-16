const mobileMenu = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 500) {
        const burgerButton = document.querySelector('.nav-fixed__burger');
        const navLinksWrapper = document.querySelector('.nav-fixed__links');
        const navLinks = navLinksWrapper.querySelectorAll('.nav-fixed__link');
        burgerButton?.addEventListener('click', () => {
            navLinksWrapper?.classList.toggle('active');
        });
        for (const link of navLinks) {
            link.addEventListener('click', () => {
                navLinksWrapper.classList.remove('active');
            });
        }
    }
};
export default mobileMenu;
