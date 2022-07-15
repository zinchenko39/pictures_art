export const modals = () => {
    let btnPressed; //If any btn pressed => true;
    
    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelectorAll(closeSelector),
            scroll = calcScroll();

        trigger.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target) e.preventDefault();
                openModal(modal, scroll);
                if (destroy) elem.remove();
                btnPressed = true;
            });
        });

        close.forEach(elem => {
            elem.addEventListener('click', () => {
                closeModal(modal);
            });
        });

        modal.addEventListener('click', (e) => {
            if (e.target == modal) {
                closeModal(modal);
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {

            let display;
            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });

            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = 'hidden';
            }

        }, time);
    }

    function calcScroll () {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    function openByScroll (selector) {
        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight); //For old browsers

            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');
    // showModalByTime('.popup-consultation', 5000);
};



export function openModal(selector, scroll) {
    closeModal(selector);
    selector.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = `${scroll}px`;
    // selector.classList.remove('animated', 'fadeOut');
    // selector.classList.add('animated', 'fadeIn');
}

export function closeModal(selector) {
    const windows = document.querySelectorAll('[data-modal]');
    windows.forEach(item => {
        item.style.display = 'none';
        // selector.classList.remove('animated', 'fadeIn');
        // item.classList.add('animated', 'fadeOut');
    });
    selector.style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.marginRight = `0px`;
}