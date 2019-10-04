import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import RecipeComponent from "../recipes/recipes";
import ShoppingList from "../shopping_list/shoppingList";

export default class HeaderComponent extends Component{
	render(){
		return(
			<Fragment>
				<Router>
					<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
						<NavLink activeClassName="activeNav" to="/" className='nav-link' className='navbar-brand'>Recipe Book</NavLink>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
						        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
									<NavLink exact activeClassName="activeNav" to="/recipes" className='nav-link'>Recipes</NavLink>
								</li>
								<li className="nav-item">
									<NavLink activeClassName="activeNav" to="/shopping_list" className='nav-link'>Shopping List</NavLink>
								</li>

							</ul>
							<ul className='navbar-nav'>
								<li className="nav-item">
									<a className="nav-link dropdown-toggle" href='#' id="navbarDropdown" role="button"
									   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										Dropdown
									</a>
									<div className="dropdown-menu" aria-labelledby="navbarDropdown">
										<a className="dropdown-item" href="#">Action</a>
										<a className="dropdown-item" href="#">Another action</a>
										<div className="dropdown-divider"></div>
										<a className="dropdown-item" href="#">Something else here</a>
									</div>
								</li>
							</ul>
						</div>
					</nav>

					<div className='container-fluid' style={{marginTop: '60px'}}>
						<Route exact path='/recipes' component={ RecipeComponent }/>
						<Route path='/shopping_list' component={ ShoppingList } />
					</div>
				</Router>
			</Fragment>
		)
	}
}
