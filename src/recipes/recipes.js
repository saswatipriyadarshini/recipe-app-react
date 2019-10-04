import React, { Component, Fragment } from 'react';
import RecipeDetails from "./recipe_detail/recipeDetails";
import RecipeList from "./recipe_list/recipeList";

export default class RecipeComponent extends Component{
	constructor(props){
		super(props);
		this.state = {
			recipeDetails: {}
		}
	}

	callBackFunction = (recipeDetails) => {
		this.setState({
			recipeDetails: recipeDetails
		})
	}
	render(){
		return(
			<Fragment>
				<div className="row">
					<div className="col-sm-5">
						<RecipeList props = {this.props} parentCallBack={this.callBackFunction}/>
					</div>
					<div className="col-sm-7" style={{borderLeft: '1px solid #eee'}}>
						<RecipeDetails recipeDetails={this.state.recipeDetails} />
					</div>
				</div>
			</Fragment>
		)
	}
}
