(() => {
    const { translate } = service;
    const id = id => document.getElementById(id);

    document.body.insertAdjacentHTML('afterbegin', `<div id='rw-tooltip' class="rw-tooltip rw-hide"></div>`);

    const elem = id('rw-tooltip');

    const curr = {
        word: null,
        data: null
    };
    const baseUrl = 'http://localhost:5000/rm-words/us-central1';

    document.addEventListener('mousedown', () => {
        getSelection().empty();

        if(!elem.classList.contains('rw-hide'))
            elem.classList.add('rw-hide');
    })

    document.body.addEventListener('mouseup', (event) => {
        if(!elem.classList.contains('rw-hide'))
            elem.classList.add('rw-hide');

        elem.style.top = `${event.pageY + 10}px`;
        elem.style.left = `${event.pageX - 125}px`;

        const userText = window.getSelection().toString();

        if(userText.length < 1)
            return false;

        translate('uk', userText).then(resp => {
            elem.classList.remove('rw-hide');
            const text = resp.sentences[0].trans;

            elem.textContent = text;
        })
        console.log(window.getSelection(), event);
    });

})();