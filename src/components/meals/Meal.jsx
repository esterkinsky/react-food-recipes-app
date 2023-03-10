import { Link } from 'react-router-dom';

function Meal(props) {
	const {strMeal, idMeal, strMealThumb} = props;

	return (
		<div class="card">
			<div class="card-image">
				<img src={strMealThumb} alt={strMeal} />

			</div>
			<div class="card-content">
				<span class="card-title">{strMeal}</span>
			</div>
			<div className='card-action'>
				<Link to={`/meal/${idMeal}`}>
					Watch recipe
				</Link>
			</div>
		</div>
	)
}

export {Meal};