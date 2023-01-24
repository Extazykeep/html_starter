const curentNavActive = () => {
    const navigationMenu = document.querySelector('.nav-fixed');
    const navigationLinks = navigationMenu.querySelectorAll('.nav-fixed__link');
    const observableSections = document.querySelectorAll('[data-observable]');
    const links = {};

    navigationLinks.forEach((link) => {
        links[link.getAttribute('href').substring(1)] = link;
    });

    const observer = new IntersectionObserver(observerCallback, {
        rootMargin: `-49.99% 0px`,
    });
    observableSections.forEach((section) => {
        observer.observe(section);
    });

    function observerCallback(entries) {
        entries.forEach((entry) => {
            const intersectedId = entry.target.id;
            if (navigationLinks) {
                entry.isIntersecting
                    ? links[intersectedId].classList.add('active')
                    : links[intersectedId].classList.remove('active');
            }
        });
    }
};

export default curentNavActive;
