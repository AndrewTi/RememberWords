// chrome.storage.sync.set({'key': 'value'}, function() {
//     console.log('Value is set to ' + 'value');
// });

import router from './routes/';

router.switchTo('home');

// const router = new Route();
// router.register('login', (router) => console.log('test', router));
// router.switchTo('login');

// const { translate, createUser, login } = service;

// // facade pattern
// const id = id => document.getElementById(id);

// const curr = {
//     word: null,
//     data: null
// };
// const baseUrl = 'https://us-central1-rm-words.cloudfunctions.net';

// const sendText      = id('send-text');
// const inputText     = id('translate-it');
// const outputText    = id('output-text');
// const description   = id('description');
// const addWord       = id('add-word');
// const download      = id('download');

// const enterForm         = document.querySelector('.enter-form');
// const loginElem         = document.querySelector(".login");
// const registration      = document.querySelector('.registration');
// const registrationForm  = document.querySelector('.registration-form');
// const loginForm         = document.querySelector('.login-form');
// const mainContent       = document.querySelector('.main');
// const homeButton        = document.querySelector('.homebtn');
// const signup            = document.querySelector('.signup');
// const signin            = document.querySelector('.signin');

// let header = new Headers({
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json'
// });

// download.addEventListener('click', () => {
//     fetch(baseUrl + '/toPDF', {
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

// addWord.addEventListener('click', () => {
//     fetch(baseUrl + '/addWord', {
//         method: "POST",
//         header,
//         body: JSON.stringify({ word: curr.word, data: curr.data })
//     }).then(resp => {
//         return resp.json();
//     }).then(data => {
//         console.log(data);
//     }).catch(err => {
//         alert(err.message);
//         console.log(err);
//     })
// })

// sendText.addEventListener('click', () => {
//     const text = inputText.value;

//     fetch(baseUrl + '/translate', {
//         method: "POST",
//         header,
//         body: JSON.stringify({ targLang: 'uk', sourceLang: 'auto', text: text })
//     }).then(text => {
//         text.json().then(data => {
//             curr.word = data.sentences[0].orig;
//             curr.data = JSON.stringify(data);
//             console.log(data.sentences[0].trans)
//             outputText.innerText = data.sentences[0].trans;

//         }).catch(err => {
//             outputText.innerText = 'cannot to translate'
//         })

//     }).catch(err => {
//         outputText.innerText = 'cannot to translate'
//     })
// })

// loginElem.addEventListener('click', () => {
//     // show
//     loginForm.classList.remove('hide');

//     // hide
//     enterForm.classList.add('hide');
//     loginElem.classList.add('hide');
//     registration.classList.add('hide');
//     mainContent.classList.add('hide');
//     registrationForm.classList.add('hide');
// })

// registration.addEventListener('click', () => {
//     // show
//     registrationForm.classList.remove('hide');

//     // hide
//     enterForm.classList.add('hide');
//     loginElem.classList.add('hide');
//     registration.classList.add('hide');
//     mainContent.classList.add('hide')
//     loginForm.classList.add('hide');
// })

// homeButton.addEventListener('click', ()=> {
//     //show
//     mainContent.classList.remove('hide');
//     enterForm.classList.remove('hide');
//     loginElem.classList.remove('hide');
//     registration.classList.remove('hide');

//     //hide
//     loginForm.classList.add('hide');
//     registrationForm.classList.add('hide');
// })

// signup.addEventListener('click', ()=> {
//     // show
//     registrationForm.classList.remove('hide');

//     // hide
//     enterForm.classList.add('hide');
//     loginElem.classList.add('hide');
//     registration.classList.add('hide');
//     mainContent.classList.add('hide');
//     loginForm.classList.add('hide');
// })

// signin.addEventListener('click', ()=> {
//     // show
//     loginForm.classList.remove('hide');

//     // hide
//     registrationForm.classList.add('hide');
//     enterForm.classList.add('hide');
//     loginElem.classList.add('hide');
//     registration.classList.add('hide');
//     mainContent.classList.add('hide');
// })