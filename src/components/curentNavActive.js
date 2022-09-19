const curentNavActive = () => {
    const navigationMenu = document.querySelector('.nav-fixed');
    const navNodes = navigationMenu.querySelectorAll('.nav-fixed__link');
    const sections = document.querySelectorAll('[data-observable]');
    const links = {};

    navNodes.forEach((node) => {
        links[node.getAttribute('href').substring(1)] = node;
    });

    const observer = new IntersectionObserver(observerCallback, {
        rootMargin: `-49.99% 0px`,
    });
    sections.forEach((node) => {
        observer.observe(node);
    });

    function observerCallback(entries) {
        entries.forEach((entry) => {
            if (navNodes) {
                entry.isIntersecting
                    ? links[entry.target.id].classList.add('active')
                    : links[entry.target.id].classList.remove('active');
            }
        });
    }
};

export default curentNavActive;
