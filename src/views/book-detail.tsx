import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { addBook, selectSelectedBook, udpateSelectedBook, updateBooks, defaultBook, deleteBook } from "../app/reducer";

export const BookDetail = (props: { type: string }) => {
    const selectedBook = useSelector(selectSelectedBook);
    const history = useHistory();
    const dispatch = useDispatch();
    const textAreaRef = React.useRef<HTMLTextAreaElement>(document.createElement("textarea"));
    const nameRef = React.useRef<HTMLTextAreaElement>(document.createElement("textarea"));
    let actionType = props.type || 'view';
    const isView = actionType === 'view';
    const isEditable = actionType === 'edit' || actionType === 'add';
    const initialBook = actionType === 'add' ? defaultBook : selectedBook;
    const [currentBook, setCurrentBook] = useState(initialBook as any);

    const heading: { [prop: string]: string } = {
        view: 'Book Details',
        edit: 'Edit Book',
        add: 'Add new Book'
    }

    // Handle edits to the book
    const handleChange = (event: any) => {
        const target = event.target;
        const name = target.name;
        setCurrentBook({
            ...currentBook,
            [name]: target.value
        });
    }
    // Update State and Backend API
    const updateBook = () => {
        dispatch(updateBooks({ oldName: selectedBook?.name, newBook: currentBook }))
        dispatch(udpateSelectedBook(currentBook));
        history.push('/detail');
    }
    // Add new Book to State and update to API
    const addNewBook = () => {
        dispatch(addBook(currentBook));
        setTimeout(() => history.push('/list'), 500)
    }
    // Dynamic text area height
    const onTextInput = (focusedRef: React.MutableRefObject<HTMLElement>) => {
        focusedRef.current.style.height = 'auto'; focusedRef.current.style.height = (focusedRef.current.scrollHeight) + 'px';
    }

    // ComponentDidMount using Hooks
    // Set the height of the text area
    useEffect(() => {
        nameRef.current.setAttribute('style', 'height:' + (nameRef.current.scrollHeight + 10) + 'px;overflow-y:hidden;');
        textAreaRef.current.setAttribute('style', 'height:' + (textAreaRef.current.scrollHeight + 10) + 'px;overflow-y:hidden;');
    }, [])

    return (
        <div className={"book-detail-holder " + actionType}>
            <div>
                <div className="flex">
                    <h2 onClick={() => history.push('/list')} style={{ cursor: "pointer" }}><i className="fa fa-arrow-left back"></i></h2>
                    <h2>{heading[actionType]}</h2>
                    <div className="action-holder flex">
                        {actionType === 'view' && <div className="btn btn-outline" onClick={() => {
                            const result = window.confirm('Are you sure? This action will delete this book.');
                            if (result) {
                                dispatch(deleteBook(currentBook));
                                history.push('/list');
                            }
                        }}>Delete</div>}
                        {actionType === 'view' && <Link to="/edit" className="btn btn-outline">Edit</Link>}
                        {isEditable && <div className="btn btn-outline" onClick={() => { actionType === 'edit' && setCurrentBook(selectedBook); history.push(actionType === 'add' ? '/list' : '/detail') }}>Cancel</div>}
                        {isEditable && <div className="btn btn-primary" onClick={actionType === 'edit' ? updateBook : addNewBook}>{actionType === 'edit' ? 'Done' : 'Add'}</div>}
                    </div>
                </div>
            </div>
            <div className="detail-holder">
                <div className="title-desc flex">
                    <i className="fa fa-file-text"></i>
                    <div className="title-author">
                        <textarea className="book-name" value={currentBook?.name} readOnly={isView} rows={1} onChange={handleChange} name="name" ref={nameRef} onInput={()=> onTextInput(nameRef)}></textarea>
                        <div className="author-holder">by <input type="text" value={currentBook?.author} name="author" className="author-input" readOnly={isView} onChange={handleChange} /></div>
                    </div>
                </div>
                <div className="description">
                    <strong>Description:</strong>
                    <p><textarea value={currentBook?.description} readOnly={isView} rows={2} onChange={handleChange} name="description" ref={textAreaRef} onInput={()=> onTextInput(textAreaRef)} /></p>
                </div>
                <div className="count">
                    <strong>No of Books:</strong>
                    <p><input type="number" value={currentBook?.count} readOnly={isView} onChange={handleChange} name="count" /></p>
                </div>
            </div>
        </div>
    )
}