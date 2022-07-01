export class NetworkManager {
    static portNumber = 3000;

    static async doRequest(route, method) {
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
