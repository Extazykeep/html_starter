const mobileMenu = () => {
    const burgerButton = document.querySelector('.nav-fixed__burger');
    const navLinksWrapper = document.querySelector('.nav-fixed__links');
    const navLinks = navLinksWrapper.querySelectorAll('.nav-fixed__link');
    burgerButton.addEventListener('click', () => {
        navLinksWrapper?.classList.toggle('active');
        burgerButton?.classList.toggle('active');
    });
    for (const link of navLinks) {
        link.addEventListener('click', () => {
            if (
                !navLinksWrapper.classList.contains('active') ||
                !burgerButton.classList.contains('active')
            ) {
                return;
            }
            navLinksWrapper.classList.remove('active');
            burgerButton.classList.remove('active');
        });
    }
};
export default mobileMenu;
