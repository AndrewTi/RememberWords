const service = (() => {
    const baseURL = 'http://localhost:8282/api/v1';

    const users = baseURL + '/users';
    const words = baseURL + '/words';

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
    const _createUser = (data) => fetch(users, data).then(resp => resp.json());

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
     * @param {Object} data 
     * @param {String} [data.source] - translate text from
     * @param {String} data.target - translate text to
     * @param {String} data.text 
     * 
     * @returns {Promise} 
     */
    const _translate = (data) => fetch(words + '/translate', data).then(resp => resp.json());

    return {
        createUser: _createUser,
        login: _login,
        translate: _translate
    };
})()