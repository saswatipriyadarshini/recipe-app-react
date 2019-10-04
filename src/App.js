import React, {Fragment} from 'react';
// import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./header/header";
// import RecipeComponent from "./recipes/recipes";
// import ShoppingList from "./shopping_list/shoppingList";

function App() {
  return (
    <Fragment>
      {/*<div className="App">*/}
      {/*<header className="App-header">*/}
      {/*<img src={logo} className="App-logo" alt="logo" />*/}
      {/*<p>*/}
      {/*Edit <code>src/App.js</code> and save to reload.*/}
      {/*</p>*/}
      {/*<a*/}
      {/*className="App-link"*/}
      {/*href="https://reactjs.org"*/}
      {/*target="_blank"*/}
      {/*rel="noopener noreferrer"*/}
      {/*>*/}
      {/*Learn React*/}
      {/*</a>*/}
      <HeaderComponent />
      {/*</header>*/}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/*<RecipeComponent/>*/}
            {/*<ShoppingList/>*/}
          </div>
        </div>
      </div>
    </Fragment>
    // </div>
  );
}

export default App;
