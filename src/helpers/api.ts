import { IBook } from "./interfaces";
export class ApiHelper {
    static readBooks(){
        return JSON.parse(localStorage.getItem('book') || '{}');
    }
    static writeBooks(books: IBook[]){
        localStorage.setItem('book', JSON.stringify(books));
    }
}
