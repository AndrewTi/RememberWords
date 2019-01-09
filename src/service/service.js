const service = (() => {
    const baseURL = 'http://localhost:8282/api/v1';

    const users = baseURL + '/users';
    const words = baseURL + '/words';

    const req = (data, method) => {
        return {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: method,
            body: JSON.stringify(data)
        }
    }

    //////////    USERS    ////////////

    /** Method with we can create a new user in the app
     * 
     * @param {Object} data 
     * @param {String} [data.name] 
     * @param {String} [data.last_name] 
     * @param {String} [data.email] 
     * @param {String} [data.phone]
     * @param {String} data.password
     * 
     * @returns {Promise}
     */
    const _createUser = (data) => fetch(users, ).then(resp => resp.json());

    /** Method with we can login into the app 
     * 
     * to login we can use email or phone number
     * 
     * @param {Object} data 
     * @param {String} [data.email]
     * @param {String} [data.phone]
     * @param {String} data.password
     * 
     * @returns {Promise}
     */
    const _login = (data) => fetch(users + '/login', data).then(resp => resp.json());



    /////////////    WORDS   ////////////////

    /** Method allow us translate a text and have feature like autodetect source text
     * 
     * @param {String} target - translate text to
     * @param {String} text 
     * @param {String} [source] - translate text from
     * 
     * @returns {Promise} 
     */
    const _translate = (target, text, source = 'auto') => fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${source}&tl=${target}&hl=${target}&dt=bd&dj=1&source=input&dt=t&q=` + encodeURI(text)).then(resp => resp.json());

    return {
        createUser: _createUser,
        login: _login,
        translate: _translate
    };
})()