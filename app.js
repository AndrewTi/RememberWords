(() => {
    const id = id => document.getElementById(id);

    const sendText = id('send-text');
    const inputText = id('translate-it');
    const outputText = id('output-text');

    let header = new Headers({
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
    });

    sendText.addEventListener('click', () => {
        const text = inputText.value;

        fetch(`https://translation.googleapis.com/language/translate/v2?key=AIzaSyDpiyel9X3GnOm2TbgLcOj_N8O_Knus8qQ&q=${text}&target=uk&format=text`, {
            method: "POST",
            header
        }).then(text => {
            text.json().then(data => {
                outputText.classList.remove('hide');
                outputText.innerText = data.data.translations[0].translatedText;
                console.log(data, 'gav');
            }).catch(err => {
                outputText.innerText = 'cannot to translate'
            })
            
        }).catch(err => {
            outputText.innerText = 'cannot to translate'
        })
    })
})()