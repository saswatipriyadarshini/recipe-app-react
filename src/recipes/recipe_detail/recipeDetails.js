import React, { Component, Fragment } from 'react';

export default class RecipeDetails extends Component{
	constructor(props) {
		super(props);
		this.state = {
			recipeDetails: this.props && this.props.recipeDetails !== undefined ? this.props.recipeDetails : {},
		}
	}

	render(){
		const {recipeDetails} = this.props;
		console.log('props are in recipe details', recipeDetails);
		return(
			<Fragment>
				<div>
					<h2>{recipeDetails.name}</h2>
					<img src={recipeDetails.profileUrl} alt='' />
					<p>{recipeDetails.description}</p>
				</div>
			</Fragment>
		)
	}
}
