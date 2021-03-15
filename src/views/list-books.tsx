import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IBook } from "../helpers/interfaces";
import { selectBooks } from "../app/reducer";
import { udpateSelectedBook } from "../app/reducer";
import { BlankState } from "../components/blank-state";
export const ListBooks = (props: any) => {
    const dispatch = useDispatch();
    // Sort and group books alphabetically
    const books = useSelector(selectBooks);
    let sortedBooks = [...books].sort((a, b) => a.name.localeCompare(b.name));
    props.searchTerm && (sortedBooks = sortedBooks.filter(book=> book.name.toLowerCase().indexOf(props.searchTerm.toLowerCase()) !== -1))
    const groupedBooks = sortedBooks.reduce((acc: any, currentItem) => {
        let index = currentItem.name[0];
        if (!acc[index]) acc[index] = { index, books: [currentItem] }
        else acc[index].books.push(currentItem);
        return acc;
    }, {});

    return (
       <div className="list-holder">
           <div className="flex">
               <h2>List of Available books</h2>
               <div className="action-holder">
                        <Link to="/add" className="btn btn-outline">Add Book</Link>
                    </div>
               </div>
           <div className="books-list">
           {
               props.loaded ? Object.values(groupedBooks).map((group: any) => {
                return (
                    <div className="group-holder">
                        <div className="group-header">{group.index}</div>
                        <div className="books-holder">
                            {group.books.map((book: IBook) => {
                                return (
                                    <Link className="book-holder" key={book.name} to="/detail" onClick={()=>{dispatch(udpateSelectedBook(book))}}>
                                        <div className="flex">
                                            <i className="fa fa-book"></i>
                                            <div className="details">
                                                <div className="book-name">
                                                    {book.name}
                                                </div>
                                                <div className="book-author">
                                                    {book.author}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                )
            }) : <BlankState></BlankState>
            }
           </div>
       </div>

    )
}