const filter = () => {

    const portfolioWrapper = document.querySelector('.portfolio-wrapper'),
          all = portfolioWrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no'),
          portfolioMenu = document.querySelector('.portfolio-menu'),
          portfolioMenuElements = portfolioMenu.querySelectorAll('li');

    const typeFilter = (markType) => {

        let selector = portfolioWrapper.querySelectorAll(`.${markType}`);

        all.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('animated', 'fadeIn');
        });
        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            selector.forEach(elem => {
                elem.style.display = 'block';
                elem.classList.add('animated', 'fadeIn');
            });
        }
        if (selector.length === 0) {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    portfolioMenu.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.tagName == 'LI') {
            portfolioMenuElements.forEach(elem => {
                elem.classList.remove('active');
            });
            target.classList.add('active');
        }
        
        typeFilter(target.classList[0]);  
    });

};

export default filter;