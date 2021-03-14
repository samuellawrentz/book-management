import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from './store';
import { IBook, IUpdateBook, IAppState } from "../helpers/interfaces";
import { ApiHelper } from "../helpers/api";
import { useDispatch, useSelector } from 'react-redux';

const initialState: IAppState = {
    books: [],
    selectedBook: null
};

export const defaultBook: IBook = {
    name: 'New Book',
    author: 'Myself',
    description: 'This is a placeholder for a new book. Please add the details and submit to add the book to the database. Have a nice day!',
    count: 1
}

export const AppSlice = createSlice({
    name: 'AppState',
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        addBook: (state, action: PayloadAction<IBook>) => {
            const index = state.books.findIndex(book => book.name === action.payload.name);
            if (index !== -1)
                state.books[index].count = (state.books[index].count || 1) + 1;
            else
                state.books.push(action.payload);
            ApiHelper.writeBooks(JSON.stringify(state.books));
        },
        udpateSelectedBook: (state, action: PayloadAction<IBook>) => {
            state.selectedBook = action.payload;
        },
        updateBooks: (state, action: PayloadAction<IUpdateBook>) => {
            const filteredBooks = state.books.filter((book => book.name !== action.payload.oldName));
            state.books = [...filteredBooks, action.payload.newBook];
            ApiHelper.writeBooks(JSON.stringify(state.books));
        },
        setBooks: (state, action: PayloadAction<any>) => {
            state.books = action.payload;
        }
    },
});

export const { addBook, udpateSelectedBook, updateBooks, setBooks } = AppSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectBooks = (state: RootState) => state.books;
export const selectSelectedBook = (state: RootState) => state.selectedBook;

export default AppSlice.reducer;
