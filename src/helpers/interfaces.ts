export interface IBook {
    name: string;
    author: string;
    description: string;
    count?: number;
}

export interface IUpdateBook {
    oldName: string | undefined;
    newBook: IBook;
}
export interface IAppState {
    books: IBook[];
    selectedBook: IBook | null;
}