(() => {
    // libs/modules
    const { translate } = service;

    // data of popup
    let state = {
        trans: null
    };

    // funcs
    const id = id => document.getElementById(id);

    document.body.insertAdjacentHTML('afterbegin', `<div id='rw-tooltip' data-info='remember words popup' class="rw-tooltip rw-hide"></div>`);

    const elem = id('rw-tooltip');

    document.addEventListener('mousedown', () => {
        getSelection().empty();

        if(!elem.classList.contains('rw-hide'))
            elem.classList.add('rw-hide');
    })

    document.body.addEventListener('mouseup', (event) => {
        chrome.storage.sync.get(['key'], function(result) {
            console.log('Value currently is content ' + result.key);
          });


        if(!elem.classList.contains('rw-hide'))
            elem.classList.add('rw-hide');

        elem.style.top = `${event.pageY + 10}px`;
        elem.style.left = `${event.pageX - 125}px`;

        const userText = window.getSelection().toString();

        if(userText.length < 1)
            return false;

        translate('uk', userText).then(resp => {
            elem.classList.remove('rw-hide');

            state.trans = resp;

            const text = resp.sentences[0].trans;

            elem.textContent = text;
        })
    });

})();