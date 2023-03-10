import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { getFilteredCategory } from '../../api';
import { Preloader } from './Preloader';
import { MealList } from '../meals/MealList';

function Category() {
	const { name } = useParams();
	const[meals, setMeals] = useState([]);
	const { goBack } = useHistory()

	useEffect(() => {
		getFilteredCategory(name).then(data => setMeals(data.meals));
	}, [name]);

	return <>
		<button className='btn purple darken-3' onClick={goBack}>Go back</button>
		{!meals.length ? <Preloader /> : <MealList meals={meals} />}
	</>
}

export { Category };