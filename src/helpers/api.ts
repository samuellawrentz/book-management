import { IBook } from "./interfaces";
const apiEndpoint = 'http://localhost:3000/'
export class ApiHelper {
    static readBooks() {
        return fetch(apiEndpoint + 'getbooks').then(value => value.json());
    }
    static writeBooks(books: string) {
        return fetch(apiEndpoint+'writebooks', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: books
        });
    }
}
