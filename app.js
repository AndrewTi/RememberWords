(() => {
    const id = id => document.getElementById(id);

    const curr = {
        word: null,
        data: null
    };
    const baseUrl = 'http://localhost:5000/rm-words/us-central1';

    const sendText = id('send-text');
    const inputText = id('translate-it');
    const outputText = id('output-text');
    const textBlock = id('text-block');
    const addWord = id('add-word');

    let header = new Headers({
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
    });

    addWord.addEventListener('click', () => {
        fetch(baseUrl + '/addWrod', {
            method: "POST",
            header,
            body: JSON.stringify({word: curr.word, data: curr.data})
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
            body: JSON.stringify({targLang: 'uk', sourceLang: 'auto', text: text})
        }).then(text => {
            text.json().then(data => {
                curr.word = data.sentences[0].orig;
                curr.data = JSON.stringify(data);

                console.log(data.sentences[0].trans)
                textBlock.classList.remove('hide');
                outputText.innerText = data.sentences[0].trans;
                console.log(data, 'gav');
            }).catch(err => {
                outputText.innerText = 'cannot to translate'
            })
            
        }).catch(err => {
            outputText.innerText = 'cannot to translate'
        })
    })
})()