import { Temporal } from "@js-temporal/polyfill";
export type ApiResponse<T> =
|{ status: "loading"}
|{ status: "success"; data: T; fetchedAt: Temporal.Instant}
|{ status: "error"; message: string; statusCode: number};

export function renderApiResponse<T>(
    response: ApiResponse<T>,
    formatter: (data: T) => string,

): string {
    switch (response.status) {
        case "loading":
            return "loading...";
            case "success":
                return `call the formatter: ${formatter(response.data)} (fetched at ${response.fetchedAt})`;
                case "error":
                    return `return a string with the status code and message: Error ${response.statusCode}: ${response.message}`;
    }

}