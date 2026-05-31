"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderApiResponse = renderApiResponse;
function renderApiResponse(response, formatter) {
    switch (response.status) {
        case "loading":
            return "loading...";
        case "success":
            return `call the formatter: ${formatter(response.data)} (fetched at ${response.fetchedAt})`;
        case "error":
            return `return a string with the status code and message: Error ${response.statusCode}: ${response.message}`;
    }
}
