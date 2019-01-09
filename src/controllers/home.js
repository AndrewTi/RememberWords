export default (switcher, data) => {
    console.log(data);

    switcher('login', {hello: 'test'});
}