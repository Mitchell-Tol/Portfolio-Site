/**
 * Communicates to the routes using HTTP requests.
 * @author Mitchell Tol
 */
export class NetworkManager {
    static portNumber = 3000;

    /**
     * Performs an HTTP request.
     * @param { String } route The route to contact.
     * @param { String } method The HTTP method (GET, POST, PUT, DELETE).
     * @param { JSON } data The data to give to the HTTP request.
     * @returns
     */
    static async doRequest(route, method, data) {
        const url = `${location.protocol}//${location.hostname}:${NetworkManager.portNumber}${route}`;
        switch (method) {
            case "GET":
                return await (await fetch(url)).json();

            case "POST":
                // ToDo: Implement POST requests.
                return null;

            case "PUT":
                // ToDo: Implement PUT requests.
                return null;

            case "DELETE":
                // ToDo: Implement DELETE requests.
                return null;

            default:
                console.error("No valid HTTP method was given. Or it might not have been implemented yet.");
                return null;
        }
    }
}
