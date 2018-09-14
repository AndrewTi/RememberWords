(() => {
    const id = id => document.getElementById(id);
    const curr = {
        word: null,
        data: null
    };
    const baseUrl = 'https://us-central1-rm-words.cloudfunctions.net';

    const sendText = id('send-text');
    const inputText = id('translate-it');
    const outputText = id('output-text');
    const description = id('description');
    const addWord = id('add-word');
    const download = id('download');

    let header = new Headers({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    });

    download.addEventListener('click', () => {
        fetch(baseUrl + '/toPDF', {
            method: "GET",
            header,
            mode: 'cors',
            cache: 'default'
        }).then(data => {
            window.open(`${data.url}`);
        }).catch(err => {
            alert(err.message);
            console.log(err);
        })
    });

    addWord.addEventListener('click', () => {
        fetch(baseUrl + '/addWord', {
            method: "POST",
            header,
            body: JSON.stringify({ word: curr.word, data: curr.data })
        }).then(resp => {
            return resp.json();
        }).then(data => {
            console.log(data);
        }).catch(err => {
            alert(err.message);
            console.log(err);
        })
    })

    sendText.addEventListener('click', () => {
        const text = inputText.value;

        fetch(baseUrl + '/translate', {
            method: "POST",
            header,
            body: JSON.stringify({ targLang: 'uk', sourceLang: 'auto', text: text })
        }).then(text => {
            text.json().then(data => {
                curr.word = data.sentences[0].orig;
                curr.data = JSON.stringify(data);
                console.log(data.sentences[0].trans)
                outputText.innerText = data.sentences[0].trans;

            }).catch(err => {
                outputText.innerText = 'cannot to translate'
            })

        }).catch(err => {
            outputText.innerText = 'cannot to translate'
        })

        // testing the output of all words in json-format
        // download.addEventListener('click', () => {
        //     fetch (baseUrl + '/getAllWords', {
        //         method: "GET",
        //         header,
        //         mode: 'cors',
        //         cache: 'default'
        //     }).then(data => {
        //         window.open(`${data.url}`);
        //     }).catch(err => {
        //         alert(err.message);
        //         console.log(err);
        //     })
        // });
    })
})()