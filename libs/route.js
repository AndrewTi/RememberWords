// Chain of responsibility pattern
class Route {
    constructor() {
        this.routes = []
    }


    /** For register new route and assign a function 
     * 
     * @param {String} name 
     * @param {Function} controller 
     * 
     * @returns {Object} returns a object that are you working on
     */
    register(name, controller) {
        if(!controller && typeof controller !== 'function')
            throw 'second param is required and have to be a function';

        
        this.routes.push({
            path: name,
            render: data => controller(this.switchTo, data)
        });

        return this;
    }

    /** For switching between registered routes
     * 
     * @param {String} name name of route that you want to switch on 
     * @param {Object} data it's a data what you want to pass to called route
     * 
     * @returns {Object} returns a object that are you working on
     */
    switchTo(name, data) {
        const route = this.routes.find(route => route.path == name);

        console.log(route);

        if(!route)
            throw "The route doesn't exist";

        route.render(data);

        return this;
    }
}

export default Route;