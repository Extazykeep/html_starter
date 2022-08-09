const curentNavActive = () => {
    const navigationMenu = document.querySelector('.nav-fixed');
    const navNodes = navigationMenu.querySelectorAll('.nav-fixed__link');
    const sections = document.querySelectorAll('[data-observable]');

    const observer = new IntersectionObserver(observerCallback, {
        rootMargin: `-49.99% 0px`,
    });
    sections.forEach((node) => {
        observer.observe(node);
    });

    function observerCallback(entries) {
        entries.forEach((entry) => {
            if (navNodes) {
                if (entry.isIntersecting) {
                    navNodes.forEach((link) => {
                        link.getAttribute('href')?.substring(1) ===
                        entry.target.id
                            ? link.classList.add('active')
                            : link.classList.remove('active');
                    });
                }
            }
        });
    }
};

export default curentNavActive;
