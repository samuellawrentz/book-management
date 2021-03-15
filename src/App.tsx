import React, { useEffect, useState } from 'react';
import { Header } from "./components/header";
import { ListBooks } from "./views/list-books";
import { BookDetail } from "./views/book-detail";
import { Switch, Redirect, Route } from "react-router-dom";
import { ApiHelper } from './helpers/api';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks, selectSelectedBook } from "./app/reducer";

function App() {
  const [searchTerm, setSearchTerm] = useState();
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  // Initialize Books from the API
  useEffect(() => {
    ApiHelper.readBooks().then(data => {
      dispatch(setBooks(JSON.parse(data)));
      setTimeout(()=>setLoaded(true), 1000);
    });
  }, []);

  return (
    <div className="App">
      <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm}></Header>
      <div className="container">
        <div className="content-holder">
          <Switch>
            <Route path="/list" render={() => <ListBooks searchTerm={searchTerm} loaded={loaded}></ListBooks>}></Route>
            <Route path="/add" render={() => <BookDetail type="add"></BookDetail>}></Route>
            {useSelector(selectSelectedBook) && <Route path="/detail" component={BookDetail}></Route>}
            {useSelector(selectSelectedBook) && <Route path="/edit" render={() => <BookDetail type="edit"></BookDetail>}></Route>}
            <Redirect to="/list"></Redirect>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
