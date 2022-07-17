const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);
    
    txtInputs.forEach(input => {
        //Only russian keys
        input.addEventListener('keypress', (e) => {
            if (e.key.match(/[^а-яё 2-9]/ig)) {
                e.preventDefault();
            }

        });
        //No autofill
        input.addEventListener('input', (e) => {
            if (e.target.value.match(/[a-z]/ig)) {
                input.value = '';
            }
        });
    });
};

export default checkTextInputs;