const burger = (menuSelector, burgerSelector) => {

    const menuElem = document.querySelector(menuSelector),
          burgerElem = document.querySelector(burgerSelector);

    burgerElem.style.display = 'none';

    function showBurgerMenu () {
        burgerElem.style.display = 'block';
    }
    function hideBurgerMenu () {
        burgerElem.style.display = 'none';
    }

    menuElem.addEventListener('click', () => {
        if (burgerElem.style.display === 'none' && window.screen.availWidth < 993) {
            showBurgerMenu();
        } else {
            hideBurgerMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 993) hideBurgerMenu();
    });
};

export default burger;