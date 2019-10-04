import React, {Component, Fragment} from 'react';
import './recipe-list.css';
import ButterChicken from '../../img/recipes/butter-chicken.jpeg';
import CheeseCake from '../../img/recipes/cheesecake.jpeg';
import Ratatouille from '../../img/recipes/ratatouille.jpeg';

export default class RecipeList extends Component{
	constructor(props){
		super(props);
		this.state = {
			recipeList: [
				{
					'name': 'Ratatouille',
					'description': ' Ratatouille is a bright and chunky summer vegetable stew, ' +
						'rich with olive oil and fragrant with garlic and herbs. Hailing from Provence,' +
						'a region in the south of France near the Mediterranean Sea, ' +
						'ratatouille is a bright and chunky summer vegetable stew, rich with olive oil and fragrant with garlic and herbs.',
					'profileUrl': Ratatouille
				},
				{
					'name': 'Butter Chicken',
					'description': 'Butter chicken originated from Northern India in 1948. Created by Kundan Lal Gujral, ' +
						'you may notice that Butter Chicken (known as murgh makhani — chicken with butter), ' +
						'is similar to British tikka masala.\n' + '\n' +
						'Prepared in a buttery gravy with the addition of cream gives the curry sauce a ' +
						'silky smooth rich texture. Most restaurants are known to add in copious amounts of butter, ' +
						'which as a result can leave you feeling bloated or ill from the slick of grease.',
					'profileUrl': ButterChicken,
				},
				{
					'name': 'Cheesecake',
					'description': 'Cheesecake is a sweet dessert consisting of one or more layers. ' +
						'The main, and thickest layer, consists of a mixture of soft, fresh cheese, eggs, and sugar.' +
						' If there is a bottom layer, it often consists of a crust or base made from crushed cookies, ' +
						'graham crackers, pastry, or sometimes sponge cake.',
					'profileUrl': CheeseCake
				}
			]
		}
	}

	showRecipeDetails(item){
		this.props.parentCallBack(item);
	}

	render(){
		const {recipeList} = this.state;
		return(
			<Fragment>
				<div className='recipe-list__container'>
					{
						recipeList && recipeList.map((item, index) => {
							return(
								<Fragment key={index}>
									<div className='recipe-list-item' onClick={this.showRecipeDetails.bind(this, item)}>
										<div>
											<h3>{item.name}</h3>
											<p>{item.description}</p>
										</div>
										<img src={item.profileUrl} alt='' />
									</div>
									<div style={{padding: '2px'}}></div>
								</Fragment>
							)
						})
					}
				</div>
			</Fragment>
		)
	}
}
