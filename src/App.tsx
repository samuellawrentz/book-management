import React, { useState } from 'react';
import { Header } from "./components/header";
import { ListBooks } from "./views/list-books";
import { BookDetail } from "./views/book-detail";
import { Switch, Redirect, Route } from "react-router-dom";

function App() {
  const [searchTerm, setSearchTerm] = useState();
  return (
    <div className="App">
      <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm}></Header>
      <div className="container">
        <div className="content-holder">
            <Switch>
              <Route path="/list" render={()=><ListBooks searchTerm={searchTerm}></ListBooks>}></Route>
              <Route path="/detail" component={BookDetail}></Route>
              <Route path="/edit" render={()=><BookDetail type="edit"></BookDetail>}></Route>
              <Route path="/add" render={()=><BookDetail type="add"></BookDetail>}></Route>
              <Redirect to="/list"></Redirect>
            </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
