(() => {
    const id = id => document.getElementById(id);

    const curr = {
        word: null,
        data: null
    };
    const baseUrl = 'http://localhost:5000/rm-words/us-central1';

    let header = new Headers({
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
    });

    document.body.addEventListener('mouseup', (event) => {
        const elem = id('rm-tooltip');

        if(window.getSelection().toString().length < 1)
            return elem.style.display = 'none';

        if(elem)
            elem.parentNode.removeChild(elem);

        document.body.insertAdjacentHTML('afterbegin', `
            <div 
                id='rm-tooltip' 
                style='position: absolute; top: ${event.pageY}px; left: ${event.pageX - 125}px; width: 250px; height: 120px; background: red; z-index: 999999999'
                >
                    Hello World
            </div>
        `);
        console.log(window.getSelection().toString(), event);
    });

})();