import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { addBook, selectSelectedBook, udpateSelectedBook, updateBooks, defaultBook } from "../app/reducer";

export const BookDetail = (props: { type: string }) => {
    const selectedBook = useSelector(selectSelectedBook);
    const history = useHistory();
    const dispatch = useDispatch();
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

    const handleChange = (event: any) => {
        const target = event.target;
        const name = target.name;

        setCurrentBook({
            [name]: target.value
        });
    }

    const updateBook = () => {
        const updatedBook = { ...selectedBook, ...currentBook };
        dispatch(updateBooks({ oldName: selectedBook?.name, newBook: updatedBook }))
        dispatch(udpateSelectedBook(updatedBook));
        history.push('/detail');
    }
    
    const addNewBook = () => {
        dispatch(addBook({ ...defaultBook, ...currentBook }));
        setTimeout(() => history.push('/list'), 1000)
    }

    return (
        <div className={"book-detail-holder " + actionType}>
            <div>
                <div className="flex">
                    <h2 onClick={() => history.push('/list')} style={{ cursor: "pointer" }}><i className="fa fa-arrow-left back"></i></h2>
                    <h2>{heading[actionType]}</h2>
                    <div className="action-holder flex">
                        {actionType === 'view' && <Link to="/edit" className="btn btn-outline">Edit Book</Link>}
                        {isEditable && <div className="btn btn-outline" onClick={() => { actionType === 'edit' && setCurrentBook(selectedBook); history.push(actionType === 'add' ? '/list' : '/detail') }}>Cancel</div>}
                        {isEditable && <div className="btn btn-primary" onClick={actionType === 'edit' ? updateBook : addNewBook}>{actionType === 'edit' ? 'Done' : 'Add'}</div>}
                    </div>
                </div>
            </div>
            <div className="detail-holder">
                <div className="title-desc flex">
                    <i className="fa fa-file-text"></i>
                    <div className="title-author">
                        <input className="book-name" type="text" value={currentBook?.name} readOnly={isView} onChange={handleChange} name="name"></input>
                        <div>by <input type="text" value={currentBook?.author} name="author" className="author-input" readOnly={isView} onChange={handleChange} /></div>
                    </div>
                </div>
                <div className="description">
                    <strong>Description:</strong>
                    <p><textarea value={currentBook?.description} readOnly={isView} rows={2} onChange={handleChange} name="description" /></p>
                </div>
                <div className="count">
                    <strong>No of Books:</strong>
                    <p><input type="number" value={currentBook?.count} readOnly={isView} onChange={handleChange} name="count" /></p>
                </div>
            </div>
        </div>
    )
}